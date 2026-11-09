# Selection.Start

返回或设置选定内容的起始字符位置。 **Long** 类型，可读写。



## 语法

express.**Start**

express   一个代表 **Selection** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **Selection** 对象具有起始字符位置和结束字符位置。起始字符位置是指距文档开头部分最近的字符位置。如果将该属性的值设置为大于 **End** 属性的值，则 **End** 属性值会设置为与 **Start** 属性值相同。

该属性返回起始字符相对于文档开头部分的位置。文本主体部分 ( **wdMainTextStory** ) 的起始字符位置为 0（零）。通过设置该属性可以更改选定内容、区域或书签的大小。



## 示例


```JavaScript
/*本示例通过起始和结束字符位置确定选定内容的长度。*/
function test() {
    let selectionLength = Selection.End - Selection.Start
}
```


```JavaScript
/*本示例设置第一个窗口选定内容的起始字符位置。*/
function test() {
    Windows.Item(1).Selection.Start = 2
}
```
