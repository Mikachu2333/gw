# SmartArtLayout 对象

代表 SmartArt 图表。

## 说明


选项包括基本块列表、图片题注列表、垂直项目符号列表等。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的 SmartArt 布局。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.Layout = Application.SmartArtLayouts.Item(1)
}
```


```JavaScript
/*本示例运行于各组件，显示第一个 SmartArt 布局的名称、唯一 Id和关联的主类别名称。*/
function test() {
    let smartArtLayouts = Application.SmartArtLayouts
    alert(`SmartArt 布局的名称：${smartArtLayouts.Item(1).Name}\nSmartArt 布局的唯一 Id：${smartArtLayouts.Item(1).Id}\nSmartArt 布局关联的主类别名称：${smartArtLayouts.Item(1).Category}`)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/member/Application) | 获取一个 **Application** 对象，该对象代表 **SmartArtLayout** 对象的容器应用程序。只读。 |
| [Category](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/member/Category) | 检索与 SmartArt 布局关联的主类别名称。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **SmartArtLayout** 对象的应用程序。只读。 |
| [Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/member/Description) | 检索 SmartArt 布局的说明。只读。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/member/Id) | 检索关联的 SmartArt 布局的唯一 Id。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/member/Name) | 检索 SmartArt 布局的字符串名称。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/member/Parent) | 返回调用对象。只读。 |