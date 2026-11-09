# Series.HasErrorBars

如果系列有误差线，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasErrorBars**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


此属性不适用于三维图表。



## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第一个系列的误差线删除。应在第一个系列中有误差线的二维折线图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).HasErrorBars = false
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第二个系列是否具有误差线。应在第二个系列中有误差线的二维折线图上运行该示例。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).HasErrorBars)

}
```
