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
    Dim xDlg As FileDialog
    Dim xFolder As String
    Dim xFileName As String
    Dim baseName As String
    Dim target As String
    Dim okCount As Long
    Dim skipCount As Long
    Dim failList As String

    Set xDlg = Application.FileDialog(msoFileDialogFolderPicker)
    If xDlg.Show <> -1 Then Exit Sub
    xFolder = xDlg.SelectedItems(1) & "\"

    Application.ScreenUpdating = False
    xFileName = Dir(xFolder & "*.doc", vbNormal)
    Do While xFileName <> ""
        ' Dir 的 "*.doc" 会把 .docx 也匹配进来, 必须自己按扩展名再筛一遍
        If LCase(Right(xFileName, 4)) = ".doc" Then
            baseName = Left(xFileName, InStrRev(xFileName, ".") - 1)
            target = xFolder & baseName & ".docx"
            If Dir(target) <> "" Then
                ' 同名 .docx 已存在时覆盖会毁掉用户已有的文件, 跳过并计数
                skipCount = skipCount + 1
            ElseIf 转换单个(xFolder & xFileName, target) Then
                okCount = okCount + 1
            Else
                failList = failList & vbCrLf & xFileName
            End If
        End If
        xFileName = Dir()
    Wend

    Application.ScreenUpdating = True
    Shell "explorer.exe """ & xFolder & """"
    If failList = "" Then
        MsgBox "转换完成: 成功 " & okCount & " 个, 因同名跳过 " & skipCount & " 个。", vbInformation
    Else
        MsgBox "成功 " & okCount & " 个, 跳过 " & skipCount & " 个。" & vbCrLf & _
               "以下文件转换失败(多为被占用或已损坏):" & failList, vbExclamation
    End If
End Sub

Function 转换单个(ByVal 源文件 As String, ByVal 目标文件 As String) As Boolean
    Dim docBefore As Long
    Dim doc As Document

    docBefore = Documents.Count
    On Error GoTo 失败
    ' 用 Open 的返回值操作, 不要用 ActiveDocument: Open 失败时 ActiveDocument 是用户
    ' 原本就开着的那份文档, 拿它去 Close 会连带关掉用户的工作。
    Set doc = Documents.Open(FileName:=源文件, ConfirmConversions:=False, _
        ReadOnly:=False, AddToRecentFiles:=False, PasswordDocument:="", _
        PasswordTemplate:="", Revert:=False, WritePasswordDocument:="", _
        WritePasswordTemplate:="", Format:=wdOpenFormatAuto, XMLTransform:="")
    ' 目标名用 InStrRev 截出的主干拼接, 不能用 Replace(名字, "doc", "docx"):
    ' 那是整串替换, document.doc 会变成 docxument.docx
    doc.SaveAs 目标文件, wdFormatDocumentDefault
    doc.Close SaveChanges:=wdDoNotSaveChanges
    转换单个 = True
    Exit Function

失败:
    转换单个 = False
    If Documents.Count > docBefore Then
        On Error Resume Next
        ActiveDocument.Close SaveChanges:=wdDoNotSaveChanges
    End If
End Function
