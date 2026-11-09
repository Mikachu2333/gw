# Selection.InlineShapes

返回一个 **[InlineShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/obj)** 集合，该集合代表选定内容中的所有 **InlineShape** 对象。只读。



## 语法

express.**InlineShapes**

express   一个代表 **Selection** 对象的变量。

## 类型

InlineShapes

## 示例


```JavaScript
/*本示例显示选中内容中内嵌图形数目和活动文档中图形数目。*/
function test() {
    let inlineShapes = Selection.InlineShapes
    let shapes = ActiveDocument.Shapes
    alert("InlineShape = " + inlineShapes.Count + "\nShapes = " + shapes.Count)
}
```


```JavaScript
/*本示例将选中的第二个内嵌图形的阴影设置为可见。*/
function test() {
    let inlineShapes = Selection.InlineShapes
    if (inlineShapes.Count >= 2) {
        inlineShapes.Item(2).Shadow.Visible = msoTrue
    }
}
```
