# Options.DefaultBorderColorIndex

返回或设置边框的默认线条颜色。 **WdColorIndex** 类型，可读写。



## 语法

express.**DefaultBorderColorIndex**

express   一个代表 **Options** 对象的变量。

## 类型

WdColorIndex

## 示例


```JavaScript
/*本示例更改边框的默认颜色和样式，并为活动文档的第一段设置一个边框。*/
function test() {
    Options.DefaultBorderColorIndex = wdRed
    Options.DefaultBorderLineStyle = wdLineStyleDouble
    ActiveDocument.Paragraphs.Item(1).Borders.Enable = true
}
```


```JavaScript
/*本示例显示边框的默认线条颜色是否为红色。*/
function test() {
    alert(Options.DefaultBorderColorIndex == wdRed)
}
```
