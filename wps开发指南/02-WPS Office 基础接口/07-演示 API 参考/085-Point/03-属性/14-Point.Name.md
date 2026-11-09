# Point.Name

返回对象名称。只读。



## 语法

express.**Name**

express   一个代表 **Point** 对象的变量。

## 类型

string

## 说明


此属性对应于图表中的数据点的名称。该名称用下面的格式表示：S\<_系列序号_\>P\<_数据标记序号_\>。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的第一个系列的第一个数据点的名称。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    alert("数据点的名称为：" + chart.SeriesCollection(1).Points(1).Name)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第三个系列的所有数据点的名称。*/
function test() {
    let points = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points()
    let str = ""
    for (let i = 1; i <= points.Count; i++) {
        str += points.Item(i).Name + "\n"
    }
    alert(str)
}
```
