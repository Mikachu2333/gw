# Chart.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **Chart** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 的索引号。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    alert(chart.Index)
}
```


```JavaScript
/*本示例显示图表工作表 Chart2 的索引号是否为2。*/
function test() {
    let chart = Application.Charts.Item("Chart2")
    alert(chart.Index == 2)
}
```
