# SmartArt 对象

用于与 SmartArt 图形交互的顶级类。


## 示例


```JavaScript
/*本示例运行于演示组件，将活动窗口中所选的第一张幻灯片的第一个 SmartArt 图形设置为从右向左的状态。*/
function test() {
    let smartArt = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt
    smartArt.Reverse = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口中所选的第一张幻灯片的第一个 SmartArt 图形的配色方案。*/
function test() {
    let smartArt = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt
    smartArt.Color = Application.SmartArtColors.Item(6)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/Reset) | 将 SmartArt 图形重置为其原始状态。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/AllNodes) | 检索包含 SmartArt 图表内部所有节点的 **[SmartArtNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/obj)** 对象。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/Application) | 获取一个 **Application** 对象，该对象代表 **SmartArt** 对象的容器应用程序。只读。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/Color) | 检索或设置应用到 SmartArt 图形的 **[SmartArtColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/obj)** 颜色样式。可读/写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **SmartArt** 对象的应用程序。只读。 |
| [Layout](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/Layout) | 检索或设置与 SmartArt 图形关联的 SmartArt 布局（ **[SmartArtLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/obj)** 对象）。可读/写。 |
| [Nodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/Nodes) | 检索 SmartArt 图表中根节点（ **[SmartArtNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/obj)** ）的子级。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/Parent) | 返回调用对象。只读。 |
| [QuickStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/QuickStyle) | 检索或设置应用到 SmartArt 图形的 SmartArt 快速样式（ **[SmartArtQuickStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/obj)** 对象），可读/写 。 |
| [Reverse](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/member/Reverse) | 获取或设置 SmartArt 图表与（从左到右）LTR 或（从右到左）RTL（如果该图表支持反向）有关的状态。可读/写。 |