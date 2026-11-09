# Legend.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **Legend** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例向图表工作表 Chart1 的图例添加阴影。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Shadow = true
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的图例是否有阴影。*/
function test() {
    let legend = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    alert(legend.Shadow)
}
```
