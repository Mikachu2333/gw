# ChartTitle.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ChartTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动文档中第一个内嵌图表的标题。*/
function test() {
    let chartTitle = ActiveDocument.InlineShapes(1).Chart.ChartTitle
    chartTitle.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题文本为“成绩表_2”，则删除该标题。*/
function test() {
    let chartTitle = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "成绩表_2") {
        chartTitle.Delete()
    }
}
```
