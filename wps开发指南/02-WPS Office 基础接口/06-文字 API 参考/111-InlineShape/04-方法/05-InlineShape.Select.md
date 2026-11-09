# InlineShape.Select

选择指定的内嵌形状。



## 语法

express.**Select()**

express   一个代表 **InlineShape** 对象的变量。

## 返回值

void

## 说明


使用此方法之后，可用 **Selection** 属性处理所选项目。有关详细信息，请参阅处理 **Selection** 对象。



## 示例


```JavaScript
/*本示例选中活动文档上第一个内嵌形状。*/
function test() {
    ActiveDocument.InlineShapes.Item(1).Select()
}
```


```JavaScript
/*本示例选中第一个文档上第二个内嵌形状，并显示所选内容的类型是否为内嵌形状。*/
function test() {
    let inlineShape = Documents.Item(1).InlineShapes.Item(2)
    inlineShape.Select()
    alert(Selection.Type == wdSelectionInlineShape)
}
```
