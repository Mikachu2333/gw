# ChartGroup.VaryByCategories

如果 WPP 对每个数据标记指定一种不同的颜色或图案，则其值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**VaryByCategories**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 说明


该属性所应用的图表只能包含一个系列。



## 示例


```JavaScript
/*本示例对活动演示文稿的第一张幻灯片上第一张图表的第一个图表组中的每个数据标记指定一种不同的颜色或图案。本示例应在数据系列上有数据标记的二维折线图上运行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups(1).VaryByCategories = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的每个数据标记是否指定一种不同的颜色或图案。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.VaryByCategories)
}
```
