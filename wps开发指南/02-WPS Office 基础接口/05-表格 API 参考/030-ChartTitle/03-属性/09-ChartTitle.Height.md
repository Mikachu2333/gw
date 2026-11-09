# ChartTitle.Height

返回对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上图表 Chart 2 的标题的高度是否为 19.6 磅。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects("Chart 2").Chart.ChartTitle
    alert(charttitle.Height == 19.6)
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的标题的高度。*/
function test() {
    let charttitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartTitle
    alert(`图表工作表 Chart1 的标题高度：${charttitle.Height} 磅`)
}
```
