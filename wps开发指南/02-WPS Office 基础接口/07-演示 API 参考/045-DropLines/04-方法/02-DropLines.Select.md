# DropLines.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DropLines** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一个图表的第一个图表组的垂直线。*/
function test() {
    let dropLines = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).DropLines
    dropLines.Select()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的垂直线的名称为“垂直线 1”，则选中该垂直线。*/
function test() {
    let dropLines = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).DropLines
    if (dropLines.Name == "垂直线 1") {
        dropLines.Select()
    }
}
```
