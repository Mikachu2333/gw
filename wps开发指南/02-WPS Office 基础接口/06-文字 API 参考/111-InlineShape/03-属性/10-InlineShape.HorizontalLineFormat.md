# InlineShape.HorizontalLineFormat

返回一个 **HorizontalLineFormat** 对象，该对象包含指定的 **InlineShape** 对象的水平线的格式。只读。



## 语法

express.**HorizontalLineFormat**

express   一个代表 **InlineShape** 对象的变量。

## 类型

HorizontalLineFormat

## 示例


```JavaScript
/*本示例将第一个水平线的长度设定为窗口宽度的 50%。*/
function test() {
    ActiveDocument.InlineShapes.Item(1).HorizontalLineFormat.PercentWidth = 50
}
```


```JavaScript
/*本示例将选中的第二个水平线的对齐方式设置为左对齐。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    inlineShape.HorizontalLineFormat.Alignment = wdHorizontalLineAlignLeft
}
```
