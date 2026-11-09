# ShapeRange.CanvasItems

返回一个 **CanvasShapes** 对象，该对象代表绘图画布上图形的集合。



## 语法

express.**CanvasItems**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

CanvasShapes

## 示例


```JavaScript
/*本示例向选中的绘图画布上添加一个直线连接符，并将直线设置为可见。*/
function test() {
    let canvasItems = Selection.ShapeRange.CanvasItems
    let connector = canvasItems.AddConnector(msoConnectorStraight, 0, 0, 100, 100)
    connector.Line.Visible = msoTrue
}
```


```JavaScript
/*本示例显示活动文档中绘图画布上图形的数量。*/
function test() {
    alert(ActiveDocument.Shapes.Range(1).CanvasItems.Count)
}
```
