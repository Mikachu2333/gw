# InlineShape.LinkFormat

返回一个 **LinkFormat** 对象，该对象代表链接到文件的指定内嵌形状的链接选项。只读。



## 语法

express.**LinkFormat**

express   一个代表 **InlineShape** 对象的变量。

## 类型

LinkFormat

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌形状链接的 OLE 对象的源文件的名称。*/
function test() {
    alert(ActiveDocument.InlineShapes.Item(1).LinkFormat.SourceName)
}
```


```JavaScript
/*本示例显示选中的第一个内嵌图形链接的文件的类型是否为wdLinkTypeOLE。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    alert(inlineShape.LinkFormat.Type == wdLinkTypeOLE)
}
```
