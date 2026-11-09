# HorizontalLineFormat.WidthType

返回或设置指定的 **HorizontalLineFormat** 对象的宽度类型。 **WdHorizontalLineWidthType** 类型，可读写。



## 语法

express.**WidthType**

express   一个代表 **HorizontalLineFormat** 对象的变量。

## 类型

WdHorizontalLineWidthType

## 示例


```JavaScript
/*本示例在活动文档中添加两条横线，并判断其宽度类型是否为wdHorizontalLinePercentWidth，然后通知用户。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.AddHorizontalLineStandard()
    if (inlineShape.HorizontalLineFormat.WidthType == wdHorizontalLinePercentWidth) {
        alert("AddHorizontalLineStandard - WidthType = wdHorizontalLinePercentWidth")
    }
    let inlineShape1 = ActiveDocument.InlineShapes.AddHorizontalLine("D:\\示例\\img2.png")
    if (inlineShape1.HorizontalLineFormat.WidthType == wdHorizontalLinePercentWidth) {
        alert("AddHorizontalLine - WidthType = wdHorizontalLinePercentWidth")
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一条水平线的宽度类型为wdHorizontalLineFixedWidth。*/
function test() {
    let hzLineFormat = Documents.Item(1).InlineShapes.Item(1).HorizontalLineFormat
    hzLineFormat.WidthType = wdHorizontalLineFixedWidth
}
```
