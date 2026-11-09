# Presentation 对象

代表一个 WPP 演示文稿。

## 说明


 **Presentation** 对象是 **[Presentations](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/obj)** 集合的成员。 **Presentations** 集合包含代表 WPP 中打开的演示文稿的所有 **Presentation** 对象。

以下示例说明如何执行下列操作：

* 返回通过名称或索引号指定的演示文稿
* 返回活动窗口中的演示文稿
* 返回指定的任一文档窗口或幻灯片放映窗口中的演示文稿

使用 **Presentations** (*index*) 返回单个 **Presentation** 对象，其中 *index* 是演示文稿的名称或索引号。演示文稿的名称就是其文件名，是否带文件扩展名均可，但不包含路径。


## 示例


```JavaScript
/*本示例在演示文稿“Sample Presentation”的开头添加一张幻灯片。*/
function test() {
    Application.Presentations.Item("Sample Presentation").Slides.Add(1, ppLayoutTitle)
}
```
请注意，如果同时打开了多个具有相同名称的演示文稿，则会返回集合中具有指定名称的第一个演示文稿。

使用 **[ActivePresentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/ActivePresentation)** 属性可返回活动窗口中的演示文稿。



```JavaScript
/*本示例将保存活动演示文稿。*/
function test() {
    Application.ActivePresentation.Save()
}
```
使用 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Presentation)** 属性可返回指定文档窗口或幻灯片放映窗口中的演示文稿。



