# XMLSchemaReferences.ShowPlaceholderText

返回一个 **Boolean** 类型的值，该值代表在文档中是否显示 XML 元素的自动占位符文本。可读写。



## 语法

express.**ShowPlaceholderText**

express   一个代表 **XMLSchemaReferences** 对象的变量。

## 类型

boolean

## 说明


如果为 **True** ，则显示占位符文本。如果为 **False** ，则隐藏占位符文本。



## 示例


```JavaScript
/*本示例在活动文档中切换显示占位符文本。*/
function test() {
    ActiveDocument.XMLSchemaReferences.ShowPlaceholderText = !ActiveDocument.XMLSchemaReferences.ShowPlaceholderText
}
```


```JavaScript
/*本示例显示第一个文档中的XML架构是否展示自动占位符文本。*/
function test() {
    alert(Documents.Item(1).XMLSchemaReferences.ShowPlaceholderText)
}
```
