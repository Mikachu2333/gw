# SeriesLines.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **SeriesLines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的第一个图表组的系列线名称。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    alert(chart.ChartGroups(1).SeriesLines.Name)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的系列线名称为“系列线 1”，则删除该系列线。*/
function test() {
    let seriesLines = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).SeriesLines
    if (seriesLines.Name == "系列线 1") {
        seriesLines.Delete()
    }
}
```
