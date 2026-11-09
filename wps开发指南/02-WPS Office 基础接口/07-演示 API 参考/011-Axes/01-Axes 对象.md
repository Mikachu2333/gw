# Axes 对象

代表指定图表中所有 **[Axis](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/obj)** 对象的集合。

## 说明


可以使用 **[Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Axes)** 方法返回 **Axes** 集合。

可以使用 **Axes** (_Type_, _AxisGroup_)（其中 _Type_ 为坐标轴类型，_AxisGroup_ 为坐标轴组）返回包含单个 **Axis** 对象的 **Axes** 集合。_Type_ 可以是下列 **[XlAxisType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisType)** 常量之一： **xlCategory** 、 **xlSeries** 或 **xlValue** 。_AxisGroup_ 可以是下列 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 常量之一： **xlPrimary** 或 **xlSecondary** 。


## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的坐标轴数。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.Axes().Count)
    }
}
```


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片的第一张图表设置分类轴的标题文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes().Item(xlCategory)
        axis.HasTitle = true
        axis.AxisTitle.Caption = "1994"
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axes/member/Item) | 从 **Axes** 集合返回一个 **[Axis](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axes/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |