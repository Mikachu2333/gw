# TextFrame.WarpFormat

返回或设置指定文本框架的弯曲格式（文本的弯曲格式）。可读/写 **[MsoWarpFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoWarpFormat)** 类型。



## 语法

express.**WarpFormat**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoWarpFormat

## 示例


```JavaScript
/*本示例设置活动文档上第一个形状中文本框架的弯曲格式。*/
function test() {
    ActiveDocument.Shapes.Item(1).TextFrame.WarpFormat = msoWarpFormat15
}
```


```JavaScript
/*本示例显示所选形状中文本框的弯曲格式是否为msoWarpFormat1。*/
function test() {
    let textFrame = Selection.ShapeRange.TextFrame
    alert(textFrame.WarpFormat == msoWarpFormat1)
}
```
