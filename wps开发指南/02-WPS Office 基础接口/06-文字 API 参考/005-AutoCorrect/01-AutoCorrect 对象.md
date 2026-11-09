# AutoCorrect 对象

代表 WPS 的“自动更正”功能。

## 说明


使用 **[AutoCorrect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/AutoCorrect)** 属性返回 **AutoCorrect** 对象。


## 示例


```JavaScript
/*以下示例启用“自动更正”选项并创建“自动更正”词条。*/
function test() {
    Application.AutoCorrect.CorrectCapsLock = true
    Application.AutoCorrect.CorrectDays = true
    Application.AutoCorrect.Entries.Add("usually", "usually")
}
```


```JavaScript
/*以下示例显示“自动更正”词条总数。*/
function test() {
    alert(Application.AutoCorrect.Entries.Count)
}
```
 **[Entries](#TODO)** 属性返回 **[AutoCorrectEntries](#TODO)** 对象，该对象代表 **“自动更正”** 对话框中的“自动更正”词条。


{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [CorrectCapsLock](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/CorrectCapsLock) | 如果在键入时无意中使用了 Caps Lock（大写锁定）键，WPS 就将自动进行更正，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CorrectDays](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/CorrectDays) | 如果 WPS 自动大写星期日期单词的首字母，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CorrectHangulAndAlphabet](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/CorrectHangulAndAlphabet) | 如果 WPS 自动对朝鲜文字中键入的西文单词应用正确的字体，则该属性值为 **True** ，反之亦然。 **Boolean** 类型，可读写。 |
| [CorrectInitialCaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/CorrectInitialCaps) | 在某个单词的前两个字母均为大写时，如果为 **True** ，则 WPS 自动将第二个字母转换为小写。例如，“WPs”将更正为“Wps”。 **Boolean** 类型，可读写。 |
| [CorrectKeyboardSetting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/CorrectKeyboardSetting) | 如果在键入非当前键盘语言的文字时，WPS 自动将这些单词转置为其母语字母，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CorrectSentenceCaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/CorrectSentenceCaps) | 如果 WPS文字 自动大写每个句子的首字母，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CorrectTableCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/CorrectTableCells) | 如果为 **True** ，则自动将表格单元格内容的首字母大写。 **Boolean** 类型，可读写。 |
| [DisplayAutoCorrectOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/DisplayAutoCorrectOptions) | 如果为 **True** ，则 WPS 显示 **“自动更正选项”** 按钮。 **Boolean** 类型，可读写。 |
| [FirstLetterAutoAdd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/FirstLetterAutoAdd) | 如果 WPS 会自动将缩写词添至“自动更正”的“首字母大写”例外项列表中，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HangulAndAlphabetAutoAdd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/HangulAndAlphabetAutoAdd) | 如果 WPS 会自动将单词添至朝鲜文和字母顺序“自动更正”例外项列表中，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [OtherCorrectionsAutoAdd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/OtherCorrectionsAutoAdd) | 如果 WPS 自动将单词添至 **“‘自动更正’例外项”** 对话框（在 **“工具”** 菜单上，单击 **“自动更正选项”** 命令）中 **“其他更正”** 选项卡上的“自动更正”例外项列表中，则该属性值为 **True** 。如果删除并重新键入一个不希望 WPS 更正的单词，WPS 会将该单词添至该列表。 **Boolean** 类型，可读写。 |
| [ReplaceText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/ReplaceText) | 如果 WPS 使用“自动更正”列表中的词条自动替换指定文本，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ReplaceTextFromSpellingChecker](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/ReplaceTextFromSpellingChecker) | 如果为 **True** ，WPS 将在用户键入时自动用拼写检查的建议替换拼错的文字。WPS 只替换包含一处误拼的单词，并且拼写词典也只列出一个替换选项。 **Boolean** 类型，可读写。 |
| [TwoInitialCapsAutoAdd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/member/TwoInitialCapsAutoAdd) | 如果为 **True** ，则 WPS 将单词自动添至“‘自动更正’前两个字母连续大写”例外项列表。如果将 WPS 自动更改为小写字母的（跟随大写首字母的）大写字母删除并重新键入，则会将一个单词添至该列表中。 **Boolean** 类型，可读写。 |