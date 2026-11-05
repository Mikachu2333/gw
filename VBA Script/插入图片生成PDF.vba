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
'日期: 2025年8月31日 
'更新：修复了插入图片对话框无法显示图片的bug

'使用方法:
'运行本vba脚本, 选择多个图片(会自动顺序),然后等待自动插入和保存对话框


Sub 创建图片PDF()

    Dim 筛选器 As FileDialog, 文件名, 文件 As Document, pd, 计数 As Integer
    Set 筛选器 = Application.FileDialog(msoFileDialogFilePicker)
    With 筛选器
        .AllowMultiSelect = True
        .Title = "请选择要批量插入的图片,可多选"
		.Filters.Clear
        .Filters.Add "图片文件", "*.jpg;*.jpeg;*.png;*.bmp;*.gif", 1
        .Show
    End With
    If 筛选器.SelectedItems.Count <= 0 Then Exit Sub     '点击取消按钮退出
    
    
    Dim doc As Document
    Set doc = Application.Documents.Add()
    
    With doc.PageSetup
        .PaperSize = wdPaperA4 '设为A4纸张
        .LeftMargin = 0   '设置左边距为0
        .RightMargin = 0
        .TopMargin = 0
        .BottomMargin = 0
        
    End With
    
    Dim pic As InlineShape
    
    For Each 文件名 In 筛选器.SelectedItems
        
        Set pic = Selection.InlineShapes.AddPicture(文件名)
        ' 高宽都硬设成 A4 边长会把图片拉变形: 锁住比例, 按页高缩放
        pic.LockAspectRatio = msoTrue
        pic.Height = doc.PageSetup.PageHeight
        
    Next
    
  
    
    
    Dim 导出文件 As String
    With Application.FileDialog(msoFileDialogSaveAs)
        .InitialFileName = 筛选器.SelectedItems.Item(1)
        ' 原先写死 .FilterIndex = 7 当作 PDF, 但过滤器列表按宿主和版本排序不同,
        ' WPS 上第 7 项未必是 PDF, 结果"成功"存出来一个别的格式。
        ' 现在不猜序号, 执行完按实际落盘的后缀判断并如实告知。
        If (.Show = -1) Then
            .Execute
            导出文件 = CStr(.SelectedItems.Item(1))
            If LCase(Right(导出文件, 4)) = ".pdf" Then
                MsgBox "已生成 PDF:" & vbCrLf & 导出文件, vbInformation
            Else
                MsgBox "注意: 保存对话框里选中的不是 PDF 格式, 实际存为" & vbCrLf & 导出文件 _
                    & vbCrLf & "请在“保存类型”里选 PDF 后重新运行。", vbExclamation
            End If
        Else
            MsgBox "已取消导出, 临时文档不保存。", vbInformation
        End If
        ' 取消时也必须关掉: 这是脚本自己 Documents.Add 出来的临时文档,
        ' 原先只在保存成功那支里 Close, 取消就留一个塞满图片的窗口给用户收拾
        doc.Close (False)
    End With
    
    

End Sub

