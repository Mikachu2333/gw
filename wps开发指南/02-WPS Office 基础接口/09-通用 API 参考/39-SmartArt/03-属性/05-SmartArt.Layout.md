# SmartArt.Layout

检索或设置与 SmartArt 图形关联的 SmartArt 布局（ **[SmartArtLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/obj)** 对象）。可读/写。



## 语法

express.**Layout**

express   一个代表 **SmartArt** 对象的变量。

## 类型

SmartArtLayout

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的 SmartArt 布局。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.Layout = Application.SmartArtLayouts.Item(1)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口中所选的第一张幻灯片的第一个 SmartArt 图形的 SmartArt 布局。*/
function test() {
    let smartArt = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt
    smartArt.Layout = Application.SmartArtLayouts.Item(3)
}
```
