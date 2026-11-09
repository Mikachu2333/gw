# ChartCategory 对象

指定图表类型的类别。


## 示例


```JavaScript
/*此示例判断工作表 Sheet1 第一个内嵌图表第一个图表组第一个类别是否筛选出序列，并通知用户。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    if (chart.CategoryCollection(1).IsFiltered) {
        alert("图表组的第一个类别筛选出序列")
    } else {
        alert("图表组的第一个类别未筛选出序列")
    }
}
```


```JavaScript
/*此示例显示工作表 Sheet1 第一个内嵌图表第一个图表组的第四个类别的实际类型。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    let category = chart.FullCategoryCollection(4)
    alert(category.constructor.name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [IsFiltered](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartCategory/member/IsFiltered) | 当用户筛选出序列时，返回 True 。 只读 Boolean。 |