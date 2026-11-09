# TextEffectFormat.FontBold

设置指定艺术字图形的字体为加粗。 **MsoTriState** 类型，可读写。



## 语法

express.**FontBold**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例如果活动文档的第三个形状为艺术字，则将它的字体加粗。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(3)
    if (shape.Type == msoTextEffect) {
        shape.TextEffect.FontBold = msoTrue
    }
}
```


```JavaScript
/*本示例将选中的第一个形状的字体取消加粗。*/
function test() {
    Selection.ShapeRange.Item(1).TextEffect.FontBold = msoFalse
}
```
