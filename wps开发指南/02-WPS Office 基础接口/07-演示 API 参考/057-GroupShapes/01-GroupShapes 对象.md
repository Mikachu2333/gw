# GroupShapes 对象

代表组合形状中的各个形状。每个形状都由一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象代表。对本对象使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/member/Item)** 方法，可以在不取消分组的情况下处理组合中的各个形状。

## 说明


使用 **[GroupItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/GroupItems)** 属性返回 **GroupShapes** 集合。使用 **GroupItems** (*index*)（其中 *index* 是分组形状中单个形状的编号）从 **GroupShapes** 集合返回单个形状。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加三个三角形，并加以组合，为整个组合设置一种纹理填充，然后只更改第二个三角形的纹理填充。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100).Name = "shpOne"
    shapes.AddShape(msoShapeIsoscelesTriangle, 150, 10, 100, 100).Name = "shpTwo"
    shapes.AddShape(msoShapeIsoscelesTriangle, 300, 10, 100, 100).Name = "shpThree"
    let shape = shapes.Range(["shpOne", "shpTwo", "shpThree"]).Group()
    shape.Fill.PresetTextured(msoTextureBlueTissuePaper)
    shape.GroupItems.Item(2).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状组中最后一个形状的ID。*/
function test() {
    let groupShapes = ActivePresentation.Slides.Item(1).Shapes.Item(1).GroupItems
    alert(groupShapes.Item(groupShapes.Count).Id)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/member/Item) | 从指定的 **GroupShapes** 集合中返回单个 **Shape** 对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/member/Range) | 返回一个 **ShapeRange** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/member/Count) | 返回指定集合中的对象数目。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/member/Creator) | 返回 **Long** 类型值，该值代表创建指定对象的应用程序创建者代码，该代码由四个字符构成。例如，如果对象是在WPP 中创建的，则此属性返回一个十六进制数 50575054。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/member/Parent) | 返回指定对象的父对象。 |