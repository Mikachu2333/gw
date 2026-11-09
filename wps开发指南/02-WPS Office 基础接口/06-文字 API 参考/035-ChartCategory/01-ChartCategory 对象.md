# ChartCategory 对象

表示文档中的所有图表类别，无论是否可见（未筛选）。

## 说明


使用 **IsFiltered** 属性可以确定哪些类别可见，哪些类别被筛选掉。


## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表中第一个图表组是否筛选出第一个可见类别。*/
function test() {
    let chartGroup = ActiveDocument.InlineShapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.CategoryCollection().Item(1).IsFiltered)
}
```


```JavaScript
/*本示例筛选出第一个文档上第一个形状中的图表的第一个图表组的所有类别。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    for (let i = 1; i <= chartGroup.CategoryCollection().Count; i++) {
        chartGroup.CategoryCollection().Item(i).IsFiltered = true
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [IsFiltered](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartCategory/member/IsFiltered) | 返回或设置一个 **Boolean** 类型的值，该值确定是否从图表中筛选出指定的图表类别。 可读/写。 |