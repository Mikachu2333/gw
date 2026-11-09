# AxisTitle.Shadow

返回或设置一个确定对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的分类轴标题设置阴影。*/
function test() {
    let axistitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.Shadow = true
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的数值轴标题是否有阴影。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Shadow)
}
```
