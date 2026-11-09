# AxisTitle.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的数值轴标题的名称。*/
function test() {
    let axisTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Name)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片中第二个图表的数值轴标题的名称不为“example”，则设置其颜色。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    if (axisTitle.Name != "example") {
        axisTitle.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
    }
}
```
