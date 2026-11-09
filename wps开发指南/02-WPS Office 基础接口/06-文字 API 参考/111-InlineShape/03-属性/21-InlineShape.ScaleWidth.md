# InlineShape.ScaleWidth

参照指定内嵌形状的原始尺寸缩放其宽度。可读写 **Single** 类型。



## 语法

express.**ScaleWidth**

express   一个代表 **InlineShape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一个内嵌形状的高度和宽度设为其原高度和宽度的 150%。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    inlineShape.ScaleHeight = 150
    inlineShape.ScaleWidth = 150
}
```


```JavaScript
/*本示例将选中的第二个内嵌形状的宽度设置为原宽度的 50%。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    inlineShape.ScaleWidth = 50
}
```
