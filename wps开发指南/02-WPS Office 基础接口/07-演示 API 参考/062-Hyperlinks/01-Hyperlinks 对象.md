# Hyperlinks 对象

幻灯片或母版上所有 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/obj)** 对象的集合。

## 说明


使用 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Hyperlinks)** 属性返回 **Hyperlinks** 集合。


## 示例


```JavaScript
/*本示例更新活动演示文稿中第一张幻灯片上具有指定网址的所有超链接。*/
function test() {
    let hyperlinks = ActivePresentation.Slides.Item(1).Hyperlinks
    for (let i = 1; i <= hyperlinks.Count; i++) {
        if (hyperlinks.Item(i).Address == "https://www.wps.cn/") {
            hyperlinks.Item(i).Address = "https://platform.wps.cn/"
        }
    }
}
```
使用 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Hyperlink)** 属性创建超链接并将其添加到 **Hyperlinks** 集合中。



```JavaScript
/*本示例设置一个超链接，并将新的超链接添加到集合中，当用户在幻灯片放映期间单击活动演示文稿中第一张幻灯片上的第三个形状时，将跳转该超链接。请注意，如果第三个形状已经定义了鼠标单击超链接，则本示例将在添加新超链接时从集合中删除此超链接，因此 Hyperlinks 集合中的项数不会更改。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(3).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionHyperlink
    actionSetting.Hyperlink.Address = "https://www.wps.cn/"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/member/Item) | 从指定的 **Hyperlinks** 集合中返回单个 **Hyperlink** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/member/Parent) | 返回指定对象的父对象。 |