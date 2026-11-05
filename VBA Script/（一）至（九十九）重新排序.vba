Sub 中文数字重新编号
    ' 功能：将选定段落中首组中文括号编号（如（一）、（二）…）重新从（一）开始连续编号
    ' 支持编号范围 1~99（如（一）~（九十九））
    ' 仅处理含有编号的段落，未含编号的段落原样保留，编号顺序按段落先后递增

    Dim rng As Range
    Dim para As Paragraph
    Dim i As Integer
    Dim regEx As Object
    Dim matches As Object
    Dim match As Object
    Dim 超出上限 As Boolean

    ' 检查是否有选中内容
    If Selection.Type = wdSelectionIP Then
        MsgBox "请先选中要重新编号的内容。", vbExclamation, "提示"
        Exit Sub
    End If

    Set rng = Selection.Range
    Set regEx = CreateObject("VBScript.RegExp")
    regEx.Global = False          ' 仅匹配每段第一个编号
    ' 必须锚定在段首：原先不限位置，正文里"根据（三）的规定"这种句子也会被当成编号改掉
    regEx.Pattern = "^[ 　]*(（[一二三四五六七八九十]+）)"   ' 匹配段首中文括号编号（含全角空格缩进）

    i = 1
    ' 遍历选中区域内的所有段落
    For Each para In rng.Paragraphs
        Set matches = regEx.Execute(para.Range.Text)
        If matches.Count > 0 Then
            Set match = matches(0)
            
            ' 计算匹配文本在段落中的位置。
            ' 位置必须取捕获组(编号本身)而不是整个 match：match 现在含段首缩进，
            ' 直接拿它的首尾去替换会把缩进一起吃掉，公文段落的首部空格就没了。
            Dim matchRange As Range
            Dim 编号 As Object
            Set 编号 = match.SubMatches(0)
            Set matchRange = para.Range
            matchRange.Start = para.Range.Start + match.FirstIndex + 编号.FirstIndex
            matchRange.End = matchRange.Start + 编号.Length
            
            ' 替换为新的连续编号（调用转换函数）
            ' 辅助函数只支持到 99，原先超过 99 会返回 "(100)"，外面又包一层中文括号，
            ' 结果写出"（(100)）"这种四不像；现在直接停下来告诉用户到哪为止
            If i > 99 Then
                超出上限 = True
                Exit For
            End If
            matchRange.Text = "（" & 数字转中文(i) & "）"
            i = i + 1
        End If
    Next para

    ' 清理对象
    Set regEx = Nothing
    Set matchRange = Nothing
    Set rng = Nothing

    If 超出上限 Then
        MsgBox "编号超过 99 个，已停止。共重新编号 " & (i - 1) & " 个。", vbExclamation, "完成"
    Else
        MsgBox "重新编号完成！共处理 " & (i - 1) & " 个编号。", vbInformation, "完成"
    End If
End Sub

' ------------------------------------------------------------
' 辅助函数：将整数（1~99）转换为中文数字（一~九十九）
' ------------------------------------------------------------
Function 数字转中文(ByVal num As Integer) As String
    Dim digits As String
    digits = "一二三四五六七八九"
    
    If num <= 0 Then
        数字转中文 = ""
        Exit Function
    End If
    
    If num <= 9 Then
        数字转中文 = Mid(digits, num, 1)
    ElseIf num <= 99 Then
        Dim shi As Integer, ge As Integer
        shi = num \ 10
        ge = num Mod 10
        If shi = 1 Then
            数字转中文 = "十"
        Else
            数字转中文 = Mid(digits, shi, 1) & "十"
        End If
        If ge > 0 Then
            数字转中文 = 数字转中文 & Mid(digits, ge, 1)
        End If
    Else
        ' 超过 99 时只回阿拉伯数字本身：括号由调用方统一加，
        ' 原先在这里再包一层英文括号会拼出"（(100)）"
        数字转中文 = CStr(num)
    End If
End Function