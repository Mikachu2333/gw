# ChartCategory.IsFiltered

返回或设置一个 **Boolean** 类型的值，该值确定是否从图表中筛选出指定的图表类别。 可读/写。



## 语法

express.**IsFiltered**

express   一个代表 **ChartCategory** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例筛选出第一个文档上第一个形状中的图表的第一个图表组的第一个可见类别。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.CategoryCollection().Item(1).IsFiltered = true
}
```


```JavaScript
/*本示例判断活动文档中第一个内嵌图表中第一个图表组是否筛选出第一个可见类别，并通知用户。*/
function test() {
    let chartGroup = ActiveDocument.InlineShapes.Item(1).Chart.ChartGroups(1)
    if (chartGroup.CategoryCollection().Item(1).IsFiltered) {
        alert("筛选出第一个类别")
    } else {
        alert("未筛选出第一个类别")
    }
}
```
