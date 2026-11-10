Option Explicit
' 公文准式：将整页渲染为图像后生成 PDF，不含原文文字层。
' 依赖安装包 Resources 中的 render-image-pdf.ps1 和 ImagePdfWriter.cs。
' Windows Word/WPS VBA；不依赖 make-look-scanned 或 Office 外部 PDF 工具。
Sub 公文准式_保存图片型PDF副本()
    Dim source As Document, pages As Object, page As Object
    Dim picker As FileDialog, output As String, helper As String
    Dim fs As Object, shell As Object, stream As Object, xml As Object
    Dim root As Object, node As Object, folder As String, result As String
    Dim oldView As Long, oldSeek As Long, oldUpdating As Boolean
    Dim i As Long, count As Long, code As Long, command As String
    Dim stateSaved As Boolean, succeeded As Boolean
    Dim dpiInput As String
    On Error GoTo Failed
    Set source = ActiveDocument
    dpiInput = InputBox("请选择分辨率（DPI）：100、150、200、300、400 或 600", "图片型 PDF 分辨率", "200")
    If dpiInput = "" Then Exit Sub
    dpiInput = Trim(dpiInput)
    Select Case dpiInput
        Case "100", "150", "200", "300", "400", "600"
        Case Else
            MsgBox "请输入列出的 DPI 档位。", vbExclamation
            Exit Sub
    End Select
    Set fs = CreateObject("Scripting.FileSystemObject")
    Set shell = CreateObject("WScript.Shell")
    Set picker = Application.FileDialog(2)
    picker.Title = "保存图片型 PDF 副本"
    picker.InitialFileName = fs.GetBaseName(source.Name) & "_图片型.pdf"
    If picker.Show <> -1 Then Exit Sub
    output = picker.SelectedItems(1)
    If LCase(Right(output, 4)) <> ".pdf" Then output = output & ".pdf"
    If fs.FileExists(output) Then
        MsgBox "文件已存在，请选择其他文件名，避免覆盖。", vbExclamation
        Exit Sub
    End If
    helper = GW_FindRasterHelper(shell, fs)
    If helper = "" Then
        Set picker = Application.FileDialog(3)
        picker.Title = "请选择公文准式安装目录中的 Resources/render-image-pdf.ps1"
        picker.AllowMultiSelect = False
        If picker.Show <> -1 Then Exit Sub
        helper = picker.SelectedItems(1)
    End If
    If LCase(fs.GetFileName(helper)) <> "render-image-pdf.ps1" Or Not fs.FileExists(helper) Then Err.Raise 5, , "未找到图片型 PDF 辅助脚本。"
    If Not fs.FileExists(fs.BuildPath(fs.GetParentFolderName(helper), "ImagePdfWriter.cs")) Then Err.Raise 5, , "缺少 ImagePdfWriter.cs，请安装完整版本。"
    folder = fs.BuildPath(fs.GetSpecialFolder(2), "gw_mika-" & fs.GetTempName)
    fs.CreateFolder folder
    Set xml = CreateObject("MSXML2.DOMDocument.6.0")
    xml.appendChild xml.createProcessingInstruction("xml", "version='1.0' encoding='utf-8'")
    Set root = xml.createElement("job")
    root.setAttribute "output", output
    root.setAttribute "dpi", dpiInput
    xml.appendChild root
    oldView = source.ActiveWindow.ActivePane.View.Type
    oldSeek = source.ActiveWindow.ActivePane.View.SeekView
    oldUpdating = Application.ScreenUpdating
    stateSaved = True
    Application.ScreenUpdating = False
    source.ActiveWindow.ActivePane.View.Type = 3
    source.ActiveWindow.ActivePane.View.SeekView = 0
    source.Repaginate
    Set pages = source.ActiveWindow.ActivePane.Pages
    count = pages.Count
    If count < 1 Then Err.Raise 5, , "没有可导出的页面。"
    For i = 1 To count
        Application.StatusBar = "正在捕获页面 " & i & " / " & count
        Set page = pages.Item(i)
        Set stream = CreateObject("ADODB.Stream")
        stream.Type = 1
        stream.Open
        stream.Write page.EnhMetaFileBits
        stream.SaveToFile fs.BuildPath(folder, CStr(i) & ".emf"), 1
        stream.Close
        Set stream = Nothing
        Set node = xml.createElement("page")
        node.setAttribute "number", CStr(i)
        node.setAttribute "width", Trim(Str(page.Width))
        node.setAttribute "height", Trim(Str(page.Height))
        root.appendChild node
    Next i
    xml.Save fs.BuildPath(folder, "pages.xml")
    command = GW_Quote(Environ("SystemRoot") & "\System32\WindowsPowerShell\v1.0\powershell.exe") & _
        " -NoLogo -NoProfile -NonInteractive -File " & GW_Quote(helper) & " -JobDirectory " & GW_Quote(folder)
    code = shell.Run(command, 0, True)
    If fs.FileExists(fs.BuildPath(folder, "result.txt")) Then
        result = fs.OpenTextFile(fs.BuildPath(folder, "result.txt"), 1, False, -1).ReadAll
    End If
    If code <> 0 Or Not fs.FileExists(output) Or Left(result, 3) <> "OK " Then
        Err.Raise 5, , "图片型 PDF 转换失败，退出码 " & code & vbCrLf & result & vbCrLf & "如未生成日志，请检查 Windows PowerShell 脚本执行策略。"
    End If
    succeeded = True
    MsgBox "已生成 " & count & " 页图片型 PDF：" & vbCrLf & output, vbInformation
    GoTo Cleanup
Failed:
    MsgBox Err.Description & IIf(folder <> "", vbCrLf & "诊断文件保留在：" & folder, ""), vbExclamation, "图片型 PDF 导出失败"
Cleanup:
    On Error Resume Next
    If Not stream Is Nothing Then stream.Close
    If stateSaved Then
        source.Activate
        source.ActiveWindow.ActivePane.View.Type = oldView
        source.ActiveWindow.ActivePane.View.SeekView = oldSeek
        Application.ScreenUpdating = oldUpdating
    End If
    ' 只删除本次创建且成功处理的临时目录；失败保留页面和日志。
    If succeeded And folder <> "" Then fs.DeleteFolder folder, True
End Sub

Private Function GW_Quote(ByVal value As String) As String
    If InStr(value, Chr(34)) > 0 Then Err.Raise 5, , "路径包含不支持的引号。"
    GW_Quote = Chr(34) & value & Chr(34)
End Function

Private Function GW_FindRasterHelper(ByVal shell As Object, ByVal fs As Object) As String
    Dim key As Variant, install As String, candidate As String
    On Error Resume Next
    For Each key In Array("HKLM\SOFTWARE\gw_mika\公文准式\InstallPath", "HKLM\SOFTWARE\WOW6432Node\gw_mika\公文准式\InstallPath")
        Err.Clear
        install = shell.RegRead(key)
        If Err.Number = 0 And install <> "" Then
            candidate = fs.BuildPath(install, "Resources\render-image-pdf.ps1")
            If fs.FileExists(candidate) Then
                GW_FindRasterHelper = candidate
                Exit Function
            End If
        End If
    Next key
End Function
