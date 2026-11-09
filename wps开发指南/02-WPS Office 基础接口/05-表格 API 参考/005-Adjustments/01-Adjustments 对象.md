# Adjustments 对象

它包含指定的自选图形、艺术字对象或连接符的调整值的集合。

## 说明


每个调整值代表一种调整控点的调整方法。由于某些调整控点可以按两种方法调整（例如，某些控点既可以水平调整也可以垂直调整），所以形状的调整值数量可以大于调整控点数量。一个形状最多可以有八个调整值。

使用 **Adjustments** 属性可返回 **Adjustments** 对象。使用 **Adjustments** (*index*)（其中 *index* 是调整值的索引号）可返回单个调整值。

不同的形状具有不同数目的调整值，不同类型的调整值在不同的方向上调整形状的几何性质，不同类型的调整值有不同的取值范围。例如，下面的图示显示了右箭头标注的四个调整值各对该标注的几何形状起什么作用。

![具有不同调整控点的右箭头标注](https://cloudcdn.qwps.cn/open/_img/61ca282bd2.png)

由于每个形状有不同的调整值集，校验指定形状的调整行为的最好方法是手动创建一个图例，在打开宏记录器的情况下作调整，然后检查记录的代码。

下表概括了不同类型的调整值的有效取值范围。多数情况下，如果指定的调整值超出了有效取值范围，就将用最接近的有效值来代替。

| 调整类型      | 有效值                                                                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 线性（水平或垂直） | 通常 0.0 值代表形状的左边界或上边界，而 1.0 值代表形状的右边界或下边界。有效值对应于有效的手动调整。例如，如果只能将调整控点手动拖动形状的一半宽度，则相应的调整值最大为 0.5。对于象连接符和标注这样的形状，0.0 和 1.0 值代表由它们的起始和终止点定义的矩形界限，此时负值和大于 1.0 的值是有效的。 |
| 射线图       | 调整值 1.0 对应于形状宽度。最大值为 0.5，或形状宽度的一半。                                                                                                                              |
| 角         | 值以度表示。如果指定的值超过了 -180 到 180 的范围，则将其折算为该范围内的值。                                                                                                                    |


## 示例


```JavaScript
/*本示例向第一张工作表中添加右箭头标注，并且设置该标注的调整值。请注意，尽管形状只有三个调整控点，但是它有四个调整值。第三和第四个调整值都和箭头头部和颈部间的调整句柄相对应。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeRightArrowCallout, 10, 10, 250, 190)
    //adjusts width of text box
    shape.Adjustments.Item(1, 0.5)
    //adjusts width of arrow head
    shape.Adjustments.Item(2, 0.15)
    //adjusts length of arrow head
    shape.Adjustments.Item(3, 0.8)
    //adjusts width of arrow neck
    shape.Adjustments.Item(4, 0.4)
}
```


```JavaScript
/*本示例将第一张工作表上第一个形状的所有调整值设置为0.015。*/
function test() {
    let adjustments = Application.Worksheets.Item(1).Shapes.Item(1).Adjustments
    for (let i = 1; i <= adjustments.Count; i++) {
        adjustments.Item(i, 0.015)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Adjustments/member/Item) | 返回或设置由 **Index** 参数指定的调整值。 **Single** 型，可读写。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Adjustments/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Adjustments/member/Count) | 返回一个 **Integer** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Adjustments/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Adjustments/member/Parent) | 返回指定对象的父对象。只读。 |