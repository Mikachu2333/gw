# FillFormat.GradientAngle

为指定填充格式返回或设置渐变填充角度。可读/写。



## 语法

express.**GradientAngle**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


可以在为图表中的各种元素（形状）设置格式时指定渐变填充。例如，可以使用 **“设置数据系列格式”** 对话框，将 **“柱形”** 图中的柱形格式设置为渐变填充。在这种情况下， **GradientAngle** 属性对应于 **“设置数据系列格式”** 对话框的 **“填充”** 类别中的 **“角度”** 框的设置。 **GradientAngle** 属性值的有效范围是 0 至 359.9。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的渐变填充角度设置为 45 度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Chart.SeriesCollection(1).Format.Fill.GradientAngle = 45
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状的渐变填充角度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.GradientAngle)
}
```
