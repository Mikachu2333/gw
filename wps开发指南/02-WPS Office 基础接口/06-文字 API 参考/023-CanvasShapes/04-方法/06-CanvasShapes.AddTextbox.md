# CanvasShapes.AddTextbox

在绘图画布上添加一个文本框。返回一个表示该文本框的 **Shape** 对象。



## 语法

express.**AddTextbox(Orientation, Left, Top, Width, Height)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Orientation | 必选 | MsoTextOrientation | 文本的方向。由于选择或安装的语言支持（例如美国英语）不同，有些 **MsoTextOrientation** 常量可能无法使用。 |
| Left | 必选 | number（float 精度） | 文本框左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 文本框上边缘的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 文本框的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 文本框的高度（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例在新文档中的绘图画布上添加一个文本框。*/
function test() {
    // Create a new document and add a drawing canvas
    let shape = Documents.Add().Shapes.AddCanvas(100, 75, 150, 200)

    //Add a text box to the drawing canvas
    shape.CanvasItems.AddTextbox(msoTextOrientationHorizontal, 1, 1, 100, 100)
}
```


```JavaScript
/*本示例在第一个文档上第一个绘图画布中添加一个文本框，并在该文本框中添加文本。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1).CanvasItems.AddTextbox(msoTextOrientationVertical, 10, 10, 30, 50)
    shape.TextFrame.TextRange.Text = "example"
}
```
