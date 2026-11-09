# InlineShape.AlternativeText

返回或设置一个 **String** 类型的值，该值代表与网页中图形相关联的可选文字（可选文字：由 Web 浏览器用于在图像下载过程中显示文本，其对象是那些关闭图形的用户，以及那些依赖屏幕阅读软件将屏幕上的图形转换为可读语言的用户。）。可读写。



## 语法

express.**AlternativeText**

express   一个代表 **InlineShape** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例为活动窗口中选定的图形设定可选文字。选定图形是一张图表。*/
function test() {
    ActiveWindow.Selection.InlineShapes.Item(1).AlternativeText = "This is a chart."
}
```


```JavaScript
/*本示例显示活动文档上第二个内嵌图形关联的可选文字。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(2)
    alert(inlineShape.AlternativeText)
}
```
