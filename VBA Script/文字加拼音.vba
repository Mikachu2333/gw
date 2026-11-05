'====================================================================
'                            使用说明:
'制作 VBA 文件时, 请只保留一个Sub 用于执行,  其他过程请用 Function 关键字。
'Sub 过程名推荐用 用户ID_中文名称 的方式命名,避免代码冲突。
'VBA 文件请使用ANSI(简体中文GB2312)编码保存, 微软的VBA解释器不支持UTF-8这类编码,会导致中文乱码。
'不正确的代码可能导致word崩溃、文档丢失或损坏。
'请务必保证vba代码来源安全可靠，插件作者不承担vba文件造成的任何损失！
'分享 VBA 文件时，请尊重作者版权，注明来源以示感谢。
'====================================================================

'源码来源:https://zhuanlan.zhihu.com/p/585845214
'小恐龙略作修改

'Word批量使用默认样式加注拼音
Sub 文字加拼音()
    '原先每 30 个字符 SendKeys 一次 "{Enter}" 再 Application.Run "FormatPhoneticGuide"。
    '那个宏名在本仓库里根本不存在, Application.Run 报 5160 又被整段 On Error Resume Next
    '咽掉, 而 SendKeys 是真实执行了的 —— 长文档跑一遍会被塞进几百个段落标记, 排版全毁,
    '拼音一个没加, 还不报任何错。
    'Word 也没有"自动推导拼音"的接口: 拼音是"拼音指南"对话框按内置字典填的,
    '所以这里只把对话框开到当前范围上, 由用户确认。
    If Selection.Type = wdSelectionIP Then Selection.WholeStory
    Application.Dialogs(wdDialogPhoneticGuide).Show
End Sub
