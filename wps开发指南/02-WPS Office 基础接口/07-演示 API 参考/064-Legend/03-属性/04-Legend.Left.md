# Legend.Left

以磅为单位返回从对象左边缘至图表区左边缘之间的距离。可读写， **Double** 类型。



## 语法

express.**Left**

express   一个代表 **Legend** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片第一个图表的图例的左边缘到图表区左边缘的距离。*/
function test() {
    let legend = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Legend
    alert(legend.Left + "磅")
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的图例的左边缘到图表区左边缘的距离设置为120磅。*/
function test() {
    let legend = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend
    legend.Left = 120
}
```
