# Worksheet.CheckSpelling

检查对象的拼写。



## 语法

express.**CheckSpelling(CustomDictionary, IgnoreUppercase, AlwaysSuggest, SpellLang)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| CustomDictionary | 可选 | any | 一个字符串，它表示自定义词典的文件名，如果在主词典中找不到单词，则会到此词典中查找。如果省略此参数，则使用当前指定的词典。 |
| IgnoreUppercase | 可选 | any | 如果为 **True** ，则 ET 忽略所有字母都是大写的单词。如果为 **False** ，则 ET 检查所有字母都是大写的单词。如果省略此参数，将使用当前的设置。 |
| AlwaysSuggest | 可选 | any | 如果为 **True** ，则 ET 在找到不正确拼写时显示建议的替换拼写列表。如果为 **False** ，ET 将等待输入正确的拼写。如果省略此参数，将使用当前的设置。 |
| SpellLang | 可选 | any | 当前所用词典的语言。它可以是由 **LanguageID** 属性使用的 **MsoLanguageID** 值之一。 |

## 返回值

void

## 说明


此方法没有返回值；ET 显示 **“拼写检查”** 对话框。

要检查工作表中的页眉、页脚和对象，可对 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象使用此方法。

要仅检查单元格和批注，可对 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Cells)** 属性返回的对象使用此方法。



## 示例


```JavaScript
/*本示例演示第一个工作表的拼写检查，设置忽略所有字母都大写的单词，发现错误时显示建议的备用拼写列表。*/
function test() {
    Worksheets.Item(1).CheckSpelling(undefined, true, true, msoLanguageIDSimplifiedChinese)
}
```


```JavaScript
/*本示例演示活动工作表的拼写检查，设置只检查全部为大写的单词，发现错误等待输入正确拼写。*/
function test() {
    ActiveSheet.CheckSpelling(undefined, false, false, msoLanguageIDEnglishUS)
}
```
