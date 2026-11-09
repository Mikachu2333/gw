# SmartArt.QuickStyle

检索或设置应用到 SmartArt 图形的 SmartArt 快速样式（ **[SmartArtQuickStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/obj)** 对象），可读/写 。



## 语法

express.**QuickStyle**

express   一个代表 **SmartArt** 对象的变量。

## 类型

SmartArtQuickStyle

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的快速样式。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.QuickStyle = Application.SmartArtQuickStyles.Item(1)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口中所选的第一张幻灯片的第一个 SmartArt 图形的快速样式。*/
function test() {
    let smartArt = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt
    smartArt.QuickStyle = Application.SmartArtQuickStyles.Item(5)
}
```
