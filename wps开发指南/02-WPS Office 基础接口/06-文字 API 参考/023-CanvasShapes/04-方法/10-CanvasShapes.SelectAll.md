# CanvasShapes.SelectAll

选择画布中的所有形状。



## 语法

express.**SelectAll()**

express   一个代表 **CanvasShapes** 对象的变量。

## 返回值

void

## 说明


该方法不选择 **InlineShape** 对象。



## 示例


```JavaScript
/*本示例选定并删除活动文档的第一个画布中的所有图形。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range(1)
    shapeRange.CanvasItems.SelectAll()
    Selection.Delete()
}
```


```JavaScript
/*本示例选中第一个文档的第一个画布中的所有图形。*/
function test() {
    let canvasShapes = Documents.Item(1).Shapes.Item(1).CanvasItems
    canvasShapes.SelectAll()
}
```
