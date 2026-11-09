# TextFrame.HorizontalAnchor

返回或设置文本框架中文本的水平对齐方式。可读/写 **[MsoHorizontalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoHorizontalAnchor)** 类型。



## 语法

express.**HorizontalAnchor**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoHorizontalAnchor

## 示例


```JavaScript
/*本示例将活动文档中第一个形状中文本框架的文本的对齐方式设置为靠上居中。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(1).TextFrame
    textFrame.HorizontalAnchor = msoAnchorCenter
    textFrame.VerticalAnchor = msoAnchorTop
}
```


```JavaScript
/*本示例显示所选形状的文本框架中文本的水平对齐方式是否为msoAnchorNone。*/
function test() {
    alert(Selection.ShapeRange.TextFrame.HorizontalAnchor == msoAnchorNone)
}
```
