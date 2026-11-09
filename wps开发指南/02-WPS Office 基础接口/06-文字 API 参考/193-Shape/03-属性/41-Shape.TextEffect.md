# Shape.TextEffect

返回一个 **TextEffectFormat** 对象，该对象包含指定形状的文本效果格式属性。只读。



## 语法

express.**TextEffect**

express   一个代表 **Shape** 对象的变量。

## 类型

TextEffectFormat

## 说明


该属性适用于代表艺术字的 **Shape** 对象。



## 示例


```JavaScript
/*本示例如果活动文档的第三个形状为艺术字，则将它的字形设为加粗。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(3)
    if (shape.Type == msoTextEffect) {
        shape.TextEffect.FontBold = true
    }
}
```


```JavaScript
/*本示例将第一个文档中第三个形状的文本效果的字号设置为16。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(3)
    shape.TextEffect.FontSize = 16
}
```
