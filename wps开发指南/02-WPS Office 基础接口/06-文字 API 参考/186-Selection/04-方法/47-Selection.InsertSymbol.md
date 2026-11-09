# Selection.InsertSymbol

插入一个符号，用来替换指定的所选内容。



## 语法

express.**InsertSymbol(CharacterNumber, Font, Unicode, Bias)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| CharacterNumber | 必选 | number（int4 精度） | 指定符号的字符编号。该值应是 31 加上此符号在符号表中的位置（从左向右计算）相应的数字。例如，要指定一个位于“Symbol”字体符号表中第 37 号位置的 delta 字符，请将 CharacterNumber 设置为 68。 |
| Font | 可选 | any | 包含符号的字体的名称。 |
| Unicode | 可选 | any | 如果该参数值为 **True** ，则插入由 CharacterNumber 指定的 Unicode 字符；如果该参数值为 **False** ，则插入由 CharacterNumber 指定的 ANSI 字符。默认值为 **False** 。 |
| Bias | 可选 | any | 为符号设置字体斜线。此参数可用于为东亚字符设置正确的字体斜线。可以是 **WdFontBias** 常量之一。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |

## 返回值

void

## 说明


如果不希望替换所选内容，请在使用此方法之前使用 **Collapse** 方法。



## 示例


```JavaScript
/*本示例在插入点插入一个双向箭头。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.InsertSymbol(171, "Symbol", false)
}
```


```JavaScript
/*本示例将活动文档第三个段落替换为一个不指定字体斜线的 delta 字符。*/
function test() {
    ActiveDocument.Paragraphs.Item(3).Range.Select()
    Selection.InsertSymbol(68, "Symbol", false, wdFontBiasDontCare)
}
```
