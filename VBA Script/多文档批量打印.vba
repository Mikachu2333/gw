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
'日期:2023年2月13日'


Option Explicit    '强制声明变量

Dim 最近错误 As String    '由 打印一个文档 回报失败原因

Sub 批量打印WORD文档()
    Dim 筛选器 As FileDialog, 文件名
    Dim 份数 As Long, 份数输入 As String
    Dim 成功数 As Long, 失败数 As Long, 失败清单 As String

    Set 筛选器 = Application.FileDialog(msoFileDialogFilePicker)
    With 筛选器
        .AllowMultiSelect = True
        .Title = "请选择要批量打印的文档,可多选"
        If .Show <> -1 Then Exit Sub     '点击取消按钮退出
    End With

    份数输入 = InputBox("请输入要打印的份数?", "公文准式VBA脚本", 1)
    ' 取消或填了非数字时不再靠吞异常蒙过去, 直接退出
    If Len(份数输入) < 1 Or Len(份数输入) > 3 Or 份数输入 Like "*[!0-9]*" Then Exit Sub
    份数 = CLng(份数输入)
    If 份数 <= 0 Then Exit Sub

    For Each 文件名 In 筛选器.SelectedItems
        If Right(文件名, Len(文件名) - InStrRev(文件名, ".")) Like "doc*" Then
            If 打印一个文档(CStr(文件名), 份数) Then
                成功数 = 成功数 + 1
            Else
                失败数 = 失败数 + 1
                失败清单 = 失败清单 & vbCrLf & 文件名 & "：" & 最近错误
            End If
        End If
    Next
    Set 筛选器 = Nothing

    If 失败数 = 0 Then
        MsgBox "已完成！共打印了" & 成功数 & "个文件,各" & 份数 & "份!", vbInformation, "批量打印"
    Else
        MsgBox "成功打印 " & 成功数 & " 个文件,各" & 份数 & "份; 以下 " & 失败数 & " 个文件失败:" _
            & vbCrLf & 失败清单, vbExclamation, "批量打印"
    End If
End Sub

' 原来整段 On Error Resume Next: 文档打不开也照样往下走, 计数照加, 于是一条没打出来也报"共打印了N个文件"
Function 打印一个文档(fname As String, 份数 As Long) As Boolean
    Dim 文件 As Document
    最近错误 = ""
    On Error GoTo 打印失败
    Set 文件 = 打开批处理文档(fname, True)
    ' 前面七个逗号等于省略 Background, Word 会按 Options.PrintBackground 默认走后台打印,
    ' 下一行就 Close 文档, spooler 还没渲染完就已经没有文档了 —— 一份都打不出来但计数是成功的。
    文件.PrintOut Background:=False, Copies:=份数
    文件.Close False
    打印一个文档 = True
    Exit Function
打印失败:
    最近错误 = Err.Description
    On Error Resume Next
    If Not 文件 Is Nothing Then 文件.Close False
    打印一个文档 = False
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
