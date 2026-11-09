# TextEffectFormat.Alignment

返回或设置一个 **MsoTextEffectAlignment** 常量，该常量代表指定文本效果的对齐方式，可读写。



## 语法

express.**Alignment**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTextEffectAlignment

## 示例


```JavaScript
/*本示例将活动文档中第一个艺术字的文本效果的对齐方式设置为居中对齐。*/
function test() {
    ActiveDocument.Shapes.Item(1).TextEffect.Alignment = msoTextEffectAlignmentCentered
}
```


```JavaScript
/*本示例显示活动文档中第二个艺术字的文本效果的对齐方式是否为右对齐。*/
function test() {
    let textEffectFormat = ActiveDocument.Shapes.Item(2).TextEffect
    alert(textEffectFormat.Alignment == msoTextEffectAlignmentRight)
}
```
