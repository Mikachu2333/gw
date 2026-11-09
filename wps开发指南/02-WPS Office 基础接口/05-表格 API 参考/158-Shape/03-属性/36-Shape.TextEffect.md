# Shape.TextEffect

该属性返回一个 **[TextEffectFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/obj)** 对象，它包含指定形状的文本效果格式属性。



## 语法

express.**TextEffect**

express   一个代表 **Shape** 对象的变量。

## 类型

TextEffectFormat

## 示例


```JavaScript
/*此示例中，将第一张工作表中第一个形状的文本效果的字体设置为斜体。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    shape.TextEffect.FontItalic = msoTrue
}
```


```JavaScript
/*此示例中，将活动工作表中第三个形状的文本效果的字号设置为16。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    shape.TextEffect.FontSize = 16
}
```
