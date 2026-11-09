# Shapes.AddTextbox

创建一个文本框。返回一个代表新文本框的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。



## 语法

express.**AddTextbox(Orientation, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Orientation | 必选 | MsoTextOrientation | 文本框的方向。 |
| Left | 必选 | number（float 精度） | 文本框左上角相对于文档左上角的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 文本框左上角相对于文档顶部的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 文本框的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 文本框的高度（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例将包含文本“Test Box”的文本框添加到第一张工作表中。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    let textbox = shapes.AddTextbox(msoTextOrientationHorizontal, 100, 10, 200, 50)
    textbox.TextFrame.Characters().Text = "Test Box"
}
```


```JavaScript
/*本示例将带有红色边框的文本框添加到活动工作表中。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let textbox = shapes.AddTextbox(msoTextOrientationVertical, 100, 10, 200, 50)
    textbox.Line.Weight = 2
    textbox.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
