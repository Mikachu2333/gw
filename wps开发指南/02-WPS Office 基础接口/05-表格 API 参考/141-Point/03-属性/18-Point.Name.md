# Point.Name

返回对象名称。只读。



## 语法

express.**Name**

express   一个代表 **Point** 对象的变量。

## 类型

string

## 说明


此属性对应于图表中数据点的名称。名称用下面的格式表示：S<_系列序号_\>P<_数据标记序号_\>。



## 示例


```JavaScript
/*此示例显示 Chart1 中第二个数据系列的第三个数据点的名称。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).Points(3)
    alert(`数据点的名称是 ${point.Name}`)
}
```


```JavaScript
/*此示例将 Chart1 中所有系列的数据点中名称为 "S3P3" 的背景色设置为红色。*/
function test() {
    let seriesColltion = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection()
    for (let i = 1; i <= seriesColltion.Count; i++) {
        for (let n = 1; n <= seriesColltion.Item(i).Points().Count; n++) {
            if (seriesColltion.Item(i).Points(n).Name == "S3P3") {
                seriesColltion.Item(i).Points(n).MarkerBackgroundColor = RGB(255, 0, 0)
            }
        }
    }
}
```
