# Axis.BaseUnitIsAuto

如果由 WPP 为指定的分类轴选择适当的基本单位，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**BaseUnitIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


不能对数值轴设置本属性。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的分类轴设置为使用时间刻度，并由 WPP 自动选择基本单位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlCategory)
        axis.CategoryType = xlTimeScale
        axis.BaseUnitIsAuto = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的第二个图表的类别轴是否由 WPP 选择适当的基本单位。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    alert(axis.BaseUnitIsAuto)
}
```
