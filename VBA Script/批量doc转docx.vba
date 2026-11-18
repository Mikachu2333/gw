'====================================================================
'                            使用说明:
'制作 VBA 文件时, 请只保留一个Sub 用于执行,  其他过程请用 Function 关键字。
'Sub 过程名推荐用 用户ID_中文名称 的方式命名,避免代码冲突。
'VBA 文件请使用ANSI(简体中文GB2312)编码保存, 微软的VBA解释器不支持UTF-8这类编码,会导致中文乱码。
'不正确的代码可能导致word崩溃、文档丢失或损坏。
'请务必保证vba代码来源安全可靠，插件作者不承担vba文件造成的任何损失！
'分享 VBA 文件时，请尊重作者版权，注明来源以示感谢。
'====================================================================
'原作者:ExtendOffice 20181128
'小恐龙略作修改
'用法: 选中文件夹即可''

Sub Doc批量转Docx()
    Dim picker As FileDialog, fs As Object, folder As Object, source As Object
    Dim pending As New Collection, filename As Variant, target As String, message As String
    Dim completed As Long, skipped As Long, failures As String
    Set picker = Application.FileDialog(msoFileDialogFolderPicker)
    If picker.Show <> -1 Then Exit Sub
    Set fs = CreateObject("Scripting.FileSystemObject")
    Set folder = fs.GetFolder(picker.SelectedItems(1))
    For Each source In folder.Files
        If LCase(fs.GetExtensionName(source.Name)) = "doc" And Left(source.Name, 2) <> "~$" Then pending.Add source.Path
    Next
    For Each filename In pending
        target = fs.BuildPath(folder.Path, fs.GetBaseName(filename) & ".docx")
        If fs.FileExists(target) Then
            skipped = skipped + 1
        Else
            message = 转换单个(CStr(filename), target)
            If message = "" Then
                completed = completed + 1
            Else
                failures = failures & vbCrLf & filename & "：" & message
            End If
        End If
    Next
    MsgBox "转换完成 " & completed & " 个，因重名跳过 " & skipped & " 个。" & failures
End Sub

Private Function 转换单个(ByVal 源文件 As String, ByVal 目标文件 As String) As String
    Dim 文件 As Document
    On Error GoTo 失败
    Set 文件 = 打开批处理文档(源文件, True)
    文件.SaveAs 目标文件, wdFormatDocumentDefault
    文件.Close wdDoNotSaveChanges
    Exit Function
失败:
    转换单个 = Err.Description
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
