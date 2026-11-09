# ChartTitle.Width

返回对象的宽度（以磅为单位）。只读。



## 语法

express.**Width**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中第一个图表的标题宽度。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartTitle
    alert(`图表标题的宽度：${charttitle.Width} 磅`)
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 中图表标题的宽度是否为 62 磅。*/
function test() {
    let charttitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartTitle
    alert(charttitle.Width == 62)
}
```
