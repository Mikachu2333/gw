# Shapes.AddLabel

创建一个连接符。返回一个代表新连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。



## 语法

express.**AddLabel(Orientation, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Orientation | 必选 | MsoTextOrientation | 标签中文本的方向。 |
| Left | 必选 | number（float 精度） | 标签左上角相对于文档左上角的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 标签左上角相对于文档顶部的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 标签的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 标签的高度（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例将包含文本“Test Label”的垂直标签添加到第一张工作表中。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    let label = shapes.AddLabel(msoTextOrientationVertical, 100, 100, 60, 150)
    label.TextFrame.Characters().Text = "Test Label"
}
```


```JavaScript
/*本示例将包含实线样式的水平标签添加到活动工作表中。*/
function test() {
    let label = ActiveSheet.Shapes.AddLabel(msoTextOrientationHorizontal, 100, 100, 50, 50)
    label.Line.Weight = 2
    label.Line.DashStyle = msoLineSolid
}
```
