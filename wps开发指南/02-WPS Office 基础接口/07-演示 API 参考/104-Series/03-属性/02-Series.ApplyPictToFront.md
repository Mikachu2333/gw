# Series.ApplyPictToFront

如果图片应用于系列中的某个数据点或所有数据点之前，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ApplyPictToFront**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将图片应用于活动演示文稿上第一张幻灯片中第一个图表的第一个系列的所有数据点之前。图片必须已应用于该系列（设置此属性将更改图片的方向）。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).ApplyPictToFront = true
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表是否将图片应用于第三个系列的数据点之前。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(3).ApplyPictToFront)
}
```
