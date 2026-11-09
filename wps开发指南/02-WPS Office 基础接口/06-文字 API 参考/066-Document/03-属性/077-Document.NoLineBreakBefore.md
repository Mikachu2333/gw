# Document.NoLineBreakBefore

返回或设置 WPS 不在其前换行的首尾字符。可读/写 **String** 类型。



## 语法

express.**NoLineBreakBefore**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例在活动文档中设定，以“!”、“)”和“]”作为首尾字符时，WPS 不在这些首尾字符的前面进行换行。*/
function test() {
    ActiveDocument.NoLineBreakBefore = "!)]"
}
```


```JavaScript
/*本示例显示第一个文档的 NoLineBreakBefore 属性值。*/
function test() {
    alert(Documents.Item(1).NoLineBreakBefore)
}
```
