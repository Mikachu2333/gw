# SmartArtQuickStyles 对象

代表 **[SmartArtQuickStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/obj)** 对象的集合。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的快速样式。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.QuickStyle = Application.SmartArtQuickStyles.Item(1)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 SmartArt 快速样式的名称。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.SmartArtQuickStyles.Count; i++) {
        let smartArtQuickStyle = Application.SmartArtQuickStyles.Item(i)
        str += smartArtQuickStyle.Name + "\n"
    }
    alert(str)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/member/Item) | 在指定的索引处或通过指定的唯一 ID 来检索 **[SmartArtQuickStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/member/Application) | 获取一个 **Application** 对象，该对象代表 **SmartArtQuickStyles** 对象的容器应用程序。只读 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/member/Count) | 检索包含在 **[SmartArtQuickStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/obj)** 集合中的 **SmartArtQuickStyle** 对象数的计数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **SmartArtQuickStyles** 对象的应用程序。只读 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/member/Parent) | 返回调用对象。只读 |