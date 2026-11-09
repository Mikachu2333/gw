# SmartArt.Color

检索或设置应用到 SmartArt 图形的 **[SmartArtColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/obj)** 颜色样式。可读/写。



## 语法

express.**Color**

express   一个代表 **SmartArt** 对象的变量。

## 类型

SmartArtColor

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的配色方案。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.Color = Application.SmartArtColors.Item(1)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口中所选的第一张幻灯片的第一个 SmartArt 图形的配色方案。*/
function test() {
    let smartArt = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt
    smartArt.Color = Application.SmartArtColors.Item(3)
}
```
