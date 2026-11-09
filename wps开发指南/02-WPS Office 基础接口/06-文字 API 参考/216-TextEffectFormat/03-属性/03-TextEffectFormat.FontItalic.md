# TextEffectFormat.FontItalic

将艺术字文字设置为倾斜。 **MsoTriState** 类型，可读写。



## 语法

express.**FontItalic**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将活动文档中名为“Text2”的艺术字形状的字体设置为倾斜。*/
function test() {
    ActiveDocument.Shapes('Text2').TextEffect.FontItalic = msoTrue
}
```


```JavaScript
/*本示例显示选中的第一个艺术字形状的字体是否为斜体。*/
function test() {
    alert(Selection.ShapeRange.Item(1).TextEffect.FontItalic == msoTrue)
}
```
