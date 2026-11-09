# FreeformBuilder 对象

代表任意多边形创建时的几何属性。

## 说明


使用 **BuildFreeform** 方法可返回 **FreeformBuilder** 对象。使用 **AddNodes** 方法可在任意多边形中添加节点。使用 **ConvertToShape** 方法可创建 **FreeformBuilder** 对象中定义的形状，并将它添加到 **Shapes** 集合中。


## 示例


```JavaScript
/*本示例向第一张工作表中添加带有四条线段的任意多边形。*/
function test() {
    let builder = Worksheets.Item(1).Shapes.BuildFreeform(msoEditingCorner, 360, 200)
    builder.AddNodes(msoSegmentCurve, msoEditingCorner, 380, 230, 400, 250, 450, 300)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 200)
    builder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 400)
    builder.AddNodes(msoSegmentLine, msoEditingAuto, 360, 200)
    let s = builder.ConvertToShape()
    s.Fill.ForeColor.RGB = RGB(0, 0, 0)
}
```


```JavaScript
/*本示例在活动工作表中创建一个具有三个顶点的红色任意多边形。*/
function test() {
    let builder = ActiveSheet.Shapes.BuildFreeform(msoEditingAuto, 470, 330)
    builder.AddNodes(msoSegmentCurve, msoEditingSmooth, 570, 360)
    builder.AddNodes(msoSegmentCurve, msoEditingSmooth, 690, 430)
    builder.AddNodes(msoSegmentCurve, msoEditingSmooth, 470, 330)
    let s = builder.ConvertToShape()
    s.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/AddNodes) | 在当前形状中添加一点，然后绘制一个从当前节点到添加的最后一个节点的线条。 |
| [ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/ConvertToShape) | 创建一个具有指定 **FreeformBuilder** 对象的几何特性的形状。返回一个代表新形状的 **Shape** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/Parent) | 返回指定对象的父对象。只读。 |