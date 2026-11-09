# ShadowFormat.ForeColor

返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/obj)** 对象，该对象代表填充、线条或阴影的前景色。可读写。



## 语法

express.**ForeColor**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例将活动文档第一个形状的阴影的前景色设置为红色。*/
function test() {
    let shadowFormat = ActiveDocument.Shapes.Item(1).Shadow
    shadowFormat.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例设置所选内容中第一个内嵌形状的阴影的主题颜色和颜色的亮度。*/
function test() {
    let shadowFormat = Selection.InlineShapes.Item(1).Shadow
    shadowFormat.ForeColor.ObjectThemeColor = wdThemeColorAccent4
    shadowFormat.ForeColor.Brightness = 1
}
```
