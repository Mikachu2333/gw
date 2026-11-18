'自动打印序列号
'源代码地址:https://blog.csdn.net/yipiantian/article/details/124245361
'小恐龙根据源码修改.

'使用方法:   
'光标移动到需要写入编号的地方,运行本脚本即可.     默认格式为: 第N份
'你可以修改编号前缀和后缀.  ""可留空
'如果对编号有格式要求, 可以先调整好编号所在位置的文字格式再运行脚本, 也可以直接修改本脚本.

Sub 自动打印序列号()
    Dim 原文档 As Document, 备份 As Document, 占位 As Range
    Dim 开始 As Long, 结束 As Long, 编号 As Long, 已发送 As Long, 长度 As Long
    Dim 已备份 As Boolean, 信息 As String
    开始 = 输入编号("开始打印编号")
    If 开始 = 0 Then Exit Sub
    结束 = 输入编号("结束打印编号")
    If 结束 = 0 Then Exit Sub
    If 结束 < 开始 Then
        MsgBox "结束编号不能小于开始编号。", vbExclamation
        Exit Sub
    End If
    If MsgBox("将打印 " & (结束 - 开始 + 1) & " 份，是否继续？", vbYesNo + vbQuestion) <> vbYes Then Exit Sub
    On Error GoTo 打印失败
    Set 原文档 = ActiveDocument
    Set 占位 = Selection.Range.Duplicate
    长度 = 占位.End - 占位.Start
    Set 备份 = Documents.Add
    If 长度 > 0 Then 备份.Content.FormattedText = 占位.FormattedText
    已备份 = True
    原文档.Activate
    For 编号 = 开始 To 结束
        占位.Text = "第" & Format(编号, "00") & "份"
        原文档.PrintOut Background:=False, Copies:=1
        已发送 = 已发送 + 1
    Next
清理:
    On Error GoTo 恢复失败
    If 已备份 Then
        If 长度 = 0 Then
            占位.Text = ""
        Else
            占位.FormattedText = 备份.Range(0, 长度).FormattedText
        End If
    End If
    If Not 备份 Is Nothing Then 备份.Close wdDoNotSaveChanges
    If 信息 <> "" Then MsgBox "已发送 " & 已发送 & " 份。" & 信息, vbExclamation
    Exit Sub
打印失败:
    信息 = Err.Description
    Resume 清理
恢复失败:
    MsgBox "恢复选区或关闭备份失败，请核对原文档及备份：" & Err.Description, vbExclamation
End Sub

Private Function 输入编号(ByVal 标题 As String) As Long
    Dim 输入 As String
    输入 = Trim(InputBox(标题 & "（1 至 999999）", "自动打印序列号", 1))
    If Len(输入) > 0 And Len(输入) <= 6 And Not 输入 Like "*[!0-9]*" Then 输入编号 = CLng(输入)
End Function
