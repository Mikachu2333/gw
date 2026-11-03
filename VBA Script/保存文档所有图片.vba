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
'日期:2024年8月28日'  修复了vba文本编码问题

'源脚本为QQ1722187970, 我做了简单修改.
'将所有图片保存为文档同路径下 emf图片'

Const adTypeBinary = 1     ' 二进制
Const adSaveCreateOverWrite = 2   ' 覆盖写入

Sub 保存所有图片()    
    
    On Error Resume Next
    
    
    Dim oStream As Object
    Set oStream = VBA.CreateObject("adodb.stream")
    Dim i As Long
    Dim nOK As Long
    Dim nBad As Long
    i = 1
    Dim oDoc As Document
    Set oDoc = Word.ActiveDocument
    Dim oSP As Shape
    Dim sPath As String
    If oDoc.Saved Then   '如果文档已保存,就把图片存放到文档相同路径.
        sPath = oDoc.Path & "\" & oDoc.Name & "_shape_"
    Else
        MsgBox ("文档未保存,无法将图片保存到文档所在文件夹.请先保存文档!")
        Exit Sub
    End If
    
    
    
    Dim oInLineSp As InlineShape
    With oDoc
        For Each oSP In .Shapes
            oSP.Select
            If 写EMF(oStream, Word.Selection.EnhMetaFileBits, sPath & i & ".emf") Then
                nOK = nOK + 1
            Else
                nBad = nBad + 1
            End If
            i = i + 1
        Next
        For Each oInLineSp In .InlineShapes
            If 写EMF(oStream, oInLineSp.Range.EnhMetaFileBits, sPath & i & ".emf") Then
                nOK = nOK + 1
            Else
                nBad = nBad + 1
            End If
            i = i + 1
        Next
    End With
    Set oStream = Nothing
    If nBad = 0 Then
        MsgBox "已导出 " & nOK & " 个图形为 EMF。", vbInformation
    Else
        MsgBox "已导出 " & nOK & " 个图形，另有 " & nBad & " 个取不到图元，无法导出。", vbExclamation
    End If
    ' 路径含空格时不加引号会打开成别的目录
    Shell "explorer.exe """ & oDoc.Path & """", vbMaximizedFocus    
End Sub
' 单个图形取不到 EMF 或写入失败时如实回报 False; 原来整段 On Error Resume Next 静默跳过, 用户只看到莫名少了几个文件
Function 写EMF(oStream As Object, bits As Variant, fPath As String) As Boolean
    On Error GoTo 写入失败
    With oStream
        .Open
        .Type = adTypeBinary
        .Write bits
        .SaveToFile fPath, adSaveCreateOverWrite
        .Close
    End With
    写EMF = True
    Exit Function
写入失败:
    写EMF = False
End Function
