# View 对象

代表指定文档窗口中当前编辑的视图。

## 说明


 **View** 对象可以代表任何文档窗口视图：普通视图、幻灯片视图、大纲视图、幻灯片浏览视图、备注页视图、幻灯片母版视图、讲义母版视图或备注母版视图。 **View** 对象的某些属性和方法仅在特定视图中使用。如果试图使用不适合 **View** 对象的属性或方法，将产生错误。

使用 **[DocumentWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/obj)** 对象的 **View** 属性返回 **View** 对象。


## 示例


```JavaScript
/*本示例设置第一个窗口的大小，并将显示比例，以适应新窗口大小。*/
function test() {
    let window = Windows.Item(1)
    window.Height = 200
    window.Width = 250
    window.View.ZoomToFit = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口视图的类型是否为ppViewNotesMaster。*/
function test() {
    alert(ActiveWindow.View.Type == ppViewNotesMaster)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [GotoSlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/GotoSlide) | 切换到指定的幻灯片。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/Paste) | 将剪贴板上的内容粘贴到活动视图中。试图将对象粘贴到不接受它的视图中会导致错误。 |
| [PasteSpecial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/PasteSpecial) | 将剪贴板上的当前内容粘贴到 **View** 对象代表的视图中。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/PrintOut) | 打印指定的演示文稿。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [PrintOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/PrintOptions) | 返回一个 **[PrintOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/obj)** 对象，该对象代表与指定演示文稿共同保存的打印选项。只读。 |
| [Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/Slide) | 返回或设置一个 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 对象，该对象代表在指定文档窗口视图中当前显示的幻灯片。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/Type) | 返回一个 PpViewType 常量，该常量代表视图的类型。只读。 |
| [Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/Zoom) | 以百分比形式返回或设置指定视图的缩放设置。可读/写 。 |
| [ZoomToFit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/ZoomToFit) | 确定每当对文档窗口大小进行调整后，是否缩放视图以适应文档窗口的尺寸。可读/写。 |