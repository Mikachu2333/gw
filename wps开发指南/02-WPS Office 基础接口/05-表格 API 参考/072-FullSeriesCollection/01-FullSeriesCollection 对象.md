# FullSeriesCollection 对象

表示图表中完整的 **Series**  对象集合。

## 说明


使用 **FullSeriesCollection** 对象，可以获取筛选掉的 **Series** 对象，并将其筛选回。 它还使你能够以编程方式循环访问完整的 **Series** 对象集合（筛选掉或可见）。

通过让现有的 **SeriesCollection** 对象仅包含可见系列，可以编程方式仅对可见系列执行操作。 它还可以防止 ET 使用筛选出的数据破坏图表上的现有图表解决方案。


## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 的第二个系列名称。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    alert(chart.FullSeriesCollection().Item(2).Name)
}
```


```JavaScript
/*本示例选中工作表 Sheet1 第一个内嵌图表的第三个系列。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    chart.FullSeriesCollection().Item(3).Select()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FullSeriesCollection/member/Item) | 从 **FullSeriesCollection** 对象返回单个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FullSeriesCollection/member/Count) | 返回一个 **Long** 值，该值代表 **FullSeriesCollection** 对象中的 **Series** 对象数。 此为只读属性。 |