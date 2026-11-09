# ChartObject.Height

返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **ChartObject** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将工作表 Sheet1 上嵌入的第一个图表的高度设置为 200 磅。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.Height = 200
}
```


```JavaScript
/*本示例显示第一张工作表上嵌入的图表 Chart 2 的高度。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 2")
    alert(`图表 Chart 2 的高度为：${chartobject.Height} 磅`)
}
```
