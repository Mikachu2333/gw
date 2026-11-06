'====================================================================
'                            使用说明:
'制作 VBA 文件时, 请只保留一个Sub 用于执行,  其他过程请用 Function 关键字。
'Sub 过程名推荐用 用户ID_中文名称 的方式命名,避免代码冲突。
'VBA 文件请使用ANSI(简体中文GB2312)编码保存, 微软的VBA解释器不支持UTF-8这类编码,会导致中文乱码。
'不正确的代码可能导致word崩溃、文档丢失或损坏。
'请务必保证vba代码来源安全可靠，插件作者不承担vba文件造成的任何损失！
'分享 VBA 文件时，请尊重作者版权，注明来源以示感谢。
'====================================================================
'作者: 小恐龙'
'日期:2023年2月2日'

'---------------------------------------------------------------------
'本示例主要演示了几个特性:
'   1. VBA脚本的批量文件处理能力
'   2. 变量既可以用英文名称,也可以用中文, 使用中文变量会很大程度上帮助新手理解代码

'---------------------------------------------------------------------

Option Explicit    '强制声明变量是个好习惯, 可以提高代码速度,减少bug
Dim strF As String
Dim strR As String
Dim 最近错误 As String

Sub gw_批量替换()
    Dim 筛选器 As FileDialog
    Dim 文件名 As Variant
    Dim 成功数 As Long
    Dim 失败清单 As String

    Set 筛选器 = Application.FileDialog(msoFileDialogFilePicker)
    With 筛选器
        .AllowMultiSelect = True
        .Title = "请选择要批量替换的文档,可多选"
        ' 原先不看 .Show 的返回值: 点取消之后继续读 SelectedItems 直接报错
        If .Show <> -1 Then Exit Sub
    End With

    strF = InputBox("请输入要查找的内容,支持通配符,默认是查找下划线_", , "([_]{1,})")
    If strF = "" Then Exit Sub
    strR = InputBox("请输入替换文本,支持通配符,默认是给查找内容加()", , "(\1)")
    If strR = "" Then Exit Sub

    ' 这个脚本就地改写并保存原文件, 中途失败会留下改了一半的文档, 必须先让用户确认
    If MsgBox("将直接修改并保存选中的 " & 筛选器.SelectedItems.Count & " 个文件, 不生成副本。" _
        & vbCrLf & "建议先备份。确定继续吗?", vbYesNo + vbExclamation, "批量替换") <> vbYes Then Exit Sub

    For Each 文件名 In 筛选器.SelectedItems
        If Right(文件名, Len(文件名) - InStrRev(文件名, ".")) Like "doc*" Then
            If 替换一个文档(CStr(文件名)) Then
                成功数 = 成功数 + 1
            Else
                失败清单 = 失败清单 & vbCrLf & 文件名 & "：" & 最近错误
            End If
        End If
    Next
    Set 筛选器 = Nothing

    ' 原先整段没有任何错误处理: 第 3 个文件打不开就中断整个 Sub, 却已经把前 2 个存盘了,
    ' 而那两句 MsgBox 根本走不到, 用户不知道还剩多少没处理
    If 失败清单 = "" Then
        MsgBox "已完成！成功处理 " & 成功数 & " 个文件。", vbInformation
    Else
        MsgBox "成功 " & 成功数 & " 个; 以下文件未处理:" & vbCrLf & 失败清单, vbExclamation
    End If
End Sub

Function 替换一个文档(fname As String) As Boolean
    Dim 文件 As Document

    最近错误 = ""
    On Error GoTo 失败
    Set 文件 = Documents.Open(fname)
    With 文件.Content.find
        .ClearFormatting
        .MatchWildcards = True    '支持通配符
        .Wrap = wdFindStop
        .Text = strF           '要查找的内容
        With .Replacement
            .ClearFormatting
            .Text = strR        '替换后的内容
        End With
        .Execute Replace:=wdReplaceAll   '替换所有
    End With
    文件.Close wdSaveChanges     '保存文件
    替换一个文档 = True
    Exit Function

失败:
    最近错误 = Err.Description
    替换一个文档 = False
    If Not 文件 Is Nothing Then
        ' 打开成功但替换/保存失败时文档已脏, 明确按"不保存"关掉,
        ' 免得留下一个状态不明的窗口
        On Error Resume Next
        文件.Close wdDoNotSaveChanges
    End If
End Function
