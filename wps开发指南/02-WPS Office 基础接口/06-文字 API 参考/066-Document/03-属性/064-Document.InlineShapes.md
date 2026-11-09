# Document.InlineShapes

返回一个 **[InlineShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/obj)** 集合，该集合代表文档中的所有 **[InlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/obj)** 对象。只读。



## 语法

express.**InlineShapes**

express   一个代表 **Document** 对象的变量。

## 类型

InlineShapes

## 示例


```JavaScript
/*本示例显示活动文档中形状和嵌入式形状的数目*/
function test() {
    alert(`InlineShapes = ${ActiveDocument.InlineShapes.Count}\nShapes = ${ActiveDocument.Shapes.Count}`)
}
```


```JavaScript
/*本示例设置第一个文档中第一个内嵌形状的宽度和高度。*/
function test() {
    let inlineShape = Documents.Item(1).InlineShapes.Item(1)
    inlineShape.Width = 400
    inlineShape.Height = 300
}
```
