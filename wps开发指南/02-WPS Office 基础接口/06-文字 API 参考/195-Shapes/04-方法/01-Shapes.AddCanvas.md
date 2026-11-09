# Shapes.AddCanvas

在文档中添加绘图画布。返回代表该画布的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象并将其添加到 **Shapes** 集合。



## 语法

express.**AddCanvas(Left, Top, Width, Height, Anchor)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Left | 必选 | number（float 精度） | 画布左侧边缘相对于锁定标记的位置，以磅为单位。 |
| Top | 必选 | number（float 精度） | 画布上部边缘相对于锁定标记的位置，以磅为单位。 |
| Width | 必选 | number（float 精度） | 画布的宽度，以磅为单位。 |
| Height | 必选 | number（float 精度） | 画布的高度，以磅为单位。 |
| Anchor | 可选 | any | 代表画布所绑定的文本的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。如果指定 Anchor，则锁定标记将出现在锁定区域第一段的开头。如果省略该参数，将自动选定锁定区域，而画布将相对于页面的上边缘和左边缘进行定位。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例在新文档中添加画布，然后在画布上添加两个图形，并设置填充和线条属性。*/
function test() {
    //Add a drawing canvas to the new document
    let shape = Documents.Add().Shapes.AddCanvas(150, 150, 70, 70)
    shape.WrapFormat.Type = wdWrapInline

    //Add shapes to drawing canvas
    let canvasShapes = shape.CanvasItems
    canvasShapes.AddShape(msoShapeHeart, 10, 10, 50, 60)
    canvasShapes.AddLine(0, 0, 70, 70)
    shape.CanvasItems.Item(1).Fill.ForeColor.RGB = RGB(255, 0, 0)
    shape.CanvasItems.Item(2).Line.EndArrowheadStyle = msoArrowheadTriangle
}
```


```JavaScript
/*本示例在活动文档的所选区域中添加一个绘图画布，并设置该绘图画布的前景填充的主题颜色。*/
function test() {
    let shape = ActiveDocument.Shapes.AddCanvas(200, 200, 100, 150, Selection.Range)
    shape.Fill.ForeColor.ObjectThemeColor = wdThemeColorAccent4
}
```
