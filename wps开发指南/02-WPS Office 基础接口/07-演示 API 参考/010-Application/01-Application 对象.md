# Application 对象

代表整个 WPP 应用程序。

## 说明


 **Application** 对象包括：

* 应用程序范围内的设置和选项（例如，当前打印机的名称）。
* 用于返回顶层对象的属性，例如 **ActivePresentation** 和 **Windows** 。

在WPS宏编辑器中编写要在 WPP 中运行的代码时， **Application** 对象的下列属性可以在没有对象限定符的情况下使用： **ActivePresentation** 、 **ActiveWindow** 、 **AddIns** 、 **Presentations** 、 **SlideShowWindows** 和 **Windows** 。例如，可以编写ActiveWindow.Height = 200 来代替Application.ActiveWindow.Height = 200。（仅WPS宏编辑器）

 **Application** 属性可用于返回 **Application** 对象。


## 示例


```JavaScript
/*本示例显示应用程序文件的路径。*/
function test() {
    alert(Application.Path)
}
```


```JavaScript
/*本示例将应用程序窗口设置为可见，并打开一个名为“Caption.pptx”的现有演示文稿。*/
function test() {
    Application.Visible = msoTrue
    Application.Presentations.Open("D:\\Caption.pptx")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Activate) | 激活指定的对象。 |
| [FileDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/FileDialog) | 返回一个 **FileDialog** 对象，该对象表示文件对话框的单个实例。只读。 |
| [Quit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Quit) | 退出 WPP。该方法相当于单击“文件”菜单上的“退出”。 |
| [Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Run) | 运行JS宏。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Active) | 返回 WPP 应用程序是否处于激活的状态。只读。 |
| [ActivePresentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/ActivePresentation) | 返回一个 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象，该对象代表当前窗口中打开的演示文稿。只读。 |
| [ActiveWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/ActiveWindow) | 返回一个代表活动文档窗口的 **[DocumentWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/obj)** 对象。只读。 |
| [AddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/AddIns) | 返回特定于程序的 **AddIns** 集合，该值代表 **“加载项”** 对话框（依次单击 **“工具”选项卡** 、 **“加载项”** ）中列出的所有加载项。只读。 |
| [Build](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Build) | 返回 WPP 当前实例的内部版本号。只读。 |
| [COMAddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/COMAddIns) | 返回对 WPP 中当前加载的组件对象模型（COM）加载宏的引用。在 **“工具”** 选项卡的 **“COM 加载项”** 对话框中列出了这些加载项。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Caption) | 返回在应用程序窗口的标题栏中显示的文本。可读/写。 |
| [CommandBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/CommandBars) | 返回一个代表 WPP 中所有命令栏的 **CommandBars** 集合。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Creator) | 返回 **Long** 类型值，该值代表创建指定对象的应用程序创建者代码，该代码由四个字符构成。例如，如果对象是在WPP 中创建的，则此属性返回一个十六进制数 50575054。只读。 |
| [DisplayAlerts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/DisplayAlerts) | 设置或返回 **PpAlertLevel** 常量，该常量代表 WPP 在运行宏时是否显示警告。可读/写。 |
| [DisplayGridLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/DisplayGridLines) | 决定是否显示 WPP 中的网格线。可读/写。 |
| [DisplayGuides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/DisplayGuides) | 获取或设置是否在应用程序中显示绘图参考线。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Height) | 返回或设置指定对象的高度（以磅为单位）。可读写。 |
| [LanguageSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/LanguageSettings) | 返回一个 **LanguageSettings** 对象，该对象包含 WPP 中有关语言设置的信息。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Left) | 返回或设置一个 **Single** 类型值，它表示从文档、应用程序和幻灯片窗口的左边缘到应用程序窗口工作区的左边缘的距离（以磅为单位）。将此属性设置为非常大的正值或负值可能会使窗口完全离开桌面。可读/写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Name) | 返回应用程序的名称"Microsoft PowerPoint"。只读。 |
| [Options](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Options) | 返回一个 **Options** 对象，该对象代表 WPP 中的应用程序选项。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Path) | 返回 **String** ，该值代表到指定的 **Application** 对象的路径，只读。 |
| [Presentations](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Presentations) | 返回一个 **[Presentations](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/obj)** 集合，该集合代表所有打开的演示文稿。只读。 |
| [SlideShowWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/SlideShowWindows) | 返回一个 **[SlideShowWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindows/obj)** 集合，该集合代表所有打开的幻灯片放映窗口。只读。 |
| [SmartArtColors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/SmartArtColors) | 返回当前 **Application** 对象的 SmartArt 颜色。只读。 |
| [SmartArtLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/SmartArtLayouts) | 返回当前 **Application** 对象的 SmartArt 布局。只读。 |
| [SmartArtQuickStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/SmartArtQuickStyles) | 返回当前 **Application** 对象中的 SmartArt 图表的快速样式。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Top) | 返回或设置一个 **Single** 类型值，表示应用程序窗口的工作区的上边缘到文档、应用程序和幻灯片放映窗口的上边缘的距离，以磅为单位。读/写。 |
| [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Version) | 返回 WPP 版本号。只读 。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Visible) | 返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。 **MsoTriState** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Width) | 返回或设置指定对象的宽度（以磅为单位）。可读/写。 |
| [WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/WindowState) | 返回或设置指定窗口的状态。可读/写。 **PpWindowState** 类型。 |
| [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Windows) | 返回一个代表所有打开的文档窗口的 [ **DocumentWindows** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/obj) 集合。只读。 |