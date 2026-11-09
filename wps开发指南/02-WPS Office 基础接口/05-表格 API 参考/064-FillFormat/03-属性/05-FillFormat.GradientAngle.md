# FillFormat.GradientAngle

返回或设置指定填充格式的渐变填充角度。可读/写。



## 语法

express.**GradientAngle**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


可以在图表中各种元素（形状）的格式设置中指定渐变填充。例如，可使用 **“设置数据系列格式”** 对话框将 **“列”** 图表中各列的格式设置为渐变填充。在此情况下， **GradientAngle** 属性对应于 **“设置数据系列格式”** 对话框内 **“填充”** 类别中的 **“角度”** 框的设置。 **GradientAngle** 属性值的有效范围是 0 到 359.9。



## 示例


```JavaScript
/*下面的代码示例将 Chart 1 中第 1 个系列的渐变填充角度设置为 45 度。*/
function test() {
    Application.ActiveSheet.ChartObjects("Chart 1").Activate()
    Application.ActiveChart.SeriesCollection(1).Format.Fill.GradientAngle = 45
}
```


```JavaScript
/*本示例显示第一张工作表中第二个形状的填充格式的渐变填充的角度。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(2).Fill
    alert(fillFormat.GradientAngle)
}
```
