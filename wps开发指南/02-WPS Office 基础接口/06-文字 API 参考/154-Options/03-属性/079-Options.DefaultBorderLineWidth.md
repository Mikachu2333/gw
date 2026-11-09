# Options.DefaultBorderLineWidth

返回或设置边框的默认线条宽度。 **WdLineWidth** 类型，可读写。



## 语法

express.**DefaultBorderLineWidth**

express   一个代表 **Options** 对象的变量。

## 类型

WdLineWidth

## 示例


```JavaScript
/*本示例更改边框的默认线条宽度，然后为选定内容的每一段周围添加边框。*/
function test() {
    Options.DefaultBorderLineWidth = wdLineWidth050pt
    Selection.Borders.Enable = true
}
```


```JavaScript
/*本示例显示边框的默认线条宽度是否为 1 磅。*/
function test() {
    alert(Options.DefaultBorderLineWidth == wdLineWidth100pt)
}
```
