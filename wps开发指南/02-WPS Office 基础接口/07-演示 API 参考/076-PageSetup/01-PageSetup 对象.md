# PageSetup 对象

包含演示文稿中有关幻灯片、备注页、讲义及大纲的页面设置的信息。

## 说明


使用 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PageSetup)** 属性返回 **PageSetup** 对象。


## 示例


```JavaScript
/*本示例将活动演示文稿中所有幻灯片设为宽 11 英寸、高 8.5 英寸，并将演示文稿的幻灯片编号设为从 17 开始。*/
function test() {
    let pageSetup = Application.ActivePresentation.PageSetup
    pageSetup.SlideWidth = 11 * 72
    pageSetup.SlideHeight = 8.5 * 72
    pageSetup.FirstSlideNumber = 17
}
```


```JavaScript
/*本示例显示第一个演示文稿的所有幻灯片的展示或打印时的方向。*/
function test() {
    switch (Presentations.Item(1).PageSetup.SlideOrientation) {
        case msoOrientationHorizontal:
            alert("水平方向（横向）")
            break
        case msoOrientationMixed:
            alert("混和方向")
            break
        case msoOrientationVertical:
            alert("垂直方向（纵向）")
            break
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [FirstSlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/FirstSlideNumber) | 返回或设置演示文稿中第一张幻灯片的编号。可读/写。 |
| [NotesOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/NotesOrientation) | 返回或设置指定演示文稿的备注页、讲义和大纲的屏幕显示和打印方向。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/Parent) | 返回指定对象的父对象。 |
| [SlideHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/SlideHeight) | 以磅为单位返回或设置幻灯片的高度。可读/写。 |
| [SlideOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/SlideOrientation) | 返回或设置指定演示文稿中幻灯片的屏幕显示和打印方向。可读/写。 |
| [SlideSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/SlideSize) | 返回或设置指定演示文稿的幻灯片大小。可读/写。 |
| [SlideWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/SlideWidth) | 以磅为单位返回或设置幻灯片的宽度。可读/写。 |