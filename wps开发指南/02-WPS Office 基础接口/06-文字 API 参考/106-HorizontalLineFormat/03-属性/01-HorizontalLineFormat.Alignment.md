# HorizontalLineFormat.Alignment

返回或设置一个 **WdHorizontalLineAlignment** 常量，该常量代表指定水平线的对齐方式。可读写。



## 语法

express.**Alignment**

express   一个代表 **HorizontalLineFormat** 对象的变量。

## 类型

WdHorizontalLineAlignment

## 示例


```JavaScript
/*本示例显示活动文档上第一条水平线的对齐方式是否为居中对齐。*/
function test() {
    alert(ActiveDocument.InlineShapes.Item(1).HorizontalLineFormat.Alignment == wdHorizontalLineAlignCenter)
}
```


```JavaScript
/*本示例将第一个文档上第二条水平线的对齐方式设置为左对齐。*/
function test() {
    let hzLineFormat = Documents.Item(1).InlineShapes.Item(2).HorizontalLineFormat
    hzLineFormat.Alignment = wdHorizontalLineAlignLeft
}
```
