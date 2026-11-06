'====================================================================
'                            使用说明:  
'制作 VBA 文件时, 请只保留一个Sub 用于执行,  其他过程请用 Function 关键字。
'Sub 过程名推荐用 用户ID_中文名称 的方式命名,避免代码冲突。
'VBA 文件请使用ANSI(简体中文GB2312)编码保存, 微软的VBA解释器不支持UTF-8这类编码,会导致中文乱码。
'不正确的代码可能导致word崩溃、文档丢失或损坏。
'请务必保证vba代码来源安全可靠，插件作者不承担vba文件造成的任何损失！
'分享 VBA 文件时，请尊重作者版权，注明来源以示感谢。
'====================================================================
'  作者: 小恐龙
'  修改日期: 2023年2月14日

'  本功能用于撤掉工作表的写保护(仅限未设密码的保护; 工作簿级密码保护无法移除).

Sub gw_移除xls写保护()
    Dim xls As Object
    Dim dia As FileDialog
    Dim book As Object
    Dim sht As Object
    Dim fname As String
    Dim 已保存 As Boolean

    On Error GoTo 出错

    Set dia = Application.FileDialog(msoFileDialogFilePicker)
    With dia
        .AllowMultiSelect = False
        .Title = "打开一个excel文件"
        .Filters.Clear
        .Filters.Add "Excel 文件", "*.xls*", 1
        ' 原来不看 .Show 的返回值, 点取消就变成对空集合取 SelectedItems(1), 报下标越界
        If .Show <> -1 Then Exit Sub
    End With
    fname = dia.SelectedItems(1)

    If MsgBox("本功能会直接改写并保存原文件：" & fname & vbCrLf & "建议先留一份副本。确定继续吗?", _
        "移除xls写保护", vbOKCancel + vbExclamation) <> vbOK Then Exit Sub

    Set xls = CreateObject("excel.application")
    xls.DisplayAlerts = False
    ' 打开时先让 Excel 可见: 工作簿若要写保护密码, 隐藏实例会把密码框变成看不见的模态框, 宏就卡死在那里
    xls.Visible = True
    Set book = xls.Workbooks.Open(fname)
    xls.Visible = False

    '循环清理sheet写保护(仅限未设密码的保护; 带密码的工作表会在这里报错并走下面的清理分支)
    For Each sht In book.Worksheets
        sht.Protect AllowFiltering:=True
        sht.Unprotect
    Next
    book.Close True      'xls文件保存并关闭
    已保存 = True
    xls.Quit
    Set book = Nothing
    Set xls = Nothing
    MsgBox (fname & "写保护已清除")
    Exit Sub

出错:
    ' 后台实例必须显式 Quit, 只把对象置 Nothing 会留下一个看不见也杀不掉的 EXCEL.EXE
    On Error Resume Next
    If Not book Is Nothing Then book.Close 已保存
    If Not xls Is Nothing Then xls.Quit
    Set book = Nothing
    Set xls = Nothing
    MsgBox "移除xls写保护时出错：" & Err.Description, vbCritical
End Sub