```JavaScript
/*本示例显示第一个幻灯片放映窗口中运行的演示文稿名称。*/
function test() {
    alert(Application.SlideShowWindows.Item(1).Presentation.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/ApplyTemplate) | 将设计模板应用于指定的演示文稿。 |
| [ApplyTheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/ApplyTheme) | 将主题或设计模板应用于指定的演示文稿。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Close) | 关闭指定的演示文稿。 |
| [Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Export) | 使用指定的图形筛选器导出演示文稿中的每张幻灯片，并将导出的文件保存在指定的文件夹中。 |
| [ExportAsFixedFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/ExportAsFixedFormat) | 将 WPP 演示文稿的副本发布为固定格式的文件（PDF 或 XPS）。 |
| [NewWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/NewWindow) | 打开一个包含指定演示文稿的新窗口。返回一个代表新窗口的 **[DocumentWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/obj)** 对象。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PrintOut) | 打印指定演示文稿。 |
| [Save](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Save) | 保存指定的演示文稿。 |
| [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SaveAs) | 保存未保存过的演示文稿，或以其他文件名另存已保存过的演示文稿。 |
| [SaveCopyAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SaveCopyAs) | 在不修改原文件的情况下将指定演示文稿的副本保存至另一文件。 |
| [SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SetPasswordEncryptionOptions) | 设置 WPP 通过密码加密演示文稿时使用的选项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [BuiltInDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/BuiltInDocumentProperties) | 返回一个 **DocumentProperties** 集合，该集合代表指定演示文稿的所有内置文档属性。只读。 |
| [CommandBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/CommandBars) | 返回一个 **CommandBars** 集合，该集合代表主机容器应用程序和 WPP 中合并的命令栏集。仅当容器是 DocObject 服务器并且 WPP 作为 OLE 服务器时，该属性返回有效对象。只读。 |
| [CustomDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/CustomDocumentProperties) | 返回一个 **DocumentProperties** 集合，该集合代表指定演示文稿的所有自定义文档属性。只读。 |
| [CustomXMLParts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/CustomXMLParts) | 返回一个 **[CustomXMLParts](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/obj)** 对象，该对象表示与指定的 **Presentation** 对象关联的自定义 XML 部件的集合。只读。 |
| [Designs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Designs) | 返回一个 **[Designs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/obj)** 对象，该对象代表设计模板的集合。 |
| [DisplayComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/DisplayComments) | 决定是否在指定的演示文稿中显示批注。可读/写， **MsoTriState** 类型。 |
| [ExtraColors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/ExtraColors) | 返回一个 **[ExtraColors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ExtraColors/obj)** 对象，该对象代表指定演示文稿中可用的其他颜色。只读。 |
| [FarEastLineBreakLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/FarEastLineBreakLevel) | 返回或设置基于亚洲字符级别的换行符。可读/写， **PpFarEastLineBreakLevel** 类型。 |
| [Fonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Fonts) | 返回一个 **[Fonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Fonts/obj)** 集合，该集合代表用于指定演示文稿的所有字体。只读。 |
| [FullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/FullName) | 返回保存的演示文稿的名称，包括路径、当前文件系统分隔符和文件扩展名。只读。 **String** 类型。 |
| [GridDistance](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/GridDistance) | 设置或返回一个 **Single** 类型的值，该值代表网格线之间的距离。可读/写。 |
| [HandoutMaster](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/HandoutMaster) | 返回一个代表讲义母版的 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Name) | 演示文稿的名称包括文件扩展名（对于已注册的文件类型），但不包括其路径。不能使用该属性来设置名称。如果需要更改名称，请使用 **[SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SaveAs)** 方法将演示文稿另存为其他名称。 **String** 类型，只读。 |
| [NoLineBreakAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/NoLineBreakAfter) | 返回或设置前置字符。可读/写。 **String** 类型。 |
| [NoLineBreakBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/NoLineBreakBefore) | 返回或设置后置字符。可读/写。 **String** 类型。 |
| [NotesMaster](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/NotesMaster) | 返回一个代表备注母版的 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象。只读。 |
| [PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PageSetup) | 返回一个 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/obj)** 对象，该对象的属性控制指定演示文稿的幻灯片的页面设置属性。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Parent) | 返回指定对象的父对象。 |
| [PasswordEncryptionAlgorithm](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PasswordEncryptionAlgorithm) | 返回一个 **String** 类型的值，该值代表 WPP 通过密码加密文档所使用的算法。只读。 |
| [PasswordEncryptionFileProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PasswordEncryptionFileProperties) | 如果 WPP 对使用密码保护的文档的文件属性进行加密，则返回 **True** 属性值。只读， **Boolean** 类型。 |
| [PasswordEncryptionKeyLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PasswordEncryptionKeyLength) | 返回一个 **Long** 类型的值，该值表示 WPP 通过密码加密文档时所使用算法的密钥长度。只读。 |
| [PasswordEncryptionProvider](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PasswordEncryptionProvider) | 返回一个 **String** 类型的值，该值指定 WPP 通过密码加密文档时所使用的加密算法提供程序的名称。只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Path) | 返回 **String** ，该值代表到指定的 **Presentation** 对象的路径，只读。 |
| [Permission](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Permission) | 返回一个 **Permission** 对象，该对象可用于限制对活动演示文稿的权限，还可用于返回或设置特定权限设置。只读。 |
| [PrintOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PrintOptions) | 返回一个 **PrintOptions** 对象，该对象代表与指定演示文稿共同保存的打印选项。只读。 |
| [ReadOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/ReadOnly) | 返回指定的演示文稿是否为只读。 **MsoTriState** 类型，只读。 |
| [Saved](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Saved) | 决定演示文稿自上次保存以来是否进行过更改。可读/写， **MsoTriState** 类型。 |
| [SectionProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SectionProperties) | 返回一个 **SectionProperties** 对象。只读。 |
| [SlideMaster](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SlideMaster) | 返回一个 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象，该对象代表幻灯片母版。 |
| [SlideShowSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SlideShowSettings) | 返回一个 **[SlideShowSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/obj)** 对象，该对象代表指定演示文稿的幻灯片放映设置。只读。 |
| [SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SlideShowWindow) | 返回一个 **[SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj)** 对象，该对象代表正在运行的指定演示文稿所在的幻灯片放映窗口。只读。 |
| [Slides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Slides) | 返回一个 **[Slides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/obj)** 集合，该集合代表指定演示文稿中的所有幻灯片。只读。 |
| [SnapToGrid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SnapToGrid) | 该属性值为 **msoTrue** 时，在指定的演示文稿中将形状与网格线对齐。可读/写， **MsoTriState** 类型。 |
| [Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Tags) | 返回一个代表指定对象的标签的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 对象。只读。 |
| [TemplateName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/TemplateName) | 返回指定演示文稿关联的第一个设计模板或母版的名称。只读， **String** 类型。 |
| [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Windows) | 返回一个 **[DocumentWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/obj)** 集合，该集合代表与指定演示文稿相关联的所有文档窗口。只读。 |
| [WritePassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/WritePassword) | 设置或返回一个 **String** 类型的值，该值代表保存对指定演示文稿所做的更改时使用的密码。可读/写。 |