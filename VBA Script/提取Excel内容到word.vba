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
'  日期: 2023年2月8日

Option Explicit    '强制声明变量是个好习惯, 可以提高代码速度,减少bug

Sub 提取Excel内容()
    Dim xls As Object
    Dim book As Object
    Dim sheet As Object
    Dim c As Object
    Dim dia As FileDialog
    Dim doc As Document
    Dim 路径 As String
    Dim r As String
    Dim n As Long

    On Error GoTo 出错

    Set dia = Application.FileDialog(msoFileDialogFilePicker)
    With dia
        .AllowMultiSelect = False
        .Title = "打开一个excel文件"
        .Filters.Clear
        .Filters.Add "Excel 文件", "*.xls*", 1
        If .Show <> -1 Then Exit Sub
    End With
    路径 = CStr(dia.SelectedItems(1))

    r = InputBox("输入要提取的范围,比如 A1:A10", "提取Excel内容", "A1:A10")
    If r = "" Then Exit Sub

    Set xls = CreateObject("excel.application")
    xls.Visible = False
    xls.DisplayAlerts = False
    Set book = xls.Workbooks.Open(路径)
    Set sheet = book.Worksheets(1)
    Set doc = Application.ActiveDocument

    For Each c In sheet.Range(r).Cells
        doc.Range.InsertAfter CStr(c.Value) & Chr(9)
        n = n + 1
    Next

    book.Close False
    xls.Quit
    Set sheet = Nothing
    Set book = Nothing
    Set xls = Nothing
    MsgBox "已提取 " & n & " 个单元格到文档末尾。", vbInformation, "提取Excel内容"
    Exit Sub

出错:
    ' 原来整段 On Error Resume Next: 范围写错或文件打不开就什么都不做, 用户只看到"没反应", 后台还留下一个看不见的 EXCEL.EXE
    On Error Resume Next
    If Not book Is Nothing Then book.Close False
    If Not xls Is Nothing Then xls.Quit
    Set sheet = Nothing
    Set book = Nothing
    Set xls = Nothing
    MsgBox "提取Excel内容时出错：" & Err.Description, vbCritical
