# ChartObjects.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中图表的数量。*/
function test() {
    let chartobjects = Application.Worksheets.Item("Sheet1").ChartObjects()
    alert(`工作表 Sheet1 中有 ${chartobjects.Count} 个图表`)
}
```


```JavaScript
/*本示例显示第一张工作表上图表的数量是否为 2 。*/
function test() {
    let chartobjects = Application.Sheets.Item(1).ChartObjects()
    alert(chartobjects.Count == 2)
}
```
