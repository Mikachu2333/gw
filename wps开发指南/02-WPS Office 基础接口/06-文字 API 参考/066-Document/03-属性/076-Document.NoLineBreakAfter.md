# Document.NoLineBreakAfter

返回或设置 WPS 不在其后换行的首尾字符。可读/写 **String** 类型。



## 语法

express.**NoLineBreakAfter**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例在活动文档中，设定以“$”、“(”、“[”、“\”和“{”作为首尾字符时，WPS 不在其后面进行换行。*/
function test() {
    ActiveDocument.NoLineBreakAfter = "$([\\{"
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个文档的 NoLineBreakAfter 属性值。*/
function test() {
    Selection.Range.Text = Documents.Item(1).NoLineBreakAfter
}
```
