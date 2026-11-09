# Application 对象

代表整个 ET 应用程序，它是整个应用程序api对象树的根对象。

## 说明


整个et应用程序的api对象结构是一个树状结构，而 **Application** 对象是树状结构的根对象，同时， **Application** 对象也提供了对于应用程序相关的各种访问接口，例如：

* 应用程序的设置选项、环境、版本号等相关信息
* 一些常见的属性，如 **ActiveCell** 、 **ActiveWorkbook** 、 **ActiveSheet** 等


## 示例


```JavaScript
/*使用 Application 属性可返回 Application 对象。下例对 Application 对象应用 Windows 属性。*/
function test() {
    let app = Application.Application;
    alert(app.Windows.Count);
}
```


```JavaScript
/*下例在 ET 中打开指定的工作簿。*/
function test() {
    let docPath = "d:/abc.xlsx";
    Application.Workbooks.Open(docPath);
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ActivateMicrosoftApp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActivateMicrosoftApp) | 激活一个 Kingsoft 应用程序。如果该应用程序已经处于运行状态，则本方法激活的是正在运行的应用程序。如果该应用程序不处于运行状态，则本方法将启动该应用程序的新实例。 |
| [AddCustomList](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AddCustomList) | 为自定义自动填充和/或自定义排序添加自定义列表。 |
| [Calculate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Calculate) | 计算所有打开的工作簿、工作簿中的某张特定工作表或工作表指定区域中的单元格，如下表所示。 |
| [CalculateFull](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CalculateFull) | 强制对所有打开工作簿中的数据进行完整计算。 |
| [CalculateFullRebuild](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CalculateFullRebuild) | 对于所有打开的工作簿，强制数据的完整计算并重建从属关系。 |
| [CentimetersToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CentimetersToPoints) | 将计量单位从厘米转换为磅（一磅等于 0.035 厘米）。 |
| [CheckAbort](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CheckAbort) | 停止 ET 应用程序中的重新计算。 |
| [CheckSpelling](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CheckSpelling) | 对单个单词进行拼写检查。 |
| [ClipboardFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ClipboardFormats) | 以数字数组的形式返回剪贴板中当前的格式。可用数组中每个元素与“备注”部分所述的适当常量相比较，以判断剪贴板中是否包含特定的格式。 **Variant** 类型，只读。 |
| [ConvertFormula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ConvertFormula) | 在 A1 和 R1C1 引用样式之间转换、在相对和绝对引用之间转换公式中的单元格引用，或者同时进行这两种转换。 **Variant** 类型。 |
| [DeleteCustomList](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DeleteCustomList) | 删除一个自定义序列。 |
| [Evaluate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Evaluate) | 将一个 ET 名称转换为一个对象或者一个值。 |
| [ExecuteExcel4Macro](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ExecuteExcel4Macro) | 执行一个 ET 宏函数，然后返回此函数的结果。返回结果的类型取决于函数的类型。 |
| [FileDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FileDialog) | 返回一个 **[FileDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/obj)** 对象，该对象表示文件对话框的实例。 |
| [FindFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FindFile) | 显示 **“打开文件”** 对话框。 |
| [GetCustomListContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/GetCustomListContents) | 返回一个自定义序列（一个字符串数组）。 |
| [GetCustomListNum](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/GetCustomListNum) | 返回字符串数组的自定义序列号。使用本方法既可对内置序列进行匹配，也可对自定义序列进行匹配。 |
| [GetOpenFilename](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/GetOpenFilename) | 显示标准的 **“打开文件”** 对话框，并获取用户文件名，而不必真正打开任何文件。 |
| [GetSaveAsFilename](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/GetSaveAsFilename) | 显示标准的“另存为”对话框，获取用户文件名，而无须真正保存任何文件。 |
| [Goto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Goto) | 选定任意工作簿中的任意区域，并且如果该工作簿未处于活动状态，就激活该工作簿。 |
| [InchesToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/InchesToPoints) | 将度量单位从英寸转换为磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）。 |
| [InputBox](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/InputBox) | 显示一个接收用户输入的对话框。返回此对话框中输入的信息。 |
| [International](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/International) | 返回当前的国家/地区和国际设置信息。只读 **Variant** 类型。 |
| [Intersect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Intersect) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示两个或多个区域重叠的矩形区域。如果指定了不同工作表中的一个或多个区域，则返回错误。 |
| [MacroOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MacroOptions) | 对应于 **“宏选项”** 对话框中的选项。还可使用此方法将用户定义函数 (UDF) 显示在 **“插入函数”** 对话框的内置类别或新类别中。 |
| [OnKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OnKey) | 当按特定键或特定的组合键时运行指定的过程。 |
| [OnRepeat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OnRepeat) | 设置“重复”项以及在运行设置此属性的过程后选择“重复”命令时将运行的过程的名称。 |
| [OnTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OnTime) | 安排一个过程在将来的特定时间运行（既可以是具体指定的某个时间，也可以是指定的一段时间之后）。 |
| [OnUndo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OnUndo) | 设置“撤消”命令的文本以及运行此属性的过程后选择“撤消”命令时运行的过程的名称。 |
| [PreviousSelections](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/PreviousSelections) | 返回最后选择的四个区域或名称的数组。数组中的每个元素就是一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。 **Variant** 类型，只读。 |
| [Quit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Quit) | 退出ET |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表一个单元格或单元格区域。 |
| [RegisterXLL](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/RegisterXLL) | 加载 XLL 代码源，并自动注册该代码源中包含的函数和命令。 |
| [RegisteredFunctions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/RegisteredFunctions) | 返回在动态链接库或代码资源中的用 REGISTER 或 REGISTER.ID 宏函数登记的函数信息。 **Variant** 类型，只读。 |
| [Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Run) | 运行一个宏或者调用一个函数。该方法可用于运行 JavaScript 或 ET 宏语言编写的宏，或者运行 DLL 或 XLL 中的函数。 |
| [SendKeys](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/SendKeys) | 将击键发送给活动应用程序。 |
| [SharePointVersion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/SharePointVersion) | 返回在站点上运行的指定 URL 的 SharePoint Foundation 实例的版本号。 |
| [Undo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Undo) | 撤消最后一次用户界面操作。 |
| [Union](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Union) | 返回两个或多个区域的合并区域。 |
| [Volatile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Volatile) | 用于将用户自定义函数标记为易失性函数，无论何时在工作表的任意单元格中进行计算时，易失性函数都必须重新进行计算。非易失性函数只在输入变量改变时才重新计算，若不用于计算工作表单元格的用户自定义函数中，则此方法无效。 |
| [Wait](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Wait) | 暂停运行宏，直到一特定时间才可继续执行。如果到达指定时间，则该值为 **True** 。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActiveCell) | 返回一个 Range 对象，该对象代表活动窗口（顶部窗口）或指定窗口中的活动单元格。如果窗口中没有显示工作表，此属性无效。只读。 |
| [ActiveChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActiveChart) | 返回一个 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，它代表活动图表（嵌入式图表或图表工作表）。嵌入式图表在被选中或激活时被认为是活动的。当没有图表处于活动状态时，此属性返回 **null** 。 |
| [ActiveEncryptionSession](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActiveEncryptionSession) | 返回一个 **Long** ，该值表示与活动文档相关联的加密会话。 此为只读属性。 |
| [ActivePrinter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActivePrinter) | 返回或设置活动打印机的名称。 **String** 类型，可读写。 |
| [ActiveSheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActiveSheet) | 返回一个对象，它代表活动工作簿中或指定的窗口或工作簿中的活动工作表（最上面的工作表）。如果没有活动的工作表，则返回 **null** 。 |
| [ActiveWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActiveWindow) | 返回一个 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/obj)** 对象，该对象代表活动窗口（顶部窗口）。只读。如果没有打开的窗口，则返回 **null** 。 |
| [ActiveWorkbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActiveWorkbook) | 返回一个 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象，该对象代表活动窗口（顶部窗口）中的工作簿。只读。如果没有打开的窗口，或者“信息”窗口或“剪贴板”窗口为活动窗口，则返回 **null** 。 |
| [AddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AddIns) | 返回一个 **[AddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns/obj)** 集合，该集合表示 **“加载项”** 对话框（ **“工具”** 选项卡上的 **“加载项”** 命令）中列出的所有加载项。只读。 |
| [AddIns2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AddIns2) | 返回一个 **[AddIns2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns2/obj)** 集合，该集合表示 ET 中当前可用或打开的所有加载项，而不考虑它们是否已安装。只读。 |
| [AlertBeforeOverwriting](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AlertBeforeOverwriting) | 如果 ET 在执行拖放编辑操作过程中，在覆盖非空单元格之前显示一条消息，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AltStartupPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AltStartupPath) | 返回或设置替换启动文件夹的名称。 **String** 类型，可读写。 |
| [AlwaysUseClearType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AlwaysUseClearType) | 返回或设置一个 **Boolean** 值，该值表示是否使用 ClearType 显示菜单、功能区和对话框文本中的字体。可读/写 **Boolean** 类型。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Application) | 该属性返回一个代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [ArbitraryXMLSupportAvailable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ArbitraryXMLSupportAvailable) | 返回一个 **Boolean** 类型的值，该值表示 ET 中的 XML 功能是否可用。只读。 |
| [AskToUpdateLinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AskToUpdateLinks) | 如果 ET 打开带有链接的文件时询问用户是否更新链接，则该值为 **True** 。如果 ET 自动更新链接并且不显示对话框，则该值为 **False** 。 **Boolean** 类型，可读写。 |
| [Assistance](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Assistance) | 为 ET 返回代表 WPS Office 帮助查看器的 **[IAssistance](#TODO)** 对象。只读。 |
| [AutoFormatAsYouTypeReplaceHyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AutoFormatAsYouTypeReplaceHyperlinks) | 如果 ET 按照键入的内容自动设置超链接的格式，则该值为 **True** （默认）。如果 ET 不按照键入的内容自动设置超链接的格式，则该值为 **False** 。 **Boolean** 类型，可读写。 |
| [AutoPercentEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AutoPercentEntry) | 如果在向格式设置为百分比的单元格中输入数据时，并不自动将该数据乘以 100，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoRecover](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AutoRecover) | 返回一个 **[AutoRecover](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoRecover/obj)** 对象，该对象在规定的时间间隔内对所有的文件格式进行备份。 |
| [AutomationSecurity](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/AutomationSecurity) | 返回或设置一个 **MsoAutomationSecurity** 常量，该常量表示在用编程方式打开文件时，ET 所使用的安全模式。可读写。 |
| [Build](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Build) | 返回 ET 内部版本号。 **Number** 类型，只读。 |
| [COMAddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/COMAddIns) | 返回 ET 的 **COMAddIns** 集合，该集合表示当前所安装的 COM 加载宏。只读。 |
| [CalculateBeforeSave](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CalculateBeforeSave) | 如果在将工作簿保存到磁盘之前计算工作簿（如果 **[Calculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Calculation)** 属性设置为 **xlManual** ），则该属性值为 **True** 。如果更改 **Calculation** 属性则保留该属性。 **Boolean** 类型，可读写。 |
| [Calculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Calculation) | 返回或设置一个 **[XlCalculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCalculation)** 值，它代表计算模式。 |
| [CalculationInterruptKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CalculationInterruptKey) | 设置或返回一个 **[XlCalculationInterruptKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCalculationInterruptKey)** 常量，该常量指定在执行计算时可中断 ET 的键。可读写。 |
| [CalculationState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CalculationState) | 返回一个 **[XlCalculationState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCalculationState)** 常量，该常量针对 ET 中正在执行的任意计算指示应用程序的计算状态。只读。 |
| [CalculationVersion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CalculationVersion) | 返回一个数字，其最右侧两位表示计算引擎的次要版本号，而左侧的其他位表示 ET 组件的主要版本号。 **Long** 型，只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Caption) | 返回或设置一个 **String** 值，它代表出现在 ET 主窗口标题栏中显示的名称。 |
| [CellDragAndDrop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CellDragAndDrop) | 如果启用单元格拖放功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Cells) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表活动工作表中的所有单元格。如果活动文档不是工作表，则此属性无效。 |
| [ChartDataPointTrack](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ChartDataPointTrack) | 如果为 **True** ，则新创建的文档中的所有图表都使用单元格引用跟踪行为。 **Boolean** 类型，可读写。 |
| [ClusterConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ClusterConnector) | 返回或设置用来运行 XLL 加载项中的用户定义函数的高性能计算 (HPC) 群集连接器的名称。可读/写。 |
| [Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Columns) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)对象，它代表活动工作表中的所有列。如果活动文档不是工作表，则 Columns 属性无效。 |
| [CommandBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CommandBars) | 返回一个 **[CommandBars]** 对象，它代表 ET 命令栏。只读。 |
| [CommandUnderlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CommandUnderlines) | 返回或设置 Mac 版 ET 中命令加下划线的状态。可以是 **[XlCommandUnderlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCommandUnderlines)** 常量之一。 **Long** 类型，可读写。 |
| [ConstrainNumeric](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ConstrainNumeric) | 如果手写识别只能识别数字和标点符号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ControlCharacters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ControlCharacters) | 如果 ET 显示从右到左语言的控制字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CopyObjectsWithCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CopyObjectsWithCells) | 如果对象与单元格一同剪切、复制、提取和排序，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Cursor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Cursor) | 返回或设置 ET 中鼠标指针的外观。 **[XlMousePointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlMousePointer)** 类型，可读写。 |
| [CursorMovement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CursorMovement) | 返回或设置一个值，此值用于表明使用的是可见光标还是逻辑光标。可为以下常量之一： **xlVisualCursor** 或 **xlLogicalCursor** 。 **Long** 类型，可读写。 |
| [CustomListCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CustomListCount) | 返回已定义的自定义序列的数目（包括内置序列）。 **Long** 类型，只读。 |
| [CutCopyMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/CutCopyMode) | 返回或设置剪切或复制模式的状态。可为 **True** 、 **False** 或如下表所示的一个 **[XLCutCopyMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCutCopyMode)** 常量。 **Long** 类型，可读写。 |
| [DDEAppReturnCode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DDEAppReturnCode) | 返回带应用程序说明符的 DDE 返回代码，该代码包含在 ET 接收到的最后一个 DDE 确认消息中。 **Long** 类型，只读。 |
| [DataEntryMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DataEntryMode) | 返回或设置“数据输入”模式，如下表所示。处于“数据输入”模式时，仅可在当前选定区域的未锁定单元格中输入数据。 **Long** 类型，可读写。 |
| [DecimalSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DecimalSeparator) | 设置或返回用作小数分隔符的字符。 **String** 类型，可读写。 |
| [DefaultFilePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DefaultFilePath) | 返回或设置 ET 打开文件时使用的默认路径。 **String** 类型，可读写。 |
| [DefaultSaveFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DefaultSaveFormat) | 返回或设置保存文件的默认格式。要获取有效常量的列表，请参阅 **[FileFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/FileFormat)** 属性。 **Long** 类型，可读写。 |
| [DefaultSheetDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DefaultSheetDirection) | 返回或设置 ET 显示新窗口和工作表时的默认方向。可为以下常量之一： **xlRTL** （从右到左）或 **xlLTR** （从左到右）。 **Long** 类型，可读写。 |
| [DefaultWebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DefaultWebOptions) | 返回 **[DefaultWebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/obj)** 对象，该对象包含应用程序级的全局属性，当以网页保存文档或打开网页时，ET 会使用这些属性。只读。 |
| [DeferAsyncQueries](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DeferAsyncQueries) | 获取或设置在工作表由 VBA 代码计算时是否执行对 OLAP 数据源的异步查询。可读/写 **Boolean** 类型。 |
| [Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Dialogs) | 返回一个 **[Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/obj)** 集合，该集合代表所有内置对话框。只读。 |
| [DisplayAlerts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayAlerts) | 如果宏运行时 ET 显示特定的警告和消息，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayClipboardWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayClipboardWindow) | 如果能显示 WPS Office 剪贴板，则返回 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayCommentIndicator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayCommentIndicator) | 返回或设置单元格显示批注和标识符的方式。可以是 **[XlCommentDisplayMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCommentDisplayMode)** 常量之一。 |
| [DisplayDocumentActionTaskPane](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayDocumentActionTaskPane) | 设置为 **True** 可显示 **“文档操作”** 任务窗格；设置为 **False** 可隐藏 **“文档操作”** 任务窗格。 **Boolean** 类型，可读写。 |
| [DisplayDocumentInformationPanel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayDocumentInformationPanel) | 返回或设置一个 **Boolean** 值，该值表示是否显示文档属性面板。可读/写 **Boolean** 类型。 |
| [DisplayExcel4Menus](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayExcel4Menus) | 如果 ET 显示 4.0 版的菜单栏，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayFormulaAutoComplete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayFormulaAutoComplete) | 获取或设置一个值，该值表示在生成单元格公式时是否显示相关函数和已定义名称的列表。可读/写 **Boolean** 类型。 |
| [DisplayFormulaBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayFormulaBar) | 如果显示编辑栏，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayFullScreen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayFullScreen) | 如果 ET 处于全屏显示模式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayFunctionToolTips](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayFunctionToolTips) | 如果可以显示函数的 “工具提示”，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayInsertOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayInsertOptions) | 如果应显示 **“插入选项”** 按钮，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayNoteIndicator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayNoteIndicator) | 如果包含注释的单元格显示单元格提示并包含注释标识符（单元格右上角的小圆点），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayPasteOptions) | 如果可以显示 **“粘贴选项”** 按钮，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayRecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayRecentFiles) | 如果最近使用的文件列表显示在用户界面中，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayScrollBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayScrollBars) | 如果滚动条在所有工作簿中显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayStatusBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayStatusBar) | 如果显示状态栏，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EditDirectlyInCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/EditDirectlyInCell) | 如果 ET 允许在单元格中直接进行编辑，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableAutoComplete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/EnableAutoComplete) | 如果启用记忆式键入功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableEvents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/EnableEvents) | 如果对指定对象启用事件，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableLargeOperationAlert](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/EnableLargeOperationAlert) | 设置或返回一个 **Boolean** 值，该值表示当用户尝试执行的操作所影响的单元格数目比 Office 中心 UI 中指定的数目大时，是否显示警告消息。可读/写 **Boolean** 类型。 |
| [EnableLivePreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/EnableLivePreview) | 设置或返回一个 **Boolean** 值，该值表示是显示还是隐藏在使用支持预览的库时所出现的库预览。如果将此属性设置为 **True** ，则会在应用命令之前显示工作簿预览。可读/写 **Boolean** 类型。 |
| [EnableMacroAnimations](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/EnableMacroAnimations) | 控制是否启用宏动画。如果启用了用户界面动画或图表动画，则为 **True** 。设置为 **False** (默认情况下没有动画) 。如果在运行宏期间将其设置为 **True** ，它将启用动画，然后在宏运行后重置为 **False** 。读/写 **Boolean** 。 |
| [EnableSound](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/EnableSound) | 如果对 WPS Office 启用声音，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ErrorCheckingOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ErrorCheckingOptions) | 返回一个 **[ErrorCheckingOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/obj)** 对象，该对象表示应用程序的错误检查选项。 |
| [Excel4MacroSheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Excel4MacroSheets) | 返回一个 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合，它代表指定工作簿中所有的 ET 宏表。只读。 |
| [ExtendList](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ExtendList) | 如果 ET 自动将格式和公式扩展到清单中新增的数据上，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [FeatureInstall](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FeatureInstall) | 返回或设置一个值（常量），该值指定 ET 如何处理对所需功能尚未安装的方法和属性的调用。可为下表列出的 **[MsoFeatureInstall](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoFeatureInstall)** 常量之一。 **MsoFeatureInstall** 类型，可读写。 |
| [FileValidation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FileValidation) | 返回或设置 ET 在打开文件前如何验证文件。可读/写。 |
| [FileValidationPivot](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FileValidationPivot) | 返回或设置 ET 将如何验证数据透视表的数据缓存的内容。可读/写。 |
| [FindFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FindFormat) | 设置或返回要查找的单元格格式类型的搜索条件。 |
| [FixedDecimal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FixedDecimal) | 如果该属性被设置为 **True** ，则以后输入的所有数据都根据 **[FixedDecimalPlaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FixedDecimalPlaces)** 属性所设置的固定小数位数设置格式。 **Boolean** 类型，可读写。 |
| [FixedDecimalPlaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FixedDecimalPlaces) | 返回或设置当 **[FixedDecimal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FixedDecimal)** 属性设置为 **True** 时使用的固定小数位数。 **Long** 类型，可读写。 |
| [FlashFill](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FlashFill) | 如果 ET 快速填充功能已启用并处于活动状态，则为 **True** 。 **Boolean** 类型，可读写。 |
| [FlashFillMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FlashFillMode) | 如果启用了快速填充功能，则为 **True** 。 可读/写， **Boolean** 类型。 |
| [FormulaBarHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FormulaBarHeight) | 允许用户指定行中编辑栏的高度。可读/写 **Long** 类型。 |
| [GenerateGetPivotData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/GenerateGetPivotData) | 当 ET 能够获取数据透视表数据时，返回 **True** 。 **Boolean** 类型，可读写。 |
| [GenerateTableRefs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/GenerateTableRefs) | **GenerateTableRefs** 属性确定是使用传统的记号方法还是使用新的结构化引用记号方法在公式中引用表格。可读/写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Height) | 返回一个 **Double** 值，它代表主应用程序窗口的高度（以磅为单位）。 |
| [HighQualityModeForGraphics](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/HighQualityModeForGraphics) | 返回或设置 ET 是否使用高质量模式来打印图形。可读/写。 |
| [Hinstance](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Hinstance) | 返回由 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象表示的 ET 实例的句柄。只读 **Long** 类型。 |
| [HinstancePtr](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/HinstancePtr) | 返回由指定的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象表示的 ET 实例的句柄。只读 **Variant** 。 |
| [Hwnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Hwnd) | 返回一个 **Number** 类型的值，该值表示 ET 窗口的最高级别的窗口句柄。只读。 |
| [IgnoreRemoteRequests](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/IgnoreRemoteRequests) | 如果远程 DDE 请求被忽略，则该值为 **True** 。 **Boolean** 类型，可读写。 |
| [Interactive](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Interactive) | 如果 ET 处于交互模式，则该属性值为 **True** ；该属性值通常为 **True** 。如果设置该属性为 **False** ，则 ET 将禁止所有的键盘输入和鼠标输入（由代码显示的对话框的输入除外）。 **Boolean** 类型，可读写。 |
| [IsSandboxed](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/IsSandboxed) | 如果指定的工作簿在受保护的视图窗口打开，则返回 **True** 。只读。 |
| [Iteration](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Iteration) | 如果 ET 使用迭代来处理循环引用，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [LanguageSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/LanguageSettings) | 返回一个 **[LanguageSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/LanguageSettings/obj)** 对象，该对象包含 ET 中有关语言设置的信息。只读。 |
| [LargeOperationCellThousandCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/LargeOperationCellThousandCount) | 返回或设置操作中所需的单元格的最大数目，如果超过此数目，将触发警告。可读/写 **Long** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Left) | 返回或设置一个 **Double** 值，它代表从屏幕左边缘到 ET 主窗口左边缘的距离（以磅为单位）。 |
| [LibraryPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/LibraryPath) | 返回 Library 文件夹的路径，不带末尾分隔符。 **String** 类型，只读。 |
| [MailSystem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MailSystem) | 返回安装在主机上的邮件系统。 **[XlMailSystem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlMailSystem)** 类型，只读。 |
| [MapPaperSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MapPaperSize) | 如果自动调整以其他国家/地区的标准纸张大小（例如，A4）来设置格式的文档，以便以用户所在的国家/地区的标准纸张大小（例如，信件）来正确地打印文档，则该值为 **True** 。 **Boolean** 类型，可读写。 |
| [MathCoprocessorAvailable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MathCoprocessorAvailable) | 如果数学协处理器可用，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [MaxChange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MaxChange) | 返回或设置 ET 处理循环引用时迭代之间的最大变化值。 **Double** 类型，可读写。 |
| [MaxIterations](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MaxIterations) | 返回或设置 ET 处理循环引用的最大迭代次数。 **Long** 类型，可读写。 |
| [MeasurementUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MeasurementUnit) | 指定应用程序中使用的度量单位。可读/写 **xlMeasurementUnit** 类型。 |
| [MergeInstances](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MergeInstances) | 如果为 True ，可将应用程序的多个实例合并到单个实例中。 读/写 Boolean。 |
| [MouseAvailable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MouseAvailable) | 如果鼠标可用，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [MoveAfterReturn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MoveAfterReturn) | 如果按 Enter (Return) 键后活动单元格的位置改变，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MoveAfterReturnDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MoveAfterReturnDirection) | 返回或设置当用户按 Enter 时，活动单元格的移动方向。 **[XlDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlDirection)** 类型，可读写。 |
| [MultiThreadedCalculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MultiThreadedCalculation) | 返回控制多线程重新计算设置的 **MultiThreadedCalculation** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Name) | 返回一个代表对象名称的 **String** 值。 |
| [Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Names) | 返回一个 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** 集合，该集合代表活动工作簿中的所有名称。只读 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** 对象。 |
| [NetworkTemplatesPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/NetworkTemplatesPath) | 返回保存模板的网络路径。网络路径不存在时，该属性返回一个空的字符串。 **String** 类型，只读。 |
| [ODBCErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ODBCErrors) | 返回一个 **[ODBCErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ODBCErrors)** 集合，该集合包含由最近的查询表或数据透视表操作生成的所有 ODBC 错误。只读。 |
| [OLEDBErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OLEDBErrors) | 返回一个 **[OLEDBErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBErrors/obj)** 集合，该集合表示最近一次 OLE DB 查询返回的错误信息。只读。 |
| [OnWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OnWindow) | 返回或设置每当激活一个窗口时要运行的过程的名称。 **String** 型，可读写。 |
| [OperatingSystem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OperatingSystem) | 返回当前操作系统的名称和版本号。例如，“Windows (32-bit) 4.00”。 **String** 类型，只读。 |
| [OrganizationName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OrganizationName) | 返回注册组织名称。 **String** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Parent) | 返回指定对象的父对象。只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Path) | 返回一个 **String** 值，它代表应用程序的完整路径，不包括末尾的分隔符和应用程序名称。 |
| [PathSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/PathSeparator) | 返回路径分隔符 (“\\”)。 **String** 类型，只读。 |
| [PivotTableSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/PivotTableSelection) | 如果数据透视表使用结构化选择，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintCommunication](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/PrintCommunication) | 指定与打印机的通信是否开启。 **Boolean** 读/写。 |
| [ProductCode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ProductCode) | 返回 ET 的全球唯一标识符 (GUID)。 **String** 类型，只读。 |
| [PromptForSummaryInfo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/PromptForSummaryInfo) | 如果在保存文件时 ET 要求用户输入汇总信息，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [RTD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/RTD) | 返回一个 **[RTD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RTD/obj)** 对象。 |
| [Ready](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Ready) | 当 ET 应用程序就绪时，返回 **True** ，当 ET 未就绪时，返回 **False** 。 **Boolean** 类型，只读。 |
| [RecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/RecentFiles) | 返回一个 **[RecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/obj)** 集合，该集合表示最近使用的文件的列表。 |
| [RecordRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/RecordRelative) | 如果以相对引用录制宏，则该属性值为 **True** ；如果以绝对引用录制宏，则该属性值为 **False** 。 **Boolean** 类型，只读。 |
| [ReferenceStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ReferenceStyle) | 返回或设置 ET 是以 A1 引用样式还是以 R1C1 引用样式显示单元格引用和行、列标题。 **[XlReferenceStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlReferenceStyle)** 类型，可读写。 |
| [ReplaceFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ReplaceFormat) | 设置替换条件以用于替换单元格格式。然后，在对 Range 对象的 **Replace** 方法的后续调用中使用替换条件。 |
| [RollZoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/RollZoom) | 如果使用智能鼠标进行缩放而不是滚动，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Rows) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表活动工作表中的所有行。如果活动文档不是工作表，则 **Rows** 属性失效。 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，只读。 |
| [ScreenUpdating](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ScreenUpdating) | 如果启用屏幕更新，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Selection) | 为 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象返回在活动窗口中选定的对象。 |
| [Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Sheets) | 返回一个 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合，它代表活动工作簿中所有的工作表。 **Sheets** 对象，只读。 |
| [SheetsInNewWorkbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/SheetsInNewWorkbook) | 返回或设置 ET 自动插入到新工作簿中的工作表数目。可读/写 **Long** 类型。 |
| [ShowChartTipNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ShowChartTipNames) | 如果图表显示图表提示名称，则该值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowChartTipValues](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ShowChartTipValues) | 如果图表显示图表提示值，则该值为 **True** 。默认值是 **True** 。可读/写 **Boolean** 类型。 |
| [ShowDevTools](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ShowDevTools) | 返回或设置一个 **Boolean** 值，该值表示是否在功能区中显示 **“开发工具”** 选项卡。可读/写 **Boolean** 类型。 |
| [ShowMenuFloaties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ShowMenuFloaties) | 返回或设置一个 **Boolean** 值，该值表示当用户在工作簿窗口中右键单击时是否显示 **“浮动工具栏”** 。如果显示 **“浮动工具栏”** ，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowQuickAnalysis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ShowQuickAnalysis) | 控制选择时是否显示快速分析上下文用户界面。True表示将显示“快速分析”按钮。Boolean 类型，可读写。 |
| [ShowSelectionFloaties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ShowSelectionFloaties) | 返回或设置一个 **Boolean** 值，该值表示当用户选择文本时是否显示 **“浮动工具栏”** 。如果显示 **“浮动工具栏”** ，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowStartupDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ShowStartupDialog) | 如果显示 ET 应用程序的“新建工作簿”任务窗格，则返回 **True** （默认值为 **False** ）。 **Boolean** 类型，可读写。 |
| [ShowToolTips](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ShowToolTips) | 如果打开工具提示，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Speech](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Speech) | 返回一个 **[Speech](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Speech/obj)** 对象。 |
| [SpellingOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/SpellingOptions) | 返回一个 **[SpellingOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SpellingOptions/obj)** 对象，该对象表示应用程序的拼写检查选项。 |
| [StandardFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/StandardFont) | 返回或设置标准字体的名称。 **String** 类型，可读写。 |
| [StandardFontSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/StandardFontSize) | 以磅（磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位返回或设置标准字体大小。 **Long** 类型，可读写。 |
| [StartupPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/StartupPath) | 返回启动文件夹的完整路径，不包括尾部分隔符。 **String** 类型，只读。 |
| [StatusBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/StatusBar) | 返回或设置状态栏中的文字。 **String** 类型，可读写。 |
| [TemplatesPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/TemplatesPath) | 返回模板所存储的本地路径。 **String** 类型，只读。 |
| [ThisCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ThisCell) | 返回一个单元格，用户定义的函数将作为 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象从这里调用。 |
| [ThisWorkbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ThisWorkbook) | 返回一个 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象，该对象表示其中正在运行当前宏代码的工作簿。只读。 |
| [ThousandsSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ThousandsSeparator) | 设置或返回用于千位分隔符的字符。 **String** 类型，可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Top) | 返回或设置一个 **Double** 值，它代表从屏幕上边缘到 ET 主窗口上边缘的距离（以磅为单位）。 |
| [TransitionMenuKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/TransitionMenuKey) | 返回或设置 ET 菜单或帮助键，通常为“/”。 **String** 类型，可读写。 |
| [TransitionMenuKeyAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/TransitionMenuKeyAction) | 返回或设置按下 ET 菜单键后将执行的操作。可为 **xlExcelMenus** 或 **xlLotusHelp** 。 **Long** 类型，可读写。 |
| [TransitionNavigKeys](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/TransitionNavigKeys) | 如果 Lotus 1-2-3 常用键是活动的，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [UsableHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UsableHeight) | 返回在应用程序窗口区域中一个窗口能占有的最大高度（以磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位）。 **Double** 型，只读。 |
| [UsableWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UsableWidth) | 返回在应用程序窗口区域中一个窗口能占有的最大宽度（以磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位）。 **Double** 型，只读。 |
| [UseClusterConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UseClusterConnector) | 返回或设置 ET 是否允许 XLL 加载项中的用户定义函数在计算机群集上运行。可读/写。 |
| [UseSystemSeparators](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UseSystemSeparators) | 如果 ET 的系统分隔符已启用，则该属性的值为 **True** （默认值）。 **Boolean** 类型，可读写。 |
| [UsedObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UsedObjects) | 返回一个 **[UsedObjects](#TODO)** 对象，该对象表示在工作簿中分配的对象。只读。 |
| [UserControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UserControl) | 如果应用程序可见，或者用户已创建或启动应用程序，则该值为 **True** 。如果以编程方式通过 **CreateObject** 函数或 **GetObject** 函数启动应用程序，且应用程序为隐藏状态，则该值为 **False** 。 **Boolean** 类型，可读写。 |
| [UserLibraryPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UserLibraryPath) | 返回用户计算机上 COM 加载宏安装位置的路径。 **String** 类型，只读。 |
| [UserName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UserName) | 返回或设置当前用户的名称。 **String** 类型，可读写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Value) | 返回一个代表应用程序名称的 **String** 值。 |
| [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Version) | 返回一个 **String** 值，它代表 ET 版本号。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |
| [WarnOnFunctionNameConflict](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/WarnOnFunctionNameConflict) | 在将 **WarnOnFunctionNameConflict** 属性设置为 **True** 时，如果开发人员尝试使用现有函数名称创建一个新函数，则会发出警告。可读/写 **Boolean** 类型。 |
| [Watches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Watches) | 返回一个 **[Watches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/obj)** 对象，该对象表示在重新计算工作表时跟踪的区域。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Width) | 返回或设置一 **个 Double** 值，它代表应用程序窗口的宽度（以磅为单位）。 |
| [WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/WindowState) | 返回或设置窗口的状态。[XlWindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlWindowState)类型，可读写。 |
| [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Windows) | 返回一个 **Windows** 集合，它代表所有工作簿中的所有窗口。 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/obj)** 对象，只读。 |
| [WindowsForPens](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/WindowsForPens) | 如果此计算机正在运行的是 Windows for Pen Computing，则该属性的值为 **True** 。 **Boolean** 类型，只读。 |
| [Workbooks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Workbooks) | 返回一个 **[Workbooks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/obj)** 集合，该集合表示所有打开的工作簿。只读。 |
| [WorksheetFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/WorksheetFunction) | 返回 **WorksheetFunction** 对象。只读。 |
| [Worksheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Worksheets) | 对于 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，返回一个 [Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj) 集合，它代表活动工作簿中的所有工作表。对于 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象，返回一个 [Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj) 集合，它代表指定工作簿中的所有工作表。[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)对象，只读。 |