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
'日期: 2026年8月9日

Sub 加粗第n章第n条()
    Dim pat As Variant
    Dim rng As Range
    Dim hitCount As Long

    If ActiveDocument.ProtectionType <> wdNoProtection Then
        MsgBox "文档已限制编辑, 请先取消保护再运行。", vbExclamation
        Exit Sub
    End If

    Application.ScreenUpdating = False
    On Error GoTo 收尾

    ' 定位命中范围后直接给它加粗。原先写成 .Replacement.Font.Bold = True 配
    ' Replace:=wdReplaceAll, 却没给 .Replacement.Text 赋 "^&", Word 的语义是
    ' "替换成空", 结果整段匹配文字被删除而不是加粗。
    For Each pat In Array("第[0-9一二三四五六七八九十]@章", "第[0-9一二三四五六七八九十]@条")
        Set rng = ActiveDocument.Content
        With rng.Find
            .ClearFormatting
            .MatchWildcards = True
            .Forward = True
            .Wrap = wdFindStop
            .Text = pat
            Do While .Execute
                rng.Font.Bold = True
                hitCount = hitCount + 1
                rng.Collapse wdCollapseEnd
                rng.End = ActiveDocument.Content.End
            Loop
        End With
    Next pat

收尾:
    Application.ScreenUpdating = True
    If Err.Number <> 0 Then
        MsgBox "加粗过程中出错: " & Err.Description, vbCritical
        Exit Sub
    End If
    MsgBox "加粗完成, 共处理 " & hitCount & " 处。", vbInformation
End Sub
