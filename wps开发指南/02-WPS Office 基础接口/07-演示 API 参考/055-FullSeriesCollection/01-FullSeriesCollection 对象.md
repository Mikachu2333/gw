# FullSeriesCollection 对象

表示所有图表系列（包括已筛选和未筛选的图表系列）的完整集合。


## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个图表中系列的数量。*/
function test() {
    let fullSeriesCollection = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.FullSeriesCollection()
    alert(fullSeriesCollection.Count)
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的第二个系列。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let series = shape.Chart.FullSeriesCollection().Item(2)
    series.Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FullSeriesCollection/member/Item) | 从集合中返回单个 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FullSeriesCollection/member/Count) | 返回一个 **Long** 类型的值，该值表示集合中的完整序列的数目。只读。 |