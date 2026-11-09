# ChartTitle.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例向图表工作表 Chart1 的标题添加阴影。*/
function test() {
    Application.Charts.Item("Chart1").ChartTitle.Shadow = true
}
```


```JavaScript
/*此示例向工作表 Sheet1 中第一张图表的标题添加阴影，并设置阴影格式。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartTitle
    charttitle.Shadow = true
    charttitle.Shadow.Type = msoShadow8
}
```
