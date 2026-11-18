'====================================================================
'                            使用说明:
'制作 VBA 文件时, 请只保留一个Sub 用于执行,  其他过程请用 Function 关键字。
'Sub 过程名推荐用 用户ID_中文名称 的方式命名,避免代码冲突。
'VBA 文件请使用ANSI(简体中文GB2312)编码保存, 微软的VBA解释器不支持UTF-8这类编码,会导致中文乱码。
'不正确的代码可能导致word崩溃、文档丢失或损坏。
'请务必保证vba代码来源安全可靠，插件作者不承担vba文件造成的任何损失！
'分享 VBA 文件时，请尊重作者版权，注明来源以示感谢。
'====================================================================

'作者：小恐龙
'日期：2025年8月31日
'说明：重写代码，解决了有时候生成的pdf不含扩展名的情况。

Option Explicit

Sub 多文档转PDF()
    Dim picker As FileDialog, filename As Variant, message As String, failures As String
    Dim completed As Long
    Set picker = Application.FileDialog(msoFileDialogFilePicker)
    With picker
        .Filters.Clear
        .Filters.Add "Word 文件", "*.doc;*.docx;*.docm"
        .AllowMultiSelect = True
        .Title = "选择需转换为 PDF 的文档"
        If .Show <> -1 Then Exit Sub
    End With
    For Each filename In picker.SelectedItems
        message = 导出单个PDF(CStr(filename))
        If message = "" Then
            completed = completed + 1
        Else
            failures = failures & vbCrLf & filename & "：" & message
        End If
    Next
    MsgBox "已导出 " & completed & " 个 PDF。" & failures
End Sub

Private Function 导出单个PDF(ByVal 源文件 As String) As String
    Dim fs As Object, 文件 As Document, 基名 As String, 输出 As String, 序号 As Long
    On Error GoTo 失败
    Set fs = CreateObject("Scripting.FileSystemObject")
    基名 = fs.BuildPath(fs.GetParentFolderName(源文件), fs.GetBaseName(源文件))
    输出 = 基名 & ".pdf"
    Do While fs.FileExists(输出)
        序号 = 序号 + 1
        输出 = 基名 & "_" & 序号 & ".pdf"
    Loop
    Set 文件 = 打开批处理文档(源文件, True)
    文件.ExportAsFixedFormat 输出, wdExportFormatPDF
    文件.Close wdDoNotSaveChanges
    Exit Function
失败:
    导出单个PDF = Err.Description
    On Error Resume Next
    If Not 文件 Is Nothing Then 文件.Close wdDoNotSaveChanges
End Function

Private Function 打开批处理文档(ByVal 文件路径 As String, ByVal 只读 As Boolean) As Document
    Dim 现有文档 As New Collection, 已打开 As Document, 打开结果 As Document
    Dim 原安全设置 As MsoAutomationSecurity, 错误信息 As String
    For Each 已打开 In Documents
        If StrComp(已打开.FullName, 文件路径, vbTextCompare) = 0 Then Err.Raise vbObjectError + 2, , "文档已经打开。"
        现有文档.Add 已打开
    Next
    原安全设置 = Application.AutomationSecurity
    On Error GoTo 打开失败
    Application.AutomationSecurity = msoAutomationSecurityForceDisable
    Set 打开结果 = Documents.Open(FileName:=文件路径, ReadOnly:=只读, Revert:=False, AddToRecentFiles:=False)
    For Each 已打开 In 现有文档
        If 已打开 Is 打开结果 Then
            Set 打开结果 = Nothing
            Err.Raise vbObjectError + 2, , "文档已经打开。"
        End If
    Next
    Application.AutomationSecurity = 原安全设置
    Set 打开批处理文档 = 打开结果
    Exit Function
打开失败:
    错误信息 = Err.Description
    On Error Resume Next
    Application.AutomationSecurity = 原安全设置
    If Not 打开结果 Is Nothing Then 打开结果.Close wdDoNotSaveChanges
    On Error GoTo 0
    Err.Raise vbObjectError + 3, , 错误信息
End Function

