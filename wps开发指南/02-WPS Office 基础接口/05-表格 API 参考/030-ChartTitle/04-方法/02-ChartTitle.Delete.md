# ChartTitle.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ChartTitle** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例删除图表工作表 Chart1 的标题。*/
function test() {
    let charttitle = Application.Charts.Item("Chart1").ChartTitle
    charttitle.Delete()
}
```


```JavaScript
/*本示例判断如果图表工作表 Chart1 的标题可见，则删除该图表的标题。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    if (chart.HasTitle) {
        chart.ChartTitle.Delete()
    }
}
```
