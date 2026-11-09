# CategoryCollection 对象

表示文档中可见图表类别的集合。

## 说明


如果未从图表中筛选出类别，则它们可见。


## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表中第一个图表组的可见类别的数量。*/
function test() {
    let chartGroup = ActiveDocument.InlineShapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.CategoryCollection().Count)
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

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CategoryCollection/member/Item) | 返回单个图表类别。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CategoryCollection/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中类别的数目。只读。 |