# Point.Name

返回对象名称。只读。



## 语法

express.**Name**

express   一个代表 **Point** 对象的变量。

## 类型

string

## 说明


该属性与图表上数据点的名称对应。使用以下格式表示该名称：S<系列序号>P<数据点编号>。



## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的第一个系列的第一个数据点的名称。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    alert("数据点的名称为：" + chart.SeriesCollection(1).Points(1).Name)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三个系列的所有数据点的名称。*/
function test() {
    let points = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points()
    let str = ""
    for (let i = 1; i <= points.Count; i++) {
        str += points.Item(i).Name + "\n"
    }
    alert(str)
}
```
