# ChartObjects.Height

返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将工作表 Sheet1 中所有图表的高度设置为工作表 1 到 15 行的距离。*/
function test() {
    let sheet = Application.Sheets.Item("Sheet1")
    sheet.ChartObjects().Height = sheet.Range("1:15").Height
}
```


```JavaScript
/*本示例设置图表工作表 Chart1 上所有图表的高度。*/
function test() {
    let chartobjects = Application.Charts.Item("Chart1").ChartObjects()
    chartobjects.Height = 350
}
```
