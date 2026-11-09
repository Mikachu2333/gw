# TextFrame.NoTextRotation

如果在旋转形状时不应旋转文本框架中的文本，则该属性值为 **msoTrue** 。可读/写 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型。



## 语法

express.**NoTextRotation**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoTriState

## 说明


仅可使用 **MsoTriState** 常量 **msoFalse** 和 **msoTrue** 来设置该属性。



## 示例


```JavaScript
/*本示例判断如果所选形状中文本框架的文本不随文本框架一起旋转，则将该文本框架的左边距设置为 30 磅。*/
function test() {
    let textFrame = Selection.ShapeRange.TextFrame
    if (textFrame.NoTextRotation) {
        textFrame.MarginLeft = 30
    }
}
```


```JavaScript
/*本示例设置活动文档的第一个形状的文本框架中的文本随文本框架一起旋转。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(1).TextFrame
    textFrame.NoTextRotation = msoFalse
}
```
