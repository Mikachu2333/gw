# GroupShapes 对象

代表组合形状中的单个形状。组合形状中包含的每个形状都由一个 **Shape** 对象表示。

## 说明


使用 **GroupItems** 属性可返回 **GroupShapes** 集合。 使用 **GroupItems** (Index) ，其中 Index 是分组形状中单个形状的编号，可从 **GroupShapes** 集合返回单个形状。


## 示例


```JavaScript
/*本示例向活动文档添加三个三角形，并加以组合，为整个组合设置一种颜色，然后只更改第二个三角形的颜色。*/
function test() {
    let shapes = ActiveDocument.Shapes
    shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100).Name = "shpOne"
    shapes.AddShape(msoShapeIsoscelesTriangle, 150, 10, 100, 100).Name = "shpTwo"
    shapes.AddShape(msoShapeIsoscelesTriangle, 300, 10, 100, 100).Name = "shpThree"
    let shape = shapes.Range(["shpOne", "shpTwo", "shpThree"]).Group()
    shape.Fill.PresetTextured(msoTextureBlueTissuePaper)
    shape.GroupItems.Item(2).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状组中第一个形状的类型是否为msoAutoShape。*/
function test() {
    let groupShapes = Documents.Item(1).Shapes.Item(1).GroupItems
    alert(groupShapes.Item(1).Type == msoAutoShape)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GroupShapes/member/Item) | 返回集合中的单个 **Shape** 对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GroupShapes/member/Range) | 返回一个 **ShapeRange** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GroupShapes/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GroupShapes/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中图形的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GroupShapes/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GroupShapes/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **GroupShapes** 对象的父对象。 |