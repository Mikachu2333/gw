# Application 对象

代表 WPS 应用程序。 **Application** 对象包含可返回顶级对象的属性和方法。例如，[ **ActiveDocument** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ActiveDocument) 属性返回 [ **Document** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj) 对象。

## 说明


整个 WPS 应用程序的 API 对象结构是一个树状结构，而 **Application** 对象是树状结构的根对象，同时， **Application** 对象也提供了对于应用程序相关的各种访问接口，例如：

* 应用程序的设置选项、环境、版本号等相关信息
* 一些常见的属性，如 **ActiveWindow** 、 **ActiveDocument** 、 **Name** 等

 **Application** 属性可用于返回 **Application** 对象。


## 示例


```JavaScript
/*本示例显示 WPS 的用户名。*/
function test() {
    alert(Application.UserName)
}
```
WPS 宏编辑器环境下，许多返回最常见用户界面对象（如活动文档， **ActiveDocument** 属性）的属性和方法可以在没有 **Application** 对象限定符的情况下使用。例如，您可以编写 `ActiveDocument.PrintOut()`，而不是编写 `Application.ActiveDocument.PrintOut()`。可以在没有 **Application** 对象识别符的情况下使用的属性和方法被视为“全局”属性和方法。

若要使用“自动化”从另一个应用程序控制 WPS，请使用 JavaScript 的 CreateObject 函数返回 WPS Application 对象。



