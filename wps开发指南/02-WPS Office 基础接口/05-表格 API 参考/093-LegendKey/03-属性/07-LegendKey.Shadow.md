# LegendKey.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **LegendKey** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*下例显示 Sheet1 中的第一个图表的第二个图例项的图例标示是否有阴影。*/
function test() {
    let legend = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    alert(legend.LegendEntries(2).LegendKey.Shadow)
}
```


```JavaScript
/*本示例将 Chart1 上第一个图例项的图例标示设置成有阴影。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.LegendEntries(1).LegendKey.Shadow = true
}
```
