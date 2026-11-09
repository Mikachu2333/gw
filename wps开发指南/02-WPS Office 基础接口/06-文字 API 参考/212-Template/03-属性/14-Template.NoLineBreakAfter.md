# Template.NoLineBreakAfter

返回或设置 WPS 不在其后面进行换行的首尾字符。可读写 **String** 类型。



## 语法

express.**NoLineBreakAfter**

express   一个代表 **Template** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置“$”、“(”、“[”、“\”和“{”作为第一个模板的首尾字符且 WPS 不在这些首尾字符的后面进行换行。*/
function test() {
    Application.Templates.Item(1).NoLineBreakAfter = "$([\{"
}
```


```JavaScript
/*本示例显示活动文档附加模板的 NoLineBreakAfter 属性值。*/
function test() {
    alert(ActiveDocument.AttachedTemplate.NoLineBreakAfter)
}
```
