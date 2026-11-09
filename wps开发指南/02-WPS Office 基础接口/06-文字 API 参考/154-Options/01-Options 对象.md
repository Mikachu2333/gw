# Options 对象

代表 WPS 中的应用程序和文档选项。 **Options** 对象的许多属性与 **“选项”** 对话框中的项对应。

## 说明


使用 **Options** 属性可返回 **Options** 对象。


## 示例


```JavaScript
/*本示例设置 WPS 的三个应用程序选项。*/
function test() {
    Application.Options.AllowDragAndDrop = true
    Application.Options.ConfirmConversions = false
    Application.Options.MeasurementUnit = wdPoints
}
```


```JavaScript
/*本示例判断如果 WPS 在当前文档中使用字符作为默认度量单位，则通知用户。*/
function test() {
    if (Application.Options.UseCharacterUnit) {
        alert("WPS 在当前文档中使用字符作为默认度量单位")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [DefaultFilePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultFilePath) | 返回或设置各项（例如文档、模板和图形）的默认文件夹。 **String** 类型，可读写。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AddBiDirectionalMarksWhenSavingTextFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AddBiDirectionalMarksWhenSavingTextFile) | 如果 WPS 在将文档保存为文本文件时添加双向控制字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AddControlCharacters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AddControlCharacters) | 如果 WPS 在剪切和复制文本时添加双向控制字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AddHebDoubleQuote](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AddHebDoubleQuote) | 如果 WPS 会将数字格式括在双引号（"）中，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AlertIfNotDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AlertIfNotDefault) | 如果 WPS 不是用于查看和编辑文档的默认程序，则该属性值为 **True** 。 **Boolean** 类型， 可读写。 |
| [AllowAccentedUppercase](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AllowAccentedUppercase) | 如果当一个法语字符改成大写字母时重音仍保留，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AllowClickAndTypeMouse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AllowClickAndTypeMouse) | 如果启用“即点即输”功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AllowCombinedAuxiliaryForms](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AllowCombinedAuxiliaryForms) | 如果 WPS 在朝鲜语文档中执行拼写检查时将忽略辅助动词形式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AllowCompoundNounProcessing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AllowCompoundNounProcessing) | 如果 WPS 在朝鲜语文档中执行拼写检查时将忽略复合名词，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AllowDragAndDrop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AllowDragAndDrop) | 如果可以使用拖动来移动或复制所选内容，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AllowOpenInDraftView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AllowOpenInDraftView) | 返回或设置 **Boolean** 值，该值表示是否允许用户在草稿视图中打开文档。可读/写。 |
| [AllowPixelUnits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AllowPixelUnits) | 如果 WPS 用像素作为默认度量单位（这是 HTML 功能所支持的度量单位），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AllowReadingMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AllowReadingMode) | 如果为 **True** ，则表明 WPS 将文档在“阅读版式”视图中打开。 **Boolean** 类型，可读写。 |
| [AlwaysUseClearType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AlwaysUseClearType) | 返回或设置 **Boolean** 值，该值表示是否使用 ClearType 来显示菜单、功能区和对话框文本中的字体。可读/写。 |
| [AnimateScreenMovements](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AnimateScreenMovements) | 如果 WPS 激活动态鼠标功能、使用动态光标，并且激活后台保存与查找和替换操作之类的动态操作效果，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [ApplyFarEastFontsToAscii](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ApplyFarEastFontsToAscii) | 如果 WPS 将中文字体应用于西文文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ArabicMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ArabicMode) | 返回或设置阿拉伯语的拼写检查模式。 **[WdAraSpeller](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdAraSpeller)** 类型，可读写。 |
| [ArabicNumeral](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ArabicNumeral) | 返回或设置一篇阿拉伯语文档的数字样式。 **WdArabicNumeral** 类型，可读写。 |
| [AutoCreateNewDrawings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoCreateNewDrawings) | 如果为 **True** ，则 WPS 在绘图画布上画出新创建的图形。 **Boolean** 类型，可读写。 |
| [AutoFormatApplyBulletedLists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatApplyBulletedLists) | 如果当 WPS 自动设置文档或区域格式时，会用 **“开始”** 菜单的 **“项目符号和编号”** 对话框中的项目符号替换列表段落的开始字符（例如星号、连字符和大于号符号），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatApplyFirstIndents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatApplyFirstIndents) | 如果为 **True** ，则 WPS 在自动设置文档或区域的格式时，用首行缩进替换在段落开始处输入的空格。 **Boolean** 类型，可读写。 |
| [AutoFormatApplyHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatApplyHeadings) | 如果当 WPS 自动设置文档或区域格式时，将自动为标题设置样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatApplyLists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatApplyLists) | 如果当 WPS 自动设置文档或区域格式时，自动为列表应用样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatApplyOtherParas](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatApplyOtherParas) | 如果当 WPS 自动设置文档或区域格式时，自动为非标题项或列表项的段落设置样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeApplyBorders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeApplyBorders) | 如果按下 Enter 后，三个或更多的连字符（-）、等号（=）或下划线（\_）将自动替换成指定的边框线，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeApplyBulletedLists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeApplyBulletedLists) | 如果在键入时用 **“开始”** 菜单的 **“项目符号和编号”** 对话框中的项目符号替换当前的项目符号（例如星号、连字符和大于号），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeApplyClosings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeApplyClosings) | 如果为 **True** ，则 WPS 会在键入时自动为信函的结束语应用“结束语”样式。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeApplyDates](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeApplyDates) | 如果为 **True** ，则 WPS 自动为键入的日期应用“日期”样式。可读写。 |
| [AutoFormatAsYouTypeApplyFirstIndents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeApplyFirstIndents) | 如果为 **True** ，则 WPS 在键入时自动用首行缩进替代段落开始处输入的空格。可读写。 |
| [AutoFormatAsYouTypeApplyHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeApplyHeadings) | 如果在键入标题时，自动为标题设置样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeApplyNumberedLists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeApplyNumberedLists) | 如果根据键入的内容，以 **“开始”** 菜单的 **“项目符号和编号”** 对话框中的编号方案将段落自动设置为编号列表，则该属性值为 **True** 。例如，如果一个段落以“1.1”和一个制表符开始，则当按下 Enter 后 WPS 将自动插入“1.2”和一个制表符。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeApplyTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeApplyTables) | 如果为 **True** ，则当您键入一个加号、一串连字符、另一个加号等，然后按下 Enter 后， WPS 将自动创建一张表格。加号变为列边框，连字符变为列宽度。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeAutoLetterWizard](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeAutoLetterWizard) | 如果为 **True** ，则在用户输入信函称呼或结束语时，WPS 会自动启动“英文信函向导”。可读写。 |
| [AutoFormatAsYouTypeDefineStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeDefineStyles) | 如果 WPS 自动根据手动设置的格式新建一种样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeDeleteAutoSpaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeDeleteAutoSpaces) | 如果为 **True** ，则 WPS 会在用户键入时自动删除日文和拉丁文文字之间插入的空格。可读写。 |
| [AutoFormatAsYouTypeFormatListItemBeginning](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeFormatListItemBeginning) | 如果 WPS 将列表项开始处的字符格式重复应用于下一个列表项，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeInsertClosings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeInsertClosings) | 如果为 **True** ，则当用户输入备忘录标题时，WPS 会自动插入相应的备忘录结束语。可读写。 |
| [AutoFormatAsYouTypeInsertOvers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeInsertOvers) | 如果为 **True** ，则当用户输入“记”或“案”时，WPS 将自动插入“以上”。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeMatchParentheses](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeMatchParentheses) | 如果为 **True** ，WPS 会自动更正不正确成对的括号，可读写。 |
| [AutoFormatAsYouTypeReplaceFarEastDashes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeReplaceFarEastDashes) | 如果为 **True** ，WPS 会自动更正长元音和划线，可读写。 |
| [AutoFormatAsYouTypeReplaceFractions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeReplaceFractions) | 如果在您键入时，将使用当前字符集的分数替换键入的分数，则该属性值为 **True** 。例如，将“1/2”替换为“½”。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeReplaceHyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeReplaceHyperlinks) | 如果本属性值为 **True** ，则 WPS 会在键入时自动将电子邮件地址、服务器和共享名称（即 UNC 路径）和 Internet 地址（即 URL）改为超链接。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeReplaceOrdinals](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeReplaceOrdinals) | 如果为 **True** ，则键入时，WPS 会用相同字母的上标格式替换序数后缀“st”、“nd”、“rd”和“th”。例如，“1st”被替换为“1”后接上标“st”。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeReplacePlainTextEmphasis](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeReplacePlainTextEmphasis) | 如果键入时，手动强调的字符将自动替换为相应字符格式，则该属性值为 **True** 。例如，将“*bold*”改为“ **bold** ”、将“*underline*”改为“underline”。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeReplaceQuotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeReplaceQuotes) | 如果键入时自动将所键入的直引号替换为弯引号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatAsYouTypeReplaceSymbols](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatAsYouTypeReplaceSymbols) | 如果键入的两个连续的连字符（--）将替换为短划线（–）或长划线（—），则该属性值为 **True** 。 **Boolean** 类型，可读写。如果键入连字符时带有前导和尾部空格，则 WPS 将连字符替换为短划线。如果没有尾部空格，则连字符替换为长划线。 |
| [AutoFormatDeleteAutoSpaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatDeleteAutoSpaces) | 如果 WPS 在自动设置文档或区域的格式时，删除日文和西文文字之间插入的空格，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatMatchParentheses](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatMatchParentheses) | 如果 WPS 在自动设置文档或区域的格式时，会更正不恰当匹配的括号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatPlainTextWordMail](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatPlainTextWordMail) | 如果在 WPS 中打开纯文本格式的电子邮件时，WPS 将自动进行格式设置，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatPreserveStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatPreserveStyles) | 如果当 WPS 自动设置文档或区域格式时，保留先前所用的样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatReplaceFarEastDashes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatReplaceFarEastDashes) | 如果 WPS 在自动设置文档或区域的格式时，会更正长元音和划线的使用，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatReplaceFractions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatReplaceFractions) | 如果当 WPS 自动设置文档或区域格式时，会用当前字符集中的分数替换所键入的分数，则该属性值为 **True** 。例如，将“1/2”替换为“½”。 **Boolean** 类型，可读写。 |
| [AutoFormatReplaceHyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatReplaceHyperlinks) | 如果为 **True** ，则 WPS 在对某一文档或范围自动套用格式时，将对其中的电子邮件地址、服务器和共享名称（即 UNC 路径）和 Internet 地址（即 URL）自动进行格式设置。 **Boolean** 类型，可读写。 |
| [AutoFormatReplaceOrdinals](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatReplaceOrdinals) | 如果为 **True** ，则当 WPS 自动设置文档或区域格式时，用相同字母的上标格式替换序数后缀“st”、“nd”、“rd”和“th”。例如，将“1st”替换为“1”后接上标“st”。 **Boolean** 类型，可读写。 |
| [AutoFormatReplacePlainTextEmphasis](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatReplacePlainTextEmphasis) | 如果当 WPS 自动设置文档或区域的格式时，将手动强调的字符替换为相应的字符格式（例如，“*bold*”更改为“bold”，“*underline*”更改为“underline”），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatReplaceQuotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatReplaceQuotes) | 如果当 WPS 自动设置文档或区域格式时，直引号会自动更改为弯引号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoFormatReplaceSymbols](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoFormatReplaceSymbols) | 如果当 WPS 自动设置文档或区域的格式时，将两个连续的连字符（--）替换为短划线（–）或长划线（—），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AutoKeyboardSwitching](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoKeyboardSwitching) | 如果 WPS 随时自动切换键盘语言并与键入的内容匹配，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [AutoWordSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/AutoWordSelection) | 如果在拖动时，一次选定一个单词，而不是选定一个字符，则该属性为 **True** 。 **Boolean** 类型，可读写。 |
| [BackgroundOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/BackgroundOpen) | 如果为 **True** ，WPS 在后台打开 Web 文档。 **Boolean** 类型，可读写。 |
| [BackgroundSave](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/BackgroundSave) | 如果为 **True** ，则 WPS 在后台保存文档。当 WPS 在后台保存文档时，用户可以继续键入内容或执行命令。 **Boolean** 类型，可读写。 |
| [BrazilReform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/BrazilReform) | 返回或设置巴西葡萄牙语拼写检查器的模式。 **[WdPortugueseReform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPortugueseReform)** 可读/写。 |
| [ButtonFieldClicks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ButtonFieldClicks) | 返回或设置一个数字，该数字是运行 GOTOBUTTON 或 MACROBUTTON 域所需的点击次数（单击或双击）。 **Long** 类型，可读写。 |
| [CheckGrammarAsYouType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CheckGrammarAsYouType) | 如果 WPS 在键入时自动对文档进行语法检查并自动标记错误，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CheckGrammarWithSpelling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CheckGrammarWithSpelling) | 如果 WPS 在检查拼写的同时也检查语法，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CheckHangulEndings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CheckHangulEndings) | 如果 WPS 自动检测朝鲜文字结尾，并在将朝鲜文字转换为朝鲜文汉字过程中忽略朝鲜文字结尾，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CheckSpellingAsYouType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CheckSpellingAsYouType) | 如果 WPS 在您键入的同时自动进行拼写检查并标记错误，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CommentsColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CommentsColor) | 该属性返回或设置一个 **WdColorIndex** 常量，代表文档中批注的颜色。可读写。 |
| [ConfirmConversions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ConfirmConversions) | 如果 WPS 在打开或者插入一个非 WPS 文档或模板的文件之前，会显示一个 **“转换文件”** 对话框，则该属性值为 **True** 。在 **“转换文件”** 对话框中，用户可以选择需要转换的文件格式。 **Boolean** 类型，可读写。 |
| [ContextualSpeller](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ContextualSpeller) | 返回或设置 **Boolean** 值，该值表示是否使用上下文拼写检查器，基于单词上下文和它前后的单词来检查拼写。可读/写。 |
| [ConvertHighAnsiToFarEast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ConvertHighAnsiToFarEast) | 如果在打开文档时，WPS 将与东亚字体相关的文字转换为相应的字体，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CreateBackup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CreateBackup) | 如果 WPS 在每次保存文档时都建立一个备份，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [CtrlClickHyperlinkToOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CtrlClickHyperlinkToOpen) | 如果 WPS 需要单击同时按住 Ctrl 键来打开超链接，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CursorMovement](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CursorMovement) | 返回或设置在双向文字中插入点移动的方式。 **WdCursorMovement** 类型，可读写。 |
| [DefaultBorderColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultBorderColor) | 返回或设置用于新的 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/obj)** 对象的默认 24 位颜色。可读写。 |
| [DefaultBorderColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultBorderColorIndex) | 返回或设置边框的默认线条颜色。 **WdColorIndex** 类型，可读写。 |
| [DefaultBorderLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultBorderLineStyle) | 返回或设置默认边框的样式。 **WdLineStyle** 类型，可读写。 |
| [DefaultBorderLineWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultBorderLineWidth) | 返回或设置边框的默认线条宽度。 **WdLineWidth** 类型，可读写。 |
| [DefaultHighlightColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultHighlightColorIndex) | 返回或设置突出显示文本所用的颜色，用 **“开始”** 工具栏的 **“突出显示”** 按钮可将文本格式设为突出显示。 **WdColorIndex** 类型，可读写。 |
| [DefaultOpenFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultOpenFormat) | 返回或设置打开文档的默认转换器。可为由 **OpenFormat** 属性返回的一个数字，也可为 **WdOpenFormat** 常量之一。 |
| [DefaultTextEncoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultTextEncoding) | 返回或设置一个 **MsoEncoding** 常量，该常量代表 WPS 用于所有保存为编码文本文件的文档的代码页或字符集。可读写。 |
| [DefaultTray](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultTray) | 返回或设置默认纸盒，以便打印机使用该纸盒打印文档。 **String** 类型，可读写。 |
| [DefaultTrayID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultTrayID) | 返回或设置用于打印文档的默认纸盒。 **WdPaperTray** 类型，可读写。 |
| [DeletedCellColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DeletedCellColor) | 返回或设置一个 **WdCellColor** 常量，该常量代表删除的单元格的颜色。可读写。 |
| [DeletedTextColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DeletedTextColor) | 当激活修订选项时，返回或设置要删除的文字的颜色。 **WdColorIndex** 类型，可读写。 |
| [DeletedTextMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DeletedTextMark) | 当激活修订选项时，返回或设置要删除的文字的格式。 **WdDeletedTextMark** 类型，可读写。 |
| [DiacriticColorVal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DiacriticColorVal) | 返回或设置用于从右向左语言文档中的音调符号的 24 位颜色。可读写。 |
| [DisableFeaturesIntroducedAfterbyDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisableFeaturesIntroducedAfterbyDefault) | 对所有文档禁用指定版本后引入的所有功能。 **WdDisableFeaturesIntroducedAfter** 类型，可读写。 |
| [DisableFeaturesbyDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisableFeaturesbyDefault) | 如果为 **True** ，则 WPS 将在所有文档中禁用 **[DisableFeaturesIntroducedAfterbyDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisableFeaturesIntroducedAfterbyDefault)** 中指定的 WPS 版本之后引入的所有功能。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [DisplayAlignmentGuides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisplayAlignmentGuides) | 返回或设置一个 **Boolean** 值，该值指定是否在用户界面中启用对齐参考线。可读写。 |
| [DisplayGridLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisplayGridLines) | 如果 WPS 显示文档网格，则该属性值为 **True** 。该属性相当于 **“视图”** 选项卡中的 **“网格线”** 复选框。 **Boolean** 类型，可读写。 |
| [DisplayPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisplayPasteOptions) | 如果为 **True** ，则 WPS 直接在新粘贴的文本下显示 **“粘贴选项”** 按钮。 **Boolean** 类型，可读写。 |
| [DisplaySmartTagButtons](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisplaySmartTagButtons) | 如果为 **True** ，则 WPS 在鼠标指针置于智能标记上方时显示一个按钮。 **Boolean** 类型，可读写。 |
| [DoNotPromptForConvert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DoNotPromptForConvert) | 设置或返回一个 **Boolean** 值，它代表在为处于兼容模式下的文档调用“转换”命令时是否出现一个警告对话框。可读写。 |
| [DocumentViewDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DocumentViewDirection) | 返回或设置整篇文档的对齐方式和阅读顺序。 **WdDocumentViewDirection** 类型，可读写。 |
| [EnableHangulHanjaRecentOrdering](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/EnableHangulHanjaRecentOrdering) | 如果 WPS 在进行朝鲜文字和朝鲜文汉字间的转换时，在建议列表的顶端显示最近用过的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableLegacyIMEMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/EnableLegacyIMEMode) | 返回或设置一个 **Boolean** 类型的值，该值代表是否启用旧式 IME 模式。可读写。 |
| [EnableLiveDrag](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/EnableLiveDrag) | 返回或设置一个 **Boolean** 值，如果启用实时拖动，则为 **True** 。可读写。 |
| [EnableLivePreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/EnableLivePreview) | 设置或返回 **Boolean** 值，该值表示显示还是隐藏在使用支持预览的库时所出现的库预览。如果为 **True** ，将在应用命令之前在文档中显示预览。可读/写。 |
| [EnableMisusedWordsDictionary](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/EnableMisusedWordsDictionary) | 如果 WPS 在检查文档的拼写和语法时，也检查误用的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableProofingToolsAdvertisement](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/EnableProofingToolsAdvertisement) | 返回或设置一个 **Boolean** 值，如果为 **True** ，则指定在有其他校对工具可供下载时通知用户。可读写。 |
| [EnableSound](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/EnableSound) | 如果 WPS 在导致出错时使计算机发出声音进行响应，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnvelopeFeederInstalled](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/EnvelopeFeederInstalled) | 如果当前的打印机为信封指定了送纸器，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [ExpandHeadingsOnOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ExpandHeadingsOnOpen) | 如果为 **True** ，则当文档打开时展开文档中的所有标题。 **Boolean** 类型，可读写。 |
| [FormatScanning](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/FormatScanning) | 如果为 **True** ，则 WPS 对文档中的所有格式进行跟踪。 **Boolean** 类型，可读写。 |
| [FrenchReform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/FrenchReform) | 返回或设置一个 **[WdFrenchSpeller](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFrenchSpeller)** 常量，该常量代表要对语言格式设置为法语的文本区域使用哪个拼写词典。可读写。 |
| [GridDistanceHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/GridDistanceHorizontal) | 当在新文档中绘制、移动和调整自选图形或东亚语言字符时，返回或设置 WPS 使用的不可见网格线的水平间距。 **Single** 类型，可读写。 |
| [GridDistanceVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/GridDistanceVertical) | 在新文档中绘制、移动和调整自选图形或东亚语言字符时，返回或设置 WPS 所用的不可见网格线间的垂直间距。 **Single** 类型，可读写。 |
| [GridOriginHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/GridOriginHorizontal) | 返回或设置不可见网格相对于页面左边的起点位置，当在新文档中绘制、移动和调整自选图形或东亚语言字符时将使用该网格。 **Single** 类型，可读写。 |
| [GridOriginVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/GridOriginVertical) | 返回或设置不可见网格相对于页面顶边的起点位置，当在新文档中绘制、移动和调整自选图形或东亚语言字符时将使用该网格。 **Single** 类型，可读写。 |
| [HangulHanjaFastConversion](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/HangulHanjaFastConversion) | 如果 WPS 在朝鲜文字和朝鲜文汉字间进行转换时，自动转换具有单独建议的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HebrewMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/HebrewMode) | 返回或设置希伯来语拼写检查工具的模式。 **WdHebSpellStart** 类型，可读写。 |
| [IMEAutomaticControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/IMEAutomaticControl) | 如果设置 WPS 自动打开和关闭日文输入法编辑器（IME），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [INSKeyForOvertype](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/INSKeyForOvertype) | 如果可以用 INS 键来打开和关闭“改写”，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [INSKeyForPaste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/INSKeyForPaste) | 如果可用 INS 键来粘贴“剪贴板”的内容，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IgnoreInternetAndFileAddresses](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/IgnoreInternetAndFileAddresses) | 如果为 **True** ，则进行拼写检查时忽略文件扩展名、MS-DOS 路径、电子邮件地址、服务器名称、共享名（也称为 UNC 路径）和 Internet 地址（也称为 URL）。 **Boolean** 类型，可读写。 |
| [IgnoreMixedDigits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/IgnoreMixedDigits) | 如果进行拼写检查时忽略包含数字的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IgnoreUppercase](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/IgnoreUppercase) | 如果进行拼写检查时忽略全部大写的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [InlineConversion](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/InlineConversion) | 如果 WPS 将中文输入法（IME）中的未确认字符串显示为已有（已确认的）字符串之间的插入项，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [InsertedCellColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/InsertedCellColor) | 返回或设置一个 **WdCellColor** 常量，该常量代表插入的表格单元格的颜色。可读写。 |
| [InsertedTextColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/InsertedTextColor) | 当启用修订选项时，返回或设置插入文字的颜色。 **WdColorIndex** 类型，可读写。 |
| [InsertedTextMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/InsertedTextMark) | 返回或设置启用修订时 WPS 设置插入文本格式的方式（ **TrackRevisions** 属性为 **True** ）。 **WdInsertedTextMark** 类型，可读写。 |
| [InterpretHighAnsi](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/InterpretHighAnsi) | 返回或设置高端 ANSI 字符译码方式。 **WdHighAnsiText** 类型，可读写。 |
| [LabelSmartTags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/LabelSmartTags) | 如果为 **True** ，WPS 使用智能标记信息标记文档中的文本。 **Boolean** 类型，可读写。 |
| [LocalNetworkFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/LocalNetworkFile) | 如果在编辑保存在网络服务器上的文件时，WPS 在用户的计算机上创建文件的一个本地副本，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MapPaperSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MapPaperSize) | 如果为 **True** ，则自动调整采用其他国家/地区标准纸张大小（例如 A4）的文档格式，以便按照用户所在国家/地区的标准纸张大小（例如，信纸）正确打印该文档。 **Boolean** 类型，可读写。 |
| [MarginAlignmentGuides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MarginAlignmentGuides) | 返回或设置一个 **Boolean** 值，该值指定是否在用户界面中显示边距对齐参考线。可读/写。 |
| [MatchFuzzyAY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyAY) | 如果在搜索过程中 WPS 将忽略 イ 行和 エ 行字符后“ア”和“ヤ”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyBV](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyBV) | 如果 WPS 将在搜索过程中忽略“バ”与“ヴ ア”之间以及“ハ”与“フ ア”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyByte](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyByte) | 如果在搜索过程中 WPS 将忽略全角和半角字符（西文或日文）的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyCase](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyCase) | 如果 WPS 在搜索过程中不区分字母大小写，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyDZ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyDZ) | 如果 WPS 将在搜索过程中忽略“ヂ”与“ジ”之间以及“ヅ”与“ズ”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyDash](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyDash) | 如果 WPS 在搜索过程中忽略减号、划线以及长元音符号之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyHF](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyHF) | 如果 WPS 将在搜索过程中忽略“ヒ ユ”与“フ ユ”之间以及“ビ ユ”与“ヴ ユ”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyHiragana](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyHiragana) | 如果 WPS 在搜索过程中将忽略平假名与片假名之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyIterationMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyIterationMark) | 如果 WPS 在搜索过程中将忽略重复的标记类型间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyKanji](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyKanji) | 如果 WPS 在搜索过程中忽略标准和非标准日文汉字的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyKiKu](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyKiKu) | 如果在搜索过程中 WPS 将忽略 サ 行字符前“キ”和“ク”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyOldKana](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyOldKana) | 如果 WPS 在搜索过程中将忽略新旧假名字符之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyProlongedSoundMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyProlongedSoundMark) | 如果在搜索过程中 WPS 将忽略短元音和长元音的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyPunctuation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyPunctuation) | 如果在搜索过程中 WPS 忽略标点类型的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzySmallKana](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzySmallKana) | 如果 WPS 在搜索过程中忽略双元音和双辅音的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzySpace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzySpace) | 如果 WPS 在搜索过程中忽略空格标记的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyTC](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyTC) | 如果在搜索过程中 WPS 将忽略“ツ イ”、“テ イ”与“チ”之间以及“デ イ”与“ジ”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzyZJ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MatchFuzzyZJ) | 如果 WPS 将在搜索过程中忽略“セ”与“シ エ”之间以及“ゼ”与“ジ エ”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MeasurementUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MeasurementUnit) | 设置或者返回 WPS 的标准度量单位。 **WdMeasurementUnits** 类型，可读写。 |
| [MergedCellColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MergedCellColor) | 返回或设置一个 **WdCellColor** 常量，该常量代表合并的表格单元格的颜色。可读写。 |
| [MonthNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MonthNames) | 返回或设置显示月份名称的格式。 **WdMonthNames** 类型，可读写。 |
| [MoveFromTextColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MoveFromTextColor) | 返回或设置一个 **[WdColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdColorIndex)** 常量，该常量代表所移动文本的颜色。可读写。 |
| [MoveFromTextMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MoveFromTextMark) | 返回或设置一个 **[WdMoveFromTextMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdMoveFromTextMark)** 常量，该常量代表要用于所移动文本的修订标记的类型。可读写。 |
| [MoveToTextColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MoveToTextColor) | 返回或设置一个 **[WdColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdColorIndex)** 常量，该常量代表所移动文本的颜色。可读写。 |
| [MoveToTextMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MoveToTextMark) | 返回或设置一个 **[WdMoveToTextMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdMoveToTextMark)** 常量，该常量代表要用于所移动文本的修订标记的类型。可读写。 |
| [MultipleWordConversionsMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/MultipleWordConversionsMode) | 返回或设置朝鲜文字和朝鲜文汉字之间的转换方向。 **WdMultipleWordConversionsMode** 类型，可读写。 |
| [OMathAutoBuildUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/OMathAutoBuildUp) | 返回或设置一个 **Boolean** 类型的值，该值代表 WPS 是否自动将公式转换为专业格式。如果为 **True** ，则表示 WPS 自动将公式转换为专业格式。可读写。 |
| [OMathCopyLF](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/OMathCopyLF) | 返回或设置一个 **Boolean** 类型的值，该值代表如何以纯文本的形式表示公式。如果为 **True** ，则表示以线性格式表示公式。如果为 **False** ，则表示以 MathML 格式表示公式。可读写。 |
| [OptimizeForWord97byDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/OptimizeForWord97byDefault) | 如果 WPS 将禁用所有不兼容的格式，以便优化在 WPS 97 中查看新文档，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Overtype](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/Overtype) | 如果激活改写模式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PageAlignmentGuides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PageAlignmentGuides) | 返回或设置一个 **Boolean** 值，该值指定是否在用户界面中显示页面对齐参考线。可读/写。 |
| [Pagination](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/Pagination) | 如果 WPS 在后台重新为文档分页，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ParagraphAlignmentGuides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ParagraphAlignmentGuides) | 返回或设置一个 **Boolean** 值，该值指定是否在用户界面中显示段落对齐参考线。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Options** 对象的父对象。 |
| [PasteAdjustParagraphSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteAdjustParagraphSpacing) | 如果在剪切和粘贴选定内容时，WPS 自动调整段落间距，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PasteAdjustTableFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteAdjustTableFormatting) | 如果在剪切和粘贴选定内容时，WPS 自动调整表格的格式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PasteAdjustWordSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteAdjustWordSpacing) | 如果在剪切和粘贴选定内容时，WPS 自动调整字符间距，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PasteFormatBetweenDocuments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteFormatBetweenDocuments) | 返回或设置一个 **[WdPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPasteOptions)** 常量，该常量代表在从另一个 WPS 文档复制文本时粘贴文本的方式。可读写。 |
| [PasteFormatBetweenStyledDocuments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteFormatBetweenStyledDocuments) | 返回或设置一个 **[WdPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPasteOptions)** 常量，该常量代表在从使用样式的文档中复制文本时粘贴文本的方式。可读写。 |
| [PasteFormatFromExternalSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteFormatFromExternalSource) | 返回或设置一个 **[WdPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPasteOptions)** 常量，该常量代表在从外部源（如网页）复制文本时粘贴文本的方式。可读写。 |
| [PasteFormatWithinDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteFormatWithinDocument) | 返回或设置一个 **[WdPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPasteOptions)** 常量，该常量代表在同一文档内复制或剪切文本然后进行粘贴时的文本粘贴方式。可读写。 |
| [PasteMergeFromPPT](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteMergeFromPPT) | 如果为 **True** ，则从 WPP 粘贴文本时合并文本格式。 **Boolean** 类型，可读写。 |
| [PasteMergeFromXL](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteMergeFromXL) | 如果为 **True** ，则从 ET 粘贴表格时合并表格的格式。 **Boolean** 类型，可读写。 |
| [PasteMergeLists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteMergeLists) | 如果为 **True** ，则合并粘贴列表和周围列表的格式。 **Boolean** 类型，可读写。 |
| [PasteOptionKeepBulletsAndNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteOptionKeepBulletsAndNumbers) | 返回或设置 **Boolean** 值，该值表示在从 **“粘贴选项”** 上下文菜单中选择 **“仅保留文本”** 时是否保留项目符号和编号。可读/写。 |
| [PasteSmartCutPaste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteSmartCutPaste) | 如果 WPS 在文档中智能粘贴选定内容，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PasteSmartStyleBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PasteSmartStyleBehavior) | 从其他文档粘贴选定文本时，如果 WPS 智能合并样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PictureEditor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PictureEditor) | 返回或设置用于编辑图片的应用程序的名称。 **String** 类型，可读写。 |
| [PictureWrapType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PictureWrapType) | 设置或返回一个 **WdWrapTypeMerged** 类型的值，该值表示 WPS 在图片周围环绕文字的方式。可读写。 |
| [PortugalReform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PortugalReform) | 返回或设置欧洲葡萄牙语拼写器的模式。可读/写 **[WdPortugueseReform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPortugueseReform)** 。 |
| [PrecisePositioning](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrecisePositioning) | 返回或设置一个 **Boolean** 类型的值，该值表示 WPS 是否针对打印版式而不是针对屏幕可读性优化字符位置。如果该属性的值为 **True** ，则禁用压缩字符间距以便增强屏幕可读性的默认设置，并启用适用于打印介质的字符间距。可读/写。 |
| [PreferCloudSaveLocations](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PreferCloudSaveLocations) | 如果为 **True** ，则默认将新文档保存在 Web 位置。 **Boolean** 类型，可读写。 |
| [PrintBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintBackground) | 如果 WPS 在后台打印，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintBackgrounds](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintBackgrounds) | 返回一个 **Boolean** 类型的值，该值代表打印文档时，是否打印背景颜色和图像。 |
| [PrintComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintComments) | 如果 WPS 在文档后另起一页打印批注，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintDraft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintDraft) | 如果 WPS 以最简单的格式打印文档，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintDrawingObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintDrawingObjects) | 如果 WPS 打印图形对象，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintEvenPagesInAscendingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintEvenPagesInAscendingOrder) | 如果 WPS 在手动双面打印模式下按升序打印偶数页，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintFieldCodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintFieldCodes) | 如果 WPS 打印域代码而不打印域的结果，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintHiddenText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintHiddenText) | 如果打印隐藏文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintOddPagesInAscendingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintOddPagesInAscendingOrder) | 如果 WPS 在手动双面打印模式下按升序打印奇数页，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintProperties) | 如果 WPS 在文档结尾处另起一页打印文档摘要信息，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintReverse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintReverse) | 如果 WPS 逆页序打印页面，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrintXMLTag](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintXMLTag) | 返回一个 **Boolean** 类型的值，该值代表打印文档时是否打印 XML 标记。 |
| [PromptUpdateStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PromptUpdateStyle) | 如果为 **True** ，则在改变样式的格式时显示一条消息，请用户确认是否要重新设置样式的格式或重新应用原样式格式。 **Boolean** 类型，可读写。 |
| [RTFInClipboard](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/RTFInClipboard) | 您请求了仅用于 Macintosh 上的 Visual Basic 关键字的帮助。有关 **Options** 对象的 **RTFInClipboard** 属性的信息，请参阅 WPS OfficeMacintosh Edition 中附带的语言参考帮助。 |
| [RepeatWord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/RepeatWord) | 返回或设置 **Boolean** 值，该值表示在检查拼写时是否标记重复的单词。如果为 **True** ，将标记重复的单词。可读/写。 |
| [ReplaceSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ReplaceSelection) | 如果键入或粘贴的内容替换选定内容，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [RevisedLinesColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/RevisedLinesColor) | 当激活修订选项时，返回或设置文档中修订线的颜色。 **WdColorIndex** 类型，可读/写。 |
| [RevisedLinesMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/RevisedLinesMark) | 当激活修订选项时，返回或设置修订线在文档中的位置。 **WdRevisedLinesMark** 类型，可读/写。 |
| [RevisedPropertiesColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/RevisedPropertiesColor) | 在启用修订功能时，返回或设置用于标记格式更改情况的颜色。 **WdColorIndex** 类型，可读写。 |
| [RevisedPropertiesMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/RevisedPropertiesMark) | 在启用修订功能时，返回或设置用于显示格式修改情况的标记。 **WdRevisedPropertiesMark** 类型，可读/写。 |
| [RevisionsBalloonPrintOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/RevisionsBalloonPrintOrientation) | 返回或设置一个 **WdRevisionsBalloonPrintOrientation** 常量，该常量表示打印时修订和批注气球的方向。可读写。 |
| [SaveInterval](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SaveInterval) | 返回或设置保存“自动恢复”信息的时间间隔（以分钟为单位）。 **Long** 类型，可读写。 |
| [SaveNormalPrompt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SaveNormalPrompt) | 如果 WPS 在关闭之前提示用户确认是否保存对 Normal 模板所做的更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SavePropertiesPrompt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SavePropertiesPrompt) | 如果 WPS 在保存新的文档时，提示该文档的属性信息，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SendMailAttach](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SendMailAttach) | 如果使用 **“文件”** 菜单上的 **“发送”** 命令将活动文档作为附件插入邮件中，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SequenceCheck](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SequenceCheck) | 如果为 **True** ，则检查南亚文本独立字符的顺序。 **Boolean** 类型，可读写。 |
| [ShortMenuNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShortMenuNames) | 您请求了仅用于 Macintosh 上的 Visual Basic 关键字的帮助。有关 **Options** 对象的 **ShortMenuNames** 属性的信息，请参阅 WPS OfficeMacintosh Edition 中附带的语言参考帮助。 |
| [ShowControlCharacters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShowControlCharacters) | 如果显示当前文档中的双向控制符，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowDevTools](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShowDevTools) | 返回或设置 **Boolean** 类型的值，该值代表是否在功能区中显示 **“开发工具”** 选项卡。可读/写。 |
| [ShowDiacritics](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShowDiacritics) | 如果在使用从右向左语言的文档中显示音调符号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowFormatError](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShowFormatError) | 如果为 **True** ，WPS 通过在文本（该文本的格式与文档中使用频繁的其他格式相似）下加弯曲下划线来标记不一致的格式。 **Boolean** 类型，可读写。 |
| [ShowMarkupOpenSave](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShowMarkupOpenSave) | 返回或设置一个 **Boolean** 类型的值，该值代表打开或保存文件时 WPS 是否显示隐藏标记。 |
| [ShowMenuFloaties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShowMenuFloaties) | 返回或设置 **Boolean** 值，该值表示当用户在文档窗口中右键单击时是否显示浮动工具栏。可读/写。 |
| [ShowReadabilityStatistics](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShowReadabilityStatistics) | 如果 WPS 在结束语法检查时，显示统计信息的摘要列表（包括可读性程度），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowSelectionFloaties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ShowSelectionFloaties) | 返回或设置 **Boolean** 值，该值表示当用户选择文本时是否显示浮动工具栏。可读/写。 |
| [SkyDriveSignInOption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SkyDriveSignInOption) | 如果为 **True** ，则为用户提供登录云存储和其他云位置的选项。 **Boolean** 类型，可读写。 |
| [SmartCursoring](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SmartCursoring) | 返回或设置一个 **Boolean** 类型的值，该值表示是否启用智能指针。如果值为 **True** ，则启用智能指针。 |
| [SmartCutPaste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SmartCutPaste) | 如果在剪切和粘贴时，WPS 自动调整字词和标点符号之间的间距，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SmartParaSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SmartParaSelection) | 如果为 **True** ，则在选择段落中大多数或全部内容时，WPS 会在选定内容中包含段落标记。 **Boolean** 类型，可读写。 |
| [SnapToGrid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SnapToGrid) | 如果自选图形或东亚字符在绘制、移动或调整大小时自动与不可见网格对齐，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [SnapToShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SnapToShapes) | 如果 WPS 自动将自选图形或中文字符与不可见的网格线对齐，这些网格线穿过其他自选图形或中文字符的垂直和水平边缘，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [SpanishMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SpanishMode) | 返回或设置西班牙语拼写器的模式。可读/写 **[WdSpanishSpeller](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSpanishSpeller)** 。 |
| [SplitCellColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SplitCellColor) | 返回或设置一个 **WdCellColor** 常量，该常量代表拆分的表格单元格的颜色。可读写。 |
| [StoreRSIDOnSave](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/StoreRSIDOnSave) | 如果为 **True** ，则 WPS 在每次保存文档时为文档中的变化指定一个随机数，以便比较与合并文档。 **Boolean** 类型，可读写。 |
| [StrictFinalYaa](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/StrictFinalYaa) | 如果拼写检查使用针对以字母“yaa”结尾的阿拉伯语单词的拼写规则，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [StrictInitialAlefHamza](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/StrictInitialAlefHamza) | 如果拼写检查使用针对以“alef hamza”开头的阿拉伯语单词的拼写规则，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [StrictRussianE](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/StrictRussianE) | 如果拼写检查器使用有关使用严格 ë 字符的俄语单词的拼写规则，则该属性值为 **True** 。可读/写。 |
| [StrictTaaMarboota](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/StrictTaaMarboota) | 如果拼写检查器使用拼写规则来标记以 haa（而不是 taa marboota）结尾的阿拉伯语单词，则该属性值为 **True** 。可读/写。 |
| [SuggestFromMainDictionaryOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SuggestFromMainDictionaryOnly) | 如果 WPS 仅根据主词典提供拼写建议，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SuggestSpellingCorrections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/SuggestSpellingCorrections) | 如果 WPS 在检查拼写时，总是为每一个拼写错误的单词提供可选的拼写建议，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [TabIndentKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/TabIndentKey) | 如果可分别使用 Tab 和 Backspace 键增加和减少段落的左缩进，并且可使用 Backspace 键将右对齐的段落更改为居中的段落而将居中的段落更改为左对齐的段落，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [TypeNReplace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/TypeNReplace) | 如果为 **True** ，则 WPS 将替换非法的南亚字符。 **Boolean** 类型，可读写。 |
| [UpdateFieldsAtPrint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UpdateFieldsAtPrint) | 如果 WPS 在打印文档前自动更新域，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [UpdateFieldsWithTrackedChangesAtPrint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UpdateFieldsWithTrackedChangesAtPrint) | 如果 WPS 允许在打印前更新包含修订的字段，则该属性值为 **True** 。可读/写。 |
| [UpdateLinksAtOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UpdateLinksAtOpen) | 如果 WPS 在打开文档时自动更新嵌入的所有 OLE 链接，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [UpdateLinksAtPrint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UpdateLinksAtPrint) | 如果 WPS 在打印文档前更新指向其他文件的嵌入链接，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [UpdateStyleListBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UpdateStyleListBehavior) | 返回或设置 **[WdUpdateStyleListBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdUpdateStyleListBehavior)** 常量，该常量指定在更新某种样式以与包含编号或项目符号的所选内容相匹配时，WPS 应采取的行为。可读/写。 |
| [UseCharacterUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UseCharacterUnit) | 如果 WPS 在当前文档中使用字符作为默认度量单位，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [UseDiffDiacColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UseDiffDiacColor) | 如果可以设置当前文档中音调符号的颜色，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [UseGermanSpellingReform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UseGermanSpellingReform) | 如果 WPS 在检查拼写时，使用德语后期修订拼写规则，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [UseLocalUserInfo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UseLocalUserInfo) | 返回或设置一个 **Boolean** 类型的值；如果 WPS 根据“选项”对话框“用户信息”选项卡中的“姓名”和“缩写”设置来识别文档作者，则为 **True** ；如果 WPS 根据用户登录 Office 的账户信息来识别作者，则为 **False** 。可读写。 |
| [UseNormalStyleForList](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UseNormalStyleForList) | 返回或设置 **Boolean** 类型的值，该值表示 WPS 是否对项目符号和编号使用“正文”样式。可读写。 |
| [UseSubPixelPositioning](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/UseSubPixelPositioning) | 返回或设置 **Boolean** 类型的值，该值指定是否启用子像素定位。可读/写。 |
| [VisualSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/VisualSelection) | 根据从右向左式语言文档中的可视光标移动，返回或设置选择行为。 **WdVisualSelection** 类型，可读写。 |
| [WarnBeforeSavingPrintingSendingMarkup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/WarnBeforeSavingPrintingSendingMarkup) | 如果为 **True** ，则 WPS 在保存、打印或以电子邮件形式发送包含批注或修订的文档时，显示警告。 **Boolean** 类型，可读写。 |