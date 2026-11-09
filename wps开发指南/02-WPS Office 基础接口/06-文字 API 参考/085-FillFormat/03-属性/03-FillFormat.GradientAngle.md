# FillFormat.GradientAngle

返回或设置指定填充格式的渐变填充的角度。可读/写。



## 语法

express.**GradientAngle**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


可以在图表中各种元素（形状）的格式设置中指定渐变填充。例如，可以使用 **“数据系列格式”** 对话框将 **“柱形图”** 图表中列的格式设置为渐变填充。在这种情况下， **GradientAngle** 属性与 **“数据系列格式”** 对话框的 **“填充”** 类别中 **“角度”** 框的设置相对应。 **GradientAngle** 属性的有效值范围为从 0 到 359.9。



## 示例


```JavaScript
/*本示例设置活动文档上所有形状的渐变填充的角度。*/
function test() {
    let shapes = Application.ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).Fill.GradientAngle = 80
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌图表的第一个系列的渐变填充的角度。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Chart.SeriesCollection(1).Format.Fill
    alert(fillFormat.GradientAngle)
}
```
