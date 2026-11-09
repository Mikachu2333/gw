# SoftEdgeFormat 对象

表示 Office 图形中的软边缘效果。

## 说明


柔化边缘效果在对象的边缘周围创建掩码，并将对象与透明边缘混合。结果是淡化或“羽化”边缘。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第一个形状的柔化边缘效果的类型。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.SoftEdge.Type = msoSoftEdgeType6
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口所选的第一张幻灯片的第一个形状的柔化边缘效果的大小。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    shape.SoftEdge.Radius = 8
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SoftEdgeFormat/member/Application) | 返回一个代表 WPS Office 应用程序的 Application对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SoftEdgeFormat/member/Creator) | 返回表示用于创建指定对象的应用程序的 32 位整数。只读 **。** |
| [Radius](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SoftEdgeFormat/member/Radius) | 返回或设置 **Single** 类型值，该值代表形状的柔化边缘效果的大小。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SoftEdgeFormat/member/Type) | 获取或设置 **SoftEdgeFormat** 对象的类型。可读写。 |