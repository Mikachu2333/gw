# ChartObject.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **ChartObject** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例判断如果第一张工作表上图表 Chart 1 的索引为 1 ，则显示其名称。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 1")
    if (chartobject.Index == 1) {
        alert(chartobject.Name)
    }
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上嵌入的图表 Chart 2 的索引是否为 2 。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2")
    alert(chartobject.Index == 2)
}
```
