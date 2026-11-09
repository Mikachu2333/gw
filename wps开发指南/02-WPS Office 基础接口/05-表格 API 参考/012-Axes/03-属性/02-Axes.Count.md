# Axes.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Axes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的坐标轴的数量。*/
function test() {
    let axes = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes()
    alert(`坐标轴的数量：${axes.Count}`)
}
```
