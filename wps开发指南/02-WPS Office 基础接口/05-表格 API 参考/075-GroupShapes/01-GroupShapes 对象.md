# GroupShapes 对象

用于访问组合形状中的单个形状。

## 说明


每个形状都由一个 **Shape** 对象代表。将 **Item** 方法与此对象一起使用，您可以在不取消分组的情况下处理组合的各个形状。

使用 **GroupItems** 属性可返回 **GroupShapes** 集合。使用 **GroupItems** (*index*)（其中 *index* 是分组的形状中单个形状的编号）可从 **GroupShapes** 集合中返回单个形状。


## 示例


```JavaScript
/*本示例向第一张工作表添加三个三角形，将它们分成一组，设置整个组的预设纹理填充效果，然后只更改第二个三角形的预设纹理填充效果。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100).Name = "shpOne"
    shapes.AddShape(msoShapeIsoscelesTriangle, 150, 10, 100, 100).Name = "shpTwo"
    shapes.AddShape(msoShapeIsoscelesTriangle, 300, 10, 100, 100).Name = "shpThree"
    let shape = shapes.Range(["shpOne", "shpTwo", "shpThree"]).Group()
    shape.Fill.PresetTextured(msoTextureBlueTissuePaper)
    shape.GroupItems.Item(2).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例显示 GroupShapes 集合中第一个形状的宽度。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    alert(shape.GroupItems.Item(1).Width)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/GroupShapes/member/Item) | 从集合中返回一个对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/GroupShapes/member/Range) | 返回一个 **ShapeRange** 对象，它代表 **Shapes** 集合中形状的子集。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/GroupShapes/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/GroupShapes/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/GroupShapes/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/GroupShapes/member/Parent) | 返回指定对象的父对象。只读。 |