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
'日期: 2024年11月10日

Sub 批量盖章()
    Dim doc As Document
    Dim sec As Section
    Dim picPath As String
    Dim 筛选器 As FileDialog
    Dim 成功数 As Long
    Dim 跳过数 As Long

    Set doc = ActiveDocument

    Set 筛选器 = Application.FileDialog(msoFileDialogFilePicker)
    With 筛选器
        .Title = "请指定公章图片"
        ' 原先不 Clear 就直接 Add：对话框里还留着 Word 自带的过滤器，序号 1 未必是这一条；
        ' 而且 "*.gif; *.png" 分号后带空格，个别宿主按整串当模式匹配不到任何文件
        .Filters.Clear
        .Filters.Add "公章图片", "*.gif;*.png", 1
        If .Show <> -1 Then Exit Sub
    End With
    If 筛选器.SelectedItems.Count <= 0 Then Exit Sub
    picPath = CStr(筛选器.SelectedItems(1))

    On Error GoTo 出错

    ' 原先只往 wdHeaderFooterPrimary 加图。公文版头几乎都开了"首页不同"，
    ' 那种情况下首页和偶数页一张章都不盖，脚本却一声不响地跑完。
    For Each sec In doc.Sections
        If 盖到页眉(sec.Headers(wdHeaderFooterPrimary), picPath, doc) Then
            成功数 = 成功数 + 1
        Else
            跳过数 = 跳过数 + 1
        End If
        If sec.PageSetup.DifferentFirstPageHeaderFooter <> 0 Then
            If 盖到页眉(sec.Headers(wdHeaderFooterFirstPage), picPath, doc) Then
                成功数 = 成功数 + 1
            Else
                跳过数 = 跳过数 + 1
            End If
        End If
        If sec.PageSetup.OddAndEvenPagesHeaderFooter <> 0 Then
            If 盖到页眉(sec.Headers(wdHeaderFooterEvenPages), picPath, doc) Then
                成功数 = 成功数 + 1
            Else
                跳过数 = 跳过数 + 1
            End If
        End If
    Next sec

    If 跳过数 = 0 Then
        MsgBox "盖章完成，共处理 " & 成功数 & " 个页眉。", vbInformation
    Else
        MsgBox "已盖章 " & 成功数 & " 个页眉；另有 " & 跳过数 & " 个页眉链接到前一节，" _
            & "未重复盖章。", vbExclamation
    End If
    Exit Sub

出错:
    MsgBox "盖章过程中出错: " & Err.Description, vbCritical
End Sub

Function 盖到页眉(HF As HeaderFooter, picPath As String, doc As Document) As Boolean
    Dim shp As Shape

    ' 链接到前一节的页眉和上一节共用内容，再盖一次就是同一页两个章
    If HF.LinkToPrevious Then
        盖到页眉 = False
        Exit Function
    End If

    Set shp = HF.Shapes.AddPicture(picPath)
    With shp
        .LockAspectRatio = msoTrue
        .Width = doc.CentimetersToPoints(3)   ' 公章直径 3 厘米
        .Height = doc.CentimetersToPoints(3)
        .WrapFormat.Type = wdWrapBehind       ' 置于文字下方
        .Left = 350    ' 位置按页面坐标, 不要超过页面宽度
        .Top = 500     ' 位置按页面坐标, 不要超过页面高度
    End With
    盖到页眉 = True
End Function
