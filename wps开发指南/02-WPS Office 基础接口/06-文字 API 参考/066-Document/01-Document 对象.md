# Document 对象

代表一个文档。 **Document** 对象是 **[Documents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/obj)** 集合的成员。 **[Documents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/obj)** 集合中包含当前在 WPS 中打开的所有 **Document** 对象。

## 说明


使用 **[Documents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/obj)** (*Index*) 返回单个 **Document** 对象（其中 *Index* 是文档名称或索引编号）。


## 示例


```JavaScript
/*本示例关闭名为“example.docx”的文档，而不保存更改。*/
function test() {
    Documents.Item("example.docx").Close(wdDoNotSaveChanges)
}
```
索引编号代表文档在 **[Documents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/obj)** 集合中的位置。



```JavaScript
/*本示例激活 Documents 集合中的第一个文档。*/
function test() {
    Documents.Item(1).Activate()
}
```
可以使用 **[ActiveDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ActiveDocument)** 属性引用具有焦点的文档。



```JavaScript
/*本示例使用 Activate 方法激活名为“Document1.docx”的文档，然后将页面方向设置为横向模式，并打印文档。*/
function test() {
    Documents.Item("Document1.docx").Activate()
    ActiveDocument.PageSetup.Orientation = wdOrientLandscape
    ActiveDocument.PrintOut()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AcceptAllRevisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/AcceptAllRevisions) | 接受对指定文档的所有修订。 |
| [AcceptAllRevisionsShown](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/AcceptAllRevisionsShown) | 接受显示在屏幕上的指定文档中的所有修订。 |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Activate) | 激活指定的文档，使其成为活动文档。 |
| [ActiveWritingStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ActiveWritingStyle) | 返回或设置指定文档中指定语言的写作风格。 **String** 类型，可读写。 |
| [AddToFavorites](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/AddToFavorites) | 创建文档或超链接的快捷方式，并将其添加到“收藏夹”。 |
| [CheckSpelling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/CheckSpelling) | 开始对指定的文档或区域进行拼写检查。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Close) | 关闭指定的文档。 |
| [ClosePrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ClosePrintPreview) | 将指定文档从打印预览视图切换到以前的视图。 |
| [Compare](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Compare) | 显示修订标记，以表明指定的文档与另一个文档的区别。 |
| [Compatibility](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Compatibility) | 如果为 **True** ，则启用由 *Type* 参数指定的兼容性选项。兼容性选项将影响 WPS 中文档的显示方式。 **Boolean** 类型，可读写。 |
| [ComputeStatistics](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ComputeStatistics) | 返回基于指定文档内容的统计值。 **Long** 类型。 |
| [Convert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Convert) | 将文件转换成最新的文件格式，并启用所有新功能。 |
| [CopyStylesFromTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/CopyStylesFromTemplate) | 将指定模板中的样式复制到某篇文档。 |
| [DeleteAllComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DeleteAllComments) | 删除文档中 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/obj)** 集合内的所有批注。使用 **Comments** 对象的 **Add** 方法可向文档中添加批注。 |
| [DeleteAllCommentsShown](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DeleteAllCommentsShown) | 删除显示在屏幕上的指定文档的所有批注。 |
| [DeleteAllEditableRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DeleteAllEditableRanges) | 删除（指定用户或用户组有权修改其权限的）所有区域中的权限。 |
| [ExportAsFixedFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ExportAsFixedFormat) | 将文档保存为 PDF 或 XPS 格式。 |
| [FollowHyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FollowHyperlink) | 显示一个缓存文档（如果该文档已下载）。否则，此方法将解析该超链接，下载目标文档，并在相应的应用程序中显示此文档。 |
| [GetCrossReferenceItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GetCrossReferenceItems) | 返回一个项目数组，根据指定的交叉引用类型可对该数组中的项目进行交叉引用。 |
| [GoTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GoTo) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定项（如页、书签或域）的起始位置。 |
| [Merge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Merge) | 将文档中用修订标记标识的修改合并到另一篇文档。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PrintOut) | 打印指定文档的全部或部分内容。 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PrintPreview) | 将视图切换到打印预览。 |
| [Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Protect) | 帮助保护指定的文档不被更改。保护文档后，用户只能进行有限的更改，例如添加注释，进行修订或填写表格。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Range) | 通过使用指定的开始和结束字符位置返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。 |
| [Redo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Redo) | 重复最后一次撤消的操作（ **Undo** 方法的逆操作）。如果重复操作成功，则返回 **True** 。 |
| [RejectAllRevisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/RejectAllRevisions) | 拒绝指定文档的所有修订。 |
| [RejectAllRevisionsShown](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/RejectAllRevisionsShown) | 拒绝显示在屏幕上的文档的所有修订。 |
| [Reload](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Reload) | 通过解析指向缓冲文档的超链接再下载该文档来重新加载该文档。 |
| [ReloadAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReloadAs) | 使用指定的编码重新加载一篇基于 HTML 文档的文档。 |
| [RemoveDocumentInformation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/RemoveDocumentInformation) | 从文档中删除敏感性信息、属性、批注和其他元数据。 |
| [RemoveLockedStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/RemoveLockedStyles) | 当文档中应用了格式设置限制时，清除文档中的锁定样式。 |
| [Reply](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Reply) | 打开一封新的电子邮件（ **“收件人”** 行已含发件人地址）以答复活动邮件。 |
| [ReplyAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReplyAll) | 打开一封新的电子邮件（ **“收件人”** 和 **“抄送”** 行已含发件人和所有其他收件人的地址）以答复活动邮件。 |
| [ResetFormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ResetFormFields) | 清除文档中的所有窗体域，准备再次填充窗体。 |
| [ReturnToLastReadPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReturnToLastReadPosition) | 将活动文档返回到上次保存的阅读位置，并返回表示该位置的整数。 |
| [RunAutoMacro](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/RunAutoMacro) | 运行存储于指定文档的自动宏。如果没有自动宏，则不做任何操作。 |
| [Save](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Save) | 保存当前文档。 |
| [SaveAs2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SaveAs2) | 使用新的名称或格式保存指定的文档。此方法的一些参数与 **“另存为”** 对话框（ **“文件”** 选项卡）中的选项相对应。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Select) | 选择指定文档的内容。 |
| [SelectAllEditableRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SelectAllEditableRanges) | 选择指定用户或用户组有权修改的所有区域。 |
| [SelectContentControlsByTag](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SelectContentControlsByTag) | 返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中具有 *Tag* 参数中指定标记值的所有内容控件。只读。 |
| [SelectContentControlsByTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SelectContentControlsByTitle) | 返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中具有 *Title* 参数中指定标题的所有内容控件。只读。 |
| [SelectLinkedControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SelectLinkedControls) | 返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中根据 Node 参数的指定，链接到文档 XML 数据存储区中特定自定义 XML 节点的所有内容控件。只读。 |
| [SelectNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SelectNodes) | 返回一个 **XMLNodes** 集合，代表所有与 *XPath* 参数相匹配的节点并按其在文档或区域中显示的顺序排列。 |
| [SelectSingleNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SelectSingleNode) | 返回一个 **XMLNode** 对象，该对象代表画布与指定文档中 *XPath* 参数相匹配的第一个节点。 |
| [SelectUnlinkedControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SelectUnlinkedControls) | 返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中没有链接到文档 XML 数据存储区中 XML 节点的所有内容控件。只读。 |
| [SendMail](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SendMail) | 打开一个邮件窗口以通过 Exchange 发送指定文档。 |
| [SetCompatibilityMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SetCompatibilityMode) | 设置文档的兼容模式。 |
| [SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SetPasswordEncryptionOptions) | 设置 WPS 用于通过密码加密文档的选项 |
| [ToggleFormsDesign](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ToggleFormsDesign) | 在打开和关闭窗体设计模式之间切换。 |
| [Undo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Undo) | 撤消最后一次操作或最后一系列操作，这些操作显示在 **“撤消”** 列表中。如果撤消操作成功，则返回 **True** 。 |
| [UndoClear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/UndoClear) | 清除可对指定文档撤消的操作列表。 |
| [Unprotect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Unprotect) | 清除对指定文档的保护。 |
| [UpdateStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/UpdateStyles) | 将所有样式从附加模板复制到文档中，同时覆盖文档中所有现有同名的样式。 |
| [UpdateSummaryProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/UpdateSummaryProperties) | 更新 **“文件”** 菜单 **“属性”** 对话框中的关键词和备注文字，以反映为指定文档编写的自动摘要内容。 |
| [WebPagePreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/WebPagePreview) | 显示将当前文档保存为网页时的预览。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ActiveWindow) | 返回一个 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/obj)** 对象，该对象代表活动窗口（焦点所在的窗口）。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [AttachedTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/AttachedTemplate) | 返回一个 **[Template](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/obj)** 对象，该对象代表与指定文档相关联的模板。可读/写 **Variant** 类型。 |
| [AutoFormatOverride](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/AutoFormatOverride) | 返回或设置一个 **Boolean** 类型的值，该数值代表是否在已应用格式设置限制的文档中使用自动设置格式替代格式设置限制。 |
| [AutoHyphenation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/AutoHyphenation) | 如果代表指定文档已启动自动断字功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Bookmarks) | 返回一个 **[Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/obj)** 集合，该集合代表文档中的所有书签。只读。 |
| [BuiltInDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/BuiltInDocumentProperties) | 返回一个 **DocumentProperties** 集合，该集合代表指定文档的所有内置的文档属性。 |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Characters) | 返回一个 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/obj)** 集合，该集合代表文档中的字符。只读。 |
| [ChildNodeSuggestions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ChildNodeSuggestions) | 返回一个 **XMLChildNodeSuggestions** 集合，该集合代表允许在文档中使用的元素列表。 |
| [ClickAndTypeParagraphStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ClickAndTypeParagraphStyle) | 返回或设置“即点即输”功能在指定文档中应用于文字的默认段落样式。 **Variant** 类型，可读写。 |
| [CodeName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/CodeName) | 返回指定文档的代码名称。 **String** 类型，只读。 |
| [CommandBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/CommandBars) | 返回一个 **CommandBars** 集合，该集合代表 WPS 中的菜单栏以及所有工具栏。 |
| [Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Comments) | 返回一个 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/obj)** 集合，该集合代表指定文档的所有批注。只读。 |
| [CompatibilityMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/CompatibilityMode) | 返回 **WdCompatibilityMode** 类型值，该值指定打开文档时 WPS 使用的兼容模式。只读。 |
| [ConsecutiveHyphensLimit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ConsecutiveHyphensLimit) | 返回或设置以连字符结束的连续行的最大数目。 **Long** 类型，可读写。 |
| [Container](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Container) | 返回一个对象，该对象代表指定文档的容器应用程序。 **Object** 类型，只读。 |
| [Content](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Content) | 返回一个 **Range** 对象，该对象代表主文档文章。只读。 |
| [ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ContentControls) | 返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中的所有内容控件。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [CurrentRsid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/CurrentRsid) | 返回一个 **Long** 类型的值，该值代表 WPS 为文档中的更改所分配的随机数。只读。 |
| [CustomDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/CustomDocumentProperties) | 返回一个 **[DocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/obj)** 集合，该集合代表指定文档的所有自定义文档属性。 |
| [CustomXMLParts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/CustomXMLParts) | 返回一个 **CustomXMLParts** 集合，该集合代表 XML 数据存储区中的自定义 XML。只读。 |
| [DefaultTabStop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DefaultTabStop) | 以磅为单位返回或设置指定文档中的默认制表位间隔。 **Single** 类型，可读写。 |
| [DisableFeatures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DisableFeatures) | 如果为 **True** ，则禁用 **[DisableFeaturesIntroducedAfter](#TODO)** 属性中指定的版本之后的所有功能。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [DoNotEmbedSystemFonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DoNotEmbedSystemFonts) | 如果为 **True** ，则 WPS 不嵌入常规系统字体。 **Boolean** 类型，可读写。 |
| [DocumentTheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DocumentTheme) | 返回一个 **OfficeTheme** 对象，代表应用于文档的 WPS Office主题。只读。 |
| [EmbedLinguisticData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/EmbedLinguisticData) | 如果为 **True** ，则 WPS 会嵌入语音识别和手写输入功能，以便数据可以转换回语音或手写。 **Boolean** 类型，可读写。 |
| [EmbedTrueTypeFonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/EmbedTrueTypeFonts) | 如果在保存文档时，WPS 在文档中嵌入 TrueType 字体，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EncryptionProvider](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/EncryptionProvider) | 返回一个 **String** 类型的值，该值指定 WPS 在对文档进行加密时使用的算法加密提供程序的名称。可读写。 |
| [Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Endnotes) | 返回一个 **[Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/obj)** 集合，该集合代表文档中的所有尾注。只读。 |
| [EnforceStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/EnforceStyle) | 返回或设置一个 **Boolean** 类型的值，该值代表是否在受保护的文档中实施格式设置限制。 |
| [Envelope](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Envelope) | 返回一个 **[Envelope](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/obj)** 对象，该对象代表文档中的信封和信封功能。只读。 |
| [FarEastLineBreakLanguage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FarEastLineBreakLanguage) | 返回或设置一个 **[WdFarEastLineBreakLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFarEastLineBreakLanguageID)** 类型的值，该值代表在指定文档或模板中对文本进行换行时使用的东亚语言。可读写。 |
| [FarEastLineBreakLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FarEastLineBreakLevel) | 返回或设置一个 **WdFarEastLineBreakLevel** 类型的值，该值代表指定文档的换行控制级别。可读写。 |
| [Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Fields) | 返回一个 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** 集合，该集合代表文档中的所有域。只读。 |
| [Final](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Final) | 返回或设置 **Boolean** 值，该值指示文档是否是最终的。可读/写。 |
| [Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Footnotes) | 返回一个 **[Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/obj)** 集合，该集合代表文档中的所有脚注。只读。 |
| [FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormFields) | 返回一个 **[FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/obj)** 集合，该集合代表文档中的所有窗体域。只读。 |
| [FormattingShowClear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormattingShowClear) | 如果为 **True** ，则 WPS 在 **“样式和格式”** 任务窗格中显示“清除格式”。 **Boolean** 类型，可读写。 |
| [FormattingShowFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormattingShowFilter) | 设置或返回一个 **WdShowFilter** 常量，代表 **“样式和格式”** 任务窗格中显示的样式和格式。可读写。 |
| [FormattingShowFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormattingShowFont) | 如果为 **True** ，则 WPS 显示 **“样式和格式”** 任务窗格中的字体格式。 **Boolean** 类型，可读写。 |
| [FormattingShowNextLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormattingShowNextLevel) | 返回或设置 **Boolean** 值，该值表示 WPS 在使用上一个标题级别时是否显示下一个标题级别。可读/写。 |
| [FormattingShowNumbering](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormattingShowNumbering) | 如果为 **True** ，则 WPS 在 **“样式和格式”** 任务窗格中显示编号格式。 **Boolean** 类型，可读写。 |
| [FormattingShowParagraph](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormattingShowParagraph) | 如果为 **True** ，则 WPS 在 **“样式和格式”** 任务窗格中显示段落格式。 **Boolean** 类型，可读写。 |
| [FormattingShowUserStyleName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormattingShowUserStyleName) | 返回或设置 **Boolean** 值，该值表示是否显示用户定义的样式。可读/写。 |
| [FormsDesign](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FormsDesign) | 如果指定的文档处于窗体设计模式，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Frames) | 返回一个 **[Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/obj)** 集合，该集合代表文档中的所有框架。只读。 |
| [FullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/FullName) | 返回一个 **String** 类型的值，该值表示文档的名称，包括路径。只读。 |
| [GrammarChecked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GrammarChecked) | 如果已经检查了指定范围或文档的语法，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [GrammaticalErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GrammaticalErrors) | 返回一个 **[ProofreadingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ProofreadingErrors/obj)** 集合，该集合代表指定的文档中有语法检查错误的句子。只读。 |
| [GridDistanceHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GridDistanceHorizontal) | 在指定文档中绘制、移动和调整自选图形或东亚语言字符时，返回或设置代表 WPS 所用的不可见的网格线之间的水平距离的 **Single** 类型，可读写。 |
| [GridDistanceVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GridDistanceVertical) | 在指定的文档中绘制、移动和调整自选图形或东亚语言字符时，返回或设置代表 WPS 所用的不可见网格线之间的垂直距离的 **Single** 类型。可读写。 |
| [GridOriginFromMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GridOriginFromMargin) | 如果 WPS 将在页面左上角开始使用字符网格，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [GridOriginHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GridOriginHorizontal) | 返回或设置一个 **Single** 类型的值，该值代表不可见网格相对于页面左边的起点位置，当在指定的文档中绘制、移动和调整自选图形或东亚语言字符时将使用该网格。可读写。 |
| [GridOriginVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GridOriginVertical) | 返回或设置一个 **Single** 类型的值，该值代表不可见网格相对于页面顶边的起点位置，当在指定的文档中绘制、移动和调整自选图形或东亚语言字符时将使用该网格。可读写。 |
| [GridSpaceBetweenHorizontalLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GridSpaceBetweenHorizontalLines) | 返回或设置 WPS 在页面视图中显示的水平字符网格的间隔。 **Long** 类型，可读写。 |
| [GridSpaceBetweenVerticalLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/GridSpaceBetweenVerticalLines) | 返回或设置 WPS 在页面视图中显示的垂直字符网格线间隔。 **Long** 类型，可读写。 |
| [HasPassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/HasPassword) | 如果需要密码才能打开指定文档，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [HasVBProject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/HasVBProject) | 返回一个 **Boolean** 类型的值，该值代表文档是否具有附加的 VBA 项目。只读。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Hyperlinks) | 返回一个 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlinks/obj)** 集合，该集合代表指定文档中的所有超链接。只读。 |
| [HyphenateCaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/HyphenateCaps) | 如果全是大写字母时可对其进行断字，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HyphenationZone](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/HyphenationZone) | 返回或设置断字区的宽度（以磅为单位）。 **Long** 类型，可读写。 |
| [Indexes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Indexes) | 返回一个 **[Indexes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/obj)** 集合，该集合代表指定文档的所有索引。只读。 |
| [InlineShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/InlineShapes) | 返回一个 **[InlineShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/obj)** 集合，该集合代表文档中的所有 **[InlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/obj)** 对象。只读。 |
| [JustificationMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/JustificationMode) | 返回或设置指定文档字符间距的调整量。可读/写 **[WdJustificationMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdJustificationMode)** 类型。 |
| [KerningByAlgorithm](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/KerningByAlgorithm) | 如果 WPS 在指定文档中调整半角拉丁字符和标点符号的间距，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Kind](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Kind) | 返回或设置 WPS 在自动设置指定文档的格式时使用的格式类型。 **[WdDocumentKind](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDocumentKind)** 类型，可读写。 |
| [LanguageDetected](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/LanguageDetected) | 返回或设置一个指定 WPS 是否对指定文本的语言进行检测的值。 **Boolean** 类型，可读写。 |
| [ListParagraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ListParagraphs) | 返回一个 **ListParagraphs** 对象，该对象代表文档中的所有编号段落。只读。 |
| [ListTemplates](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ListTemplates) | 返回一个 **ListTemplates** 集合，该集合代表指定文档中的所有列表格式。只读。 |
| [Lists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Lists) | 返回一个 **[Lists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Lists/obj)** 集合，该集合含有指定文档中的所有项目符号和编号列表。只读。 |
| [LockQuickStyleSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/LockQuickStyleSet) | 返回或设置一个 **Boolean** 类型的值，它代表用户是否可以更改使用的快速样式集。可读写。 |
| [LockTheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/LockTheme) | 返回或设置一个 **Boolean** 类型的值，该值代表用户是否可以更改文档主题。可读/写。 |
| [MailMerge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/MailMerge) | 返回一个 **[MailMerge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/obj)** 对象，该对象代表指定文档的邮件合并功能。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Name) | 返回指定文档的名称。 **String** 类型，只读。 |
| [NoLineBreakAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/NoLineBreakAfter) | 返回或设置 WPS 不在其后换行的首尾字符。可读/写 **String** 类型。 |
| [NoLineBreakBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/NoLineBreakBefore) | 返回或设置 WPS 不在其前换行的首尾字符。可读/写 **String** 类型。 |
| [OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/OMaths) | 返回一个 **[OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/obj)** 集合，该集合代表指定区域内的 **[OMath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/obj)** 对象。只读。 |
| [OpenEncoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/OpenEncoding) | 返回用于打开指定文档的编码。 **MsoEncoding** 类型，只读。 |
| [OptimizeForWord97](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/OptimizeForWord97) | 如果 WPS 通过禁用所有不兼容的格式来优化当前文档，以便在 WPS 97 中查看，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PageSetup) | 返回一个与指定文档相关联的 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/obj)** 对象。 |
| [Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Paragraphs) | 返回一个 **[Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/obj)** 集合，该集合代表指定文档中的所有段落。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Parent) |  |
| [Password](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Password) | 设置在打开文档必须使用的密码。 **String** 类型，只写。 |
| [PasswordEncryptionAlgorithm](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PasswordEncryptionAlgorithm) | 返回一个 **String** 类型的值，该值代表 WPS 用密码加密文档时所用的算法。只读。 |
| [PasswordEncryptionFileProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PasswordEncryptionFileProperties) | 如果 WPS 为密码保护的文档的文件属性加密，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [PasswordEncryptionKeyLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PasswordEncryptionKeyLength) | 返回一个 **Long** 类型的值，该值代表 WPS 用密码加密文档时所用的密钥长度。只读。 |
| [PasswordEncryptionProvider](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PasswordEncryptionProvider) | 返回一个 **String** 类型的值，该值指定 WPS 用密码加密文档时所用的加密算法提供程序的名称。只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Path) | 返回文档的磁盘或 Web 路径。只读 **String** 类型。 |
| [Permission](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Permission) | 返回一个 **Permission** 对象，该对象代表指定文档中的权限设置。 |
| [PrintFormsData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PrintFormsData) | 如果 WPS 仅将相应联机窗体中的键入的数据打印在预打印窗体上，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintRevisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/PrintRevisions) | 如果为 **True** ，则在打印文档的同时打印修订标记。如果返回 **False** ，则不打印修订标记（即打印接受修订后的状态）。 **Boolean** 类型，可读写。 |
| [ProtectionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ProtectionType) | 该属性返回指定文档的保护类型。可以是下列 **WdProtectionType** 常量之一： **wdAllowOnlyComments** 、 **wdAllowOnlyFormFields** 、 **wdAllowOnlyReading** 、 **wdAllowOnlyRevisions** 或 **wdNoProtection** 。 |
| [ReadOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadOnly) | 如果对文档所作修改不能保存到原始文档中，则该属性为 **True** 。只读 **Boolean** 类型。 |
| [ReadOnlyRecommended](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadOnlyRecommended) | 如果无论用户何时打开文档，WPS 都显示一个消息框，提示以只读方式打开，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ReadingLayoutSizeX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadingLayoutSizeX) | 设置或返回一个 **Long** 类型的值，该值表示当在阅读版式视图中显示文档并对其冻结了输入手写标记时文档中页面的宽度。 |
| [ReadingLayoutSizeY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadingLayoutSizeY) | 设置或返回一个 **Long** 类型的值，该值表示当在阅读版式视图中显示文档并对其冻结了输入手写标记时文档中页面的高度。 |
| [ReadingModeLayoutFrozen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadingModeLayoutFrozen) | 设置或返回一个 **Boolean** 类型的值，该值表示是否将阅读版式视图中显示的页面冻结为指定大小以向文档插入手写标记。 |
| [RemovePersonalInformation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/RemovePersonalInformation) | 如果 WPS 在保存文档时从批注、修订和“属性”对话框中删除所有用户信息，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Revisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Revisions) | 返回一个 **[Revisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revisions/obj)** 集合，该集合代表文档或区域中的修订。只读。 |
| [SaveEncoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SaveEncoding) | 返回或设置保存文档时使用的编码。 **MsoEncoding** 类型，可读写。 |
| [SaveFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SaveFormat) | 返回指定文档或文件转换器的文件格式。只读 **Long** 类型。 |
| [SaveFormsData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SaveFormsData) | 如果 WPS 将输入到一个窗体中的数据作为以制表位分隔的记录保存以供数据库使用，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SaveSubsetFonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SaveSubsetFonts) | 如果 WPS 将嵌入的 TrueType 字体子集和文档一起保存，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Saved](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Saved) | 如果指定的文档或模板从上次保存后一直没有更改，则该属性值为 **True** 。如果关闭文档时，WPS 提示保存对文档所做的更改，则该属性值为 **False** 。 **Boolean** 类型，可读写。 |
| [Sections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Sections) | 返回一个 **[Sections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/obj)** 集合，该集合代表指定文档中的节。只读。 |
| [Sentences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Sentences) | 返回一个 **[Sentences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/obj)** 集合，该集合代表文档中的所有句子。只读。 |
| [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Shapes) | 返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/obj)** 集合，该集合代表指定文档中的所有 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象。只读。 |
| [ShowRevisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ShowRevisions) | 如果在屏幕上显示对指定文档的修订，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowSpellingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ShowSpellingErrors) | 如果 WPS 为文档中的拼写错误添加红色波浪线，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SmartDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SmartDocument) | 返回一个 **SmartDocument** 对象，该对象代表智能文档解决方案的设置。 |
| [SnapToGrid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SnapToGrid) | 如果在指定文档中绘制、移动自选图形/东亚字符或者调整它们的大小时，自选图形/东亚字符自动与不可见的网格线对齐，则该属性为 **True** 。可读/写 **Boolean** 类型。 |
| [SnapToShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SnapToShapes) | 如果 WPS 在指定文档中使自选图形或东亚字符自动与不可见网格线对齐，这些网格线穿过其他自选图形或东亚字符的水平和垂直边缘，则该属性为 **True** 。可读/写 **Boolean** 类型。 |
| [SpellingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SpellingErrors) | 返回一个 **[ProofreadingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ProofreadingErrors/obj)** 集合，该集合代表在指定文档或区域中标识为拼写错误的单词。只读。 |
| [StoryRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/StoryRanges) | 返回一个 **[StoryRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/StoryRanges/obj)** 集合，该集合代表指定文档中的所有的内容。只读。 |
| [StyleSortMethod](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/StyleSortMethod) | 返回或设置一个 **[WdStyleSort](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdStyleSort)** 常量，该常量代表要在对 **“样式”** 任务窗格中的样式进行排序时使用的排序方法。可读写。 |
| [Styles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Styles) | 返回指定文档的 **[Styles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/obj)** 集合。只读。 |
| [Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Tables) | 返回一个 **[Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/obj)** 集合，该集合代表指定文档中的所有表格。只读。 |
| [TablesOfContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/TablesOfContents) | 返回一个 **[TablesOfContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfContents/obj)** 集合，该集合代表指定文档中的目录。只读。 |
| [TablesOfFigures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/TablesOfFigures) | 返回一个 **[TablesOfFigures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfFigures/obj)** 集合，该集合代表指定文档中的图表目录。只读。 |
| [TextEncoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/TextEncoding) | 返回或设置 WPS 将文档保存为文本文件的文本编码（代码页或字符集）。 **MsoEncoding** 类型，可读写。 |
| [TextLineEnding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/TextLineEnding) | 返回或设置一个 **WdLineEndingType** 常量，该常量代表 WPS 在保存为文本文件的文档中标记换行符和段落分隔符的方式。可读写。 |
| [TrackRevisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/TrackRevisions) | 如果在指定文档中跟踪更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Type) | 返回文档的类型（模板或文档）。只读 **[WdDocumentType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDocumentType)** 类型。 |
| [UserControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/UserControl) | 如果文档是由用户创建或打开的，则该属性为 **True** 。可读/写 **Boolean** 类型。 |
| [Variables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Variables) | 返回一个 **[Variables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variables/obj)** 集合，该集合代表指定文档所存的变量。只读。 |
| [WebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/WebOptions) | 将文档另存为网页或打开网页时，该属性将返回 **[WebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/obj)** 对象，该对象包含 WPS 所用的文档属性。只读。 |
| [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Windows) | 返回一个 **Windows** 集合，该集合代表指定文档的所有窗口。只读。 |
| [WordOpenXML](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/WordOpenXML) | 返回一个 **String** 类型的值，该值代表文档的 WPS Open XML 内容的平面 XML 格式。只读。 |
| [Words](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Words) | 返回一个 **[Words](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/obj)** 集合，该集合代表文档中的所有字词。只读。 |
| [WritePassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/WritePassword) | 该属性设置一个保存对指定文档所做的修改时所需的密码。 **String** 类型，只写。 |
| [WriteReserved](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/WriteReserved) | 如果指定文档设有写权限密码，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [XMLHideNamespaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/XMLHideNamespaces) | 返回一个 **Boolean** 类型的值，该值表示是否隐藏 XML 命名空间，该命名空间位于“XML 结构”任务窗格的元素列表中。 |
| [XMLNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/XMLNodes) | 返回一个 **XMLNodes** 集合，该集合代表文档中的所有 XML 元素。 |
| [XMLSchemaReferences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/XMLSchemaReferences) | 返回一个 **XMLSchemaReferences** 集合，代表附加到文档的架构。 |