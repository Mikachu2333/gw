# CategoryCollection 对象

表示图表中可见图表类别的集合。


## 示例


```JavaScript
/*此示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组中可见类别的数量。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.CategoryCollection().Count)
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 第一个图表组的第四个类别是否筛选出序列。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.CategoryCollection().Item(4).IsFiltered)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CategoryCollection/member/Item) | 从 **CategoryCollection** 对象返回单个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CategoryCollection/member/Count) | 返回一个 **Long** 值，该值代表 **CategoryCollection** 中的对象数（返回图表中可见的类别数）。此为只读属性。 |