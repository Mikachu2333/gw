'====================================================================
'                            使用说明:
'制作 VBA 文件时, 请只保留一个Sub 用于执行,  其他过程请用 Function 关键字。
'Sub 过程名推荐用 用户ID_中文名称 的方式命名,避免代码冲突。
'VBA 文件请使用ANSI(简体中文GB2312)编码保存, 微软的VBA解释器不支持UTF-8这类编码,会导致中文乱码。
'不正确的代码可能导致word崩溃、文档丢失或损坏。
'请务必保证vba代码来源安全可靠，插件作者不承担vba文件造成的任何损失！
'分享 VBA 文件时，请尊重作者版权，注明来源以示感谢。
'====================================================================

'  原作者: chinablank
'  源码地址: https://club.excelhome.net/thread-716702-1-3.html
'  修改人: 小恐龙
'  修改日期: 2023年1月31日

Option Explicit    '强制声明变量是个好习惯, 可以提高代码速度,减少bug
Sub xkonglong_删除页眉页脚()
    Dim oSec As Section
    Dim okCount As Long
    Dim failCount As Long

    Application.ScreenUpdating = False
    With ActiveDocument
        .ActiveWindow.View.Type = wdPrintView
        For Each oSec In .Sections
            If 删除单节页眉页脚(oSec) Then
                okCount = okCount + 1
            Else
                failCount = failCount + 1
            End If
        Next
    End With
    Application.ScreenUpdating = True

    ' 原来整段 On Error Resume Next、节数无条件累加: 文档限制编辑、页脚链接到前一节
    ' 或 SeekView 失败时什么都没删掉, 却照样报"删除完毕, 共处理 N 节"
    If failCount = 0 Then
        MsgBox "页眉页脚删除完毕, 共处理 " & okCount & " 节！", vbInformation
    Else
        MsgBox "成功处理 " & okCount & " 节, 另有 " & failCount & " 节失败" _
            & "(多为文档限制了编辑或页眉页脚链接到前一节)。", vbExclamation
    End If
End Sub

Function 删除单节页眉页脚(oSec As Section) As Boolean
    Dim i As Long

    On Error GoTo 失败
    With oSec.Document
        For i = wdSeekCurrentPageHeader To wdSeekCurrentPageFooter
            .ActiveWindow.View.SeekView = i
            .Application.Selection.WholeStory
            .Application.Selection.Delete
        Next
        .ActiveWindow.View.SeekView = wdSeekMainDocument
        ' 内置样式必须用常量: 原先写 .Styles("页眉") 这种本地化名字, 在非中文界面的
        ' Word 上取不到样式, 页眉横线就静默留着
        .Styles(wdStyleHeader).ParagraphFormat.Borders(wdBorderBottom).LineStyle = wdLineStyleNone
    End With
    删除单节页眉页脚 = True
    Exit Function

失败:
    ' 出错时可能正停在页眉或页脚视图里, 必须把用户带回正文
    On Error Resume Next
    oSec.Document.ActiveWindow.View.SeekView = wdSeekMainDocument
    删除单节页眉页脚 = False
End Function
