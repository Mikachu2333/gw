# CategoryCollection 对象

表示演示文稿中可见图表类别的集合。

## 说明


如果未从图表中筛选出类别，则它们可见。


## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个图表中第一个图表组的类别的数量。*/
function test() {
    let chartGroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.CategoryCollection().Count)
}
```


```JavaScript
/*本示例筛选出活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的第二个可见类别。*/
function test() {
    let chartGroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.CategoryCollection().Item(2).IsFiltered = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CategoryCollection/member/Item) | 返回单个图表类别。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CategoryCollection/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中类别的数目。只读。 |