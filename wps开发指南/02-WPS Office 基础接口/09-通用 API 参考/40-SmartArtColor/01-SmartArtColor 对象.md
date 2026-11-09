# SmartArtColor 对象

为 SmartArt 图表选择配色方案。

## 说明


模拟 WPS Office 功能区用户界面中“SmartArt 工具”选项卡上“设计”组内的“更改颜色”命令。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的配色方案。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.Color = Application.SmartArtColors.Item(1)
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口中所选的第一张幻灯片的第一个 SmartArt 图形的配色方案的名称。*/
function test() {
    let smartArtColor = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.Color
    alert(smartArtColor.Name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/member/Application) | 获取一个 **Application** 对象，该对象代表 **SmartArtColor** 对象的容器应用程序。只读。 |
| [Category](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/member/Category) | 检索与 SmartArt 颜色样式关联的主类别名称。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建了此对象的应用程序。只读。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/member/Id) | 检索关联的 SmartArt 颜色样式的唯一 Id。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/member/Name) | 检索 SmartArt 颜色样式的字符串名称。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/member/Parent) | 返回调用对象。只读。 |