```JavaScript
/*本示例启动 WPS 应用程序，并打开名为“example1.docx”的文档。*/
function test() {
    let wps = CreateObject("kwps.application")
    wps.Visible = true
    wps.Documents.Open("D:\\示例\\example1.docx")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Activate) | 激活指定的对象。 |
| [BuildKeyCode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/BuildKeyCode) | 为指定的组合键返回唯一的代码。 |
| [CentimetersToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CentimetersToPoints) | 将度量单位由厘米转换为磅数（1 厘米=28.35 磅）。所返回的转换结果为 **Single** 类型。 |
| [ChangeFileOpenDirectory](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ChangeFileOpenDirectory) | 设置 WPS 在其中搜索文档的文件夹。 |
| [CheckSpelling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CheckSpelling) | 检查字符串的拼写错误。返回一个 **Boolean** 类型的值，以显示字符串是否包含拼写错误。如果字符串未包含拼写错误，则该值为 **True** 。 |
| [CleanString](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CleanString) | 从指定字符串中删除非打印字符（字符代码为 1-29）及 WPS 的特殊字符，或将它们替换为空格（字符代码为 32）。返回的结果为 **String** 类型。 |
| [CompareDocuments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CompareDocuments) | 比较两个文档，并返回一个 **Document** 对象，该对象表示包含两个文档之间的差别的文档，该文档用修订进行标记。 |
| [DefaultWebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DefaultWebOptions) | 返回 **[DefaultWebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/obj)** 对象，该对象包含 WPS 每当将文档保存为网页或打开网页时使用的应用程序级全局属性。 |
| [FileDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/FileDialog) | 返回一个 **FileDialog** 对象，该对象代表文件对话框的单个实例。 |
| [FindKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/FindKey) | 返回 **[KeyBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/obj)** 对象，该对象代表指定的组合键。只读。 |
| [GoBack](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/GoBack) | 将插入点在活动文档中最近进行过编辑操作的三个位置间移动，其作用等同于按 Shift+F5。 |
| [Help](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Help) | 显示已安装的帮助信息。 |
| [InchesToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/InchesToPoints) | 将度量单位从英寸转换为磅（1 英寸 = 72 磅）。以 **Single** 类型返回转换结果。 |
| [International](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/International) | 返回当前的国家/地区和国际设置信息。 **Variant** 类型，只读。 |
| [IsObjectValid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/IsObjectValid) | 如果引用某个对象的指定变量有效，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [KeyString](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/KeyString) | 为指定的键返回组合键字符串（例如，Ctrl+Shift+A）。 |
| [Keyboard](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Keyboard) | 返回或设置键盘的语言和布局设置。 |
| [KeysBoundTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/KeysBoundTo) | 返回一个 **[KeysBoundTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/obj)** 对象，该对象代表指定项的所有组合键。 |
| [LinesToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/LinesToPoints) | 将度量单位从行转换为磅（1 行 = 12 磅）。以 **Single** 类型返回转换结果。 |
| [ListCommands](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ListCommands) | 创建一个新文档，然后插入一个包含 WPS 命令及其相关快捷键和菜单分配的表格。 |
| [MillimetersToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/MillimetersToPoints) | 把度量单位从毫米转换为磅值（1 毫米 = 2.85 磅）。以 **Single** 类型返回转换结果。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Move) | 设置应用程序窗口的位置。 |
| [NewWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/NewWindow) | 打开一个新窗口，其中包含与指定窗口相同的文档。返回一个 **Window** 对象。 |
| [OnTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/OnTime) | 启动在指定的时间运行宏的后台计时器。 |
| [PicasToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PicasToPoints) | 将度量单位从十二点活字转换为磅值（1 十二点活字 = 12 磅）。以 **Single** 类型返回转换结果。 |
| [PixelsToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PixelsToPoints) | 将度量单位由像素转换为磅。以 **Single** 类型返回转换结果。 |
| [PointsToCentimeters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PointsToCentimeters) | 将度量单位由磅转换为厘米（1 厘米 = 28.35 磅）。以 **Single** 类型返回转换结果。 |
| [PointsToInches](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PointsToInches) | 将磅转换为英寸（1 英寸 = 72 磅）。以 **Single** 类型返回转换结果。 |
| [PointsToLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PointsToLines) | 将度量单位从磅转换为行（1 行 = 12 磅）。以 **Single** 类型返回转换结果。 |
| [PointsToMillimeters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PointsToMillimeters) | 将度量单位由磅转换为毫米（1 毫米 = 2.835 磅）。以 **Single** 类型返回转换结果。 |
| [PointsToPicas](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PointsToPicas) | 将度量单位由磅转换为十二点活字（1 十二点活字 = 12 磅）。以 **Single** 类型返回转换结果。 |
| [PointsToPixels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PointsToPixels) | 将长度值的单位由磅转换为像素。以 **Single** 类型返回转换结果。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PrintOut) | 打印指定文档的全部或部分内容。 |
| [ProductCode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ProductCode) | 返回一个 **String** 类型的 WPS 全局唯一标识符（GUID）。 |
| [Quit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Quit) | 退出 WPS ，并可选择保存或传送打开的文档。 |
| [Resize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Resize) | 调整 WPS 应用程序或某一任务的窗口大小。 |
| [Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Run) | 运行 JavaScript 宏。 |
| [ScreenRefresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ScreenRefresh) | 使用视频内存缓冲区的当前信息更新显示器的显示。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ActiveDocument) | 返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象代表活动文档。如果没有打开的文档，就会导致出错。只读。 |
| [ActivePrinter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ActivePrinter) | 返回或设置活动打印机名称。可读/写 **String** 类型。 |
| [ActiveWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ActiveWindow) | 返回 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/obj)** 对象，该对象代表活动窗口（焦点所在的窗口）。如果没有打开的窗口，则会导致出错。只读。 |
| [AddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/AddIns) | 返回一个 **AddIns** 集合，该集合代表所有有效加载项，而不考虑当前是否已加载它们。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Application) | 返回一个 **Application** 对象，该对象代表 WPS 应用程序。 |
| [Assistant](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Assistant) | 返回一个 **Assistant** 对象，该对象代表“WPS Office 助手”。 |
| [AutoCorrect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/AutoCorrect) | 返回一个 **[AutoCorrect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/obj)** 对象，该对象包含当前“自动更正”的选项、词条和例外项。只读。 |
| [AutoCorrectEmail](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/AutoCorrectEmail) | 返回一个 **[AutoCorrect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/obj)** 对象，该对象代表对电子邮件消息进行的自动更正。 |
| [AutomationSecurity](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/AutomationSecurity) | 返回或设置一个 **MsoAutomationSecurity** 常量，该常量代表当用编程方法打开文件时 WPS 所使用的安全设置。 |
| [BrowseExtraFileTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/BrowseExtraFileTypes) | 如果将该属性设置为“text/html”，则用 WPS （而不是默认的 Internet 浏览器）可以打开超链接的 HTML 文件。 **String** 类型，可读写。 |
| [Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Browser) | 返回一个 **[Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Browser/obj)** 对象，该对象代表垂直滚动条上的 **“选择浏览对象”** 工具。只读。 |
| [Build](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Build) | 返回 WPS 应用程序的版本号及编译序号。 **String** 类型，只读。 |
| [COMAddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/COMAddIns) | 返回对 **COMAddIns** 集合的引用，该集合代表 WPS 中当前加载的所有组件对象模型（COM）加载项（COM 加载项：通过添加自定义命令和指定的功能来扩展 WPS Office 程序的功能的补充程序。COM 加载项可在一个或多个 Office 程序中运行。COM 加载项使用文件扩展名 .dll 或 .exe。）。 |
| [CapsLock](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CapsLock) | 如果已打开 Caps Lock 键，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Caption) | 返回或设置应用程序窗口的标题栏中显示的文本。 **String** 类型，可读写。 |
| [CaptionLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CaptionLabels) | 返回一个 **[CaptionLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabels/obj)** 集合，该集合包括全部有效题注标签。只读。 |
| [CheckLanguage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CheckLanguage) | 如果 WPS 在键入时自动检测使用的语言，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CommandBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CommandBars) | 返回一个 **CommandBars** 集合，该集合代表 WPS 中的菜单栏以及所有工具栏。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [CustomDictionaries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CustomDictionaries) | 返回一个 **[Dictionaries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/obj)** 对象，该对象代表活动自定义词典的集合。只读。 |
| [CustomizationContext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CustomizationContext) | 返回或设置一个 **[Template](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/obj)** 或 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象代表存储菜单栏、工具栏和键绑定的更改的模板或文档。可读/写。 |
| [DefaultLegalBlackline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DefaultLegalBlackline) | 如果为 **True** ，则 WPS 使用 **“比较并合并文档”** 对话框中的 **“精确比较”** 选项比较和合并文档。 **Boolean** 类型，可读写。 |
| [DefaultSaveFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DefaultSaveFormat) | 返回或设置将在 **“另存为”** 对话框上的 **“保存类型”** 框中显示的默认格式。 **String** 类型，可读写。 |
| [DefaultTableSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DefaultTableSeparator) | 返回或设置一个字符；在将文本转换为表格时，该字符用来将文本分隔为单元格。 **String** 类型，可读写。 |
| [Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Dialogs) | 返回一个 **[Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/obj)** 集合，该集合代表 WPS 中所有内置对话框。只读。 |
| [DisplayAlerts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DisplayAlerts) | 返回或设置运行宏时产生的一些警告和消息的处理方式。 **WdAlertLevel** 类型，可读写。 |
| [DisplayAutoCompleteTips](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DisplayAutoCompleteTips) | 如果 WPS 显示有关所键入整个单词、日期或词组的建议的提示，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayDocumentInformationPanel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DisplayDocumentInformationPanel) | 返回或设置一个 **Boolean** 类型的值，该值表示是否显示文档属性面板。可读/写。 |
| [DisplayRecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DisplayRecentFiles) | 如果在 **“文件”** 菜单中显示最近使用的文件名，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayScreenTips](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DisplayScreenTips) | 如果为 **True** ，则批注、脚注、尾注和超链接以提示形式显示。突出显示那些标记有批注的文本。 **Boolean** 类型，可读写。 |
| [DisplayScrollBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DisplayScrollBars) | 如果为 **True** ，则 WPS 在至少一个文档窗口中显示滚动条；如果为 **False** ，则在任何窗口中均不显示滚动条。 **Boolean** 类型，可读写。 |
| [Documents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Documents) | 返回一个 **Documents** 集合，该集合代表所有打开的文档。只读。 |
| [DontResetInsertionPointProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/DontResetInsertionPointProperties) | 返回或设置一个 **Boolean** 类型的值，该值代表 WPS 在运行其他代码后是否保持位于插入点位置的文本的格式属性。可读写。 |
| [EmailTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/EmailTemplate) | 返回或设置一个 **String** 类型的值，该值代表发送电子邮件时使用的文档模板。可读写。 |
| [EnableCancelKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/EnableCancelKey) | 返回或设置 WPS 处理 Ctrl+Break 用户中断的方式。 **WdEnableCancelKey** 类型，可读写。 |
| [FeatureInstall](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/FeatureInstall) | 返回或设置 WPS 将如何处理对所需功能尚未安装的方法和属性的调用。 **MsoFeatureInstall** 类型，可读写。 |
| [FileConverters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/FileConverters) | 返回一个 **FileConverters** 集合，该集合代表可用于 WPS 的所有文件转换器。只读。 |
| [FontNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/FontNames) | 返回一个 **[FontNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FontNames/obj)** 对象，该对象包含所有有效字体的名称。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Height) | 返回或设置活动文档窗口的高度，以磅为单位。 **Long** 类型，可读写。 |
| [KeyBindings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/KeyBindings) | 返回一个 **[KeyBindings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/obj)** 集合，该集合代表自定义的按键指定方案，包含了键代码、键类别和命令。 |
| [Language](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Language) | 返回一个 **MsoLanguageID** 常量，该常量代表为 WPS 用户界面选定的语言。 |
| [LanguageSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/LanguageSettings) | 返回一个 **LanguageSettings** 对象，该对象包含 WPS 中语言设置的信息。 |
| [Languages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Languages) | 返回一个 **[Languages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Languages/obj)** 集合。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Left) | 返回或设置一个 **Long** 类型的值，该值代表活动文档的水平位置，以磅为单位。可读写。 |
| [ListGalleries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ListGalleries) | 返回一个 **[ListGalleries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGalleries/obj)** 集合，该集合代表三个列表模板库。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [NormalTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/NormalTemplate) | 返回一个 **[Template](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/obj)** 对象，该对象代表 Normal 模板。 |
| [NumLock](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/NumLock) | 此属性返回 Num Lock 键的状态。如果为 **True** ，则数字键盘可用于输入数字；如果为 **False** ，则该键盘用于移动插入点。 **Boolean** 类型，只读。 |
| [OpenAttachmentsInFullScreen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/OpenAttachmentsInFullScreen) | 返回或设置 **Boolean** 值，该值表示 WPS 是否在阅读模式下打开电子邮件附件。可读写。 |
| [Options](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Options) | 返回一个 **[Options](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/obj)** 对象，该对象代表 WPS 中的应用程序设置。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Application** 对象的父对象。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Path) | 返回指定对象的磁盘或 Web 路径。只读 **String** 类型。 |
| [PathSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PathSeparator) | 返回用于分隔文件夹名称的字符。在 Windows 中，该属性返回一个反斜线 (\\)。只读 **String** 类型。 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PrintPreview) | 如果当前视图是打印预览，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [RecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/RecentFiles) | 返回一个 **[RecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFiles/obj)** 集合，该集合代表最近存取过的文件。 |
| [RestrictLinkedStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/RestrictLinkedStyles) | 返回或设置一个 **Boolean** 类型的值，该值表示 WPS 是否允许链接样式。可读写。 |
| [ScreenUpdating](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ScreenUpdating) | 如果启用屏幕更新，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Selection) | 返回 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象，该对象代表一选定的范围或插入点。只读。 |
| [ShowStartupDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ShowStartupDialog) | 如果为 **True** ，则在启动 WPS 时显示 **“任务窗格”** 。 **Boolean** 类型，可读写。 |
| [ShowStylePreviews](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ShowStylePreviews) | 返回或设置 **Boolean** 值，该值表示 WPS 是否在样式任务窗格显示样式的格式预览。可读/写。 |
| [ShowVisualBasicEditor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ShowVisualBasicEditor) | 如果显示“Visual Basic 编辑器”窗口，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowWindowsInTaskbar](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ShowWindowsInTaskbar) | 如果为 **True** ，则在任务栏中显示打开的文档，默认值为 Single Document Interface (SDI)。如果为 **False** ，则只在 **“窗口”** 菜单中列出打开的文档，提供 Multiple Document Interface (MDI) 的外观。 **Boolean** 类型，可读写。 |
| [SmartArtColors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/SmartArtColors) | 返回 **[SmartArtColors](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColors/obj)** 对象，该对象代表应用程序中当前加载的颜色样式集。只读。 |
| [SmartArtLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/SmartArtLayouts) | 返回 **[SmartArtLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayouts/obj)** 对象，该对象代表应用程序中当前加载的 SmartArt 布局集。只读。 |
| [SmartArtQuickStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/SmartArtQuickStyles) | 返回 **[SmartArtQuickStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/obj)** 对象，该对象代表应用程序中当前加载的 SmartArt 样式集。只读。 |
| [SmartTagRecognizers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/SmartTagRecognizers) | 返回应用程序的一个 **SmartTagRecognizers** 集合。 |
| [SmartTagTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/SmartTagTypes) | 返回一个 **SmartTagTypes** 集合，代表 WPS 中所安装的智能标记组件的智能标记类型。 |
| [StartupPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/StartupPath) | 返回或设置启动文件夹的完整路径，不包括最后的分隔符。 **String** 类型，可读写。 |
| [System](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/System) | 返回一个 **[System](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/obj)** 对象，该对象可用于返回与系统相关的信息，并执行与系统相关的任务。 |
| [TaskPanes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/TaskPanes) | 返回一个 **[TaskPanes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TaskPanes/obj)** 集合，该集合代表 WPS 中最常执行的任务。 |
| [Templates](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Templates) | 返回一个 **[Templates](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Templates/obj)** 集合，该集合代表所有可用的模板，包括共用模板和附加到打开文档的模板。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Top) | 返回或设置活动文档的垂直位置。 **Long** 类型，可读写。 |
| [UndoRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/UndoRecord) | 返回 **[UndoRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/obj)** 对象，该对象提供撤消堆栈的自定义入口点。只读。 |
| [UsableHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/UsableHeight) | 返回 WPS 文档窗口高度可设置的最大值（以磅为单位）。 **Long** 类型，只读。 |
| [UsableWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/UsableWidth) | 返回 WPS 文档窗口可设置的最大宽度（以磅为单位）。 **Long** 类型，只读。 |
| [UserAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/UserAddress) | 该属性返回或设置用户的通讯地址。 **String** 类型，可读写。 |
| [UserControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/UserControl) | 如果文档或应用程序是由用户创建或打开的，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [UserInitials](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/UserInitials) | 该属性返回或设置用户名缩写，WPS 使用该缩写构成批注标记。 **String** 类型，可读写。 |
| [UserName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/UserName) | 该属性返回或设置用户姓名，WPS 将其用于信封和文档的“作者”属性。 **String** 类型，可读写。 |
| [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Version) | 返回 WPS 版本号。 **String** 类型，只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Visible) | 如果指定对象可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Width) | 返回或设置应用程序窗口的宽度（以磅为单位）。 **Long** 类型，可读写。 |
| [WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/WindowState) | 返回或设置指定应用程序窗口的状态。 **WdWindowState** 类型，可读写。 |
| [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Windows) | 返回一个 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/obj)** 集合，该集合代表所有文档窗口。只读。 |
| [XMLNamespaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/XMLNamespaces) | 返回一个 **XMLNamespaces** 集合，代表“架构库”中的 XML 架构。 |