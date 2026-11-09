# SmartArtQuickStyle 对象

代表 SmartArt 快速样式。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的快速样式。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.QuickStyle = Application.SmartArtQuickStyles.Item(1)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 SmartArt 快速样式的名称和说明。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.SmartArtQuickStyles.Count; i++) {
        let smartArtQuickStyle = Application.SmartArtQuickStyles.Item(i)
        str += `${smartArtQuickStyle.Name}\t${smartArtQuickStyle.Description}\n`
    }
    alert(str)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/member/Application) | 获取一个 **Application** 对象，该对象代表 **SmartArtQuickStyle** 对象的容器应用程序。只读 |
| [Category](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/member/Category) | 检索与 SmartArt 快速样式关联的主类别名称。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **SmartArtQuickStyle** 对象的应用程序。只读 |
| [Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/member/Description) | 检索 SmartArt 快速样式的说明。只读。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/member/Id) | 检索关联的 SmartArt 快速样式的唯一 Id。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/member/Name) | 检索 SmartArt 快速样式的字符串名称。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/member/Parent) | 返回调用对象。只读 |