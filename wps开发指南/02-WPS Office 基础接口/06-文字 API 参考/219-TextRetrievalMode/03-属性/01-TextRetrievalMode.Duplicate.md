# TextRetrievalMode.Duplicate

返回一个只读 **TextRetrievalMode** 对象，该对象代表与从 **Range** 对象检索文字相关的选项。



## 语法

express.**Duplicate**

express   一个代表 **TextRetrievalMode** 对象的变量。

## 类型

TextRetrievalMode

## 说明


可以使用 **Duplicate** 属性来获取重复对象的所有属性的设置。可将 **Duplicate** 属性返回的对象赋给另一个相同类型的对象，从而一次应用该对象的所有设置。在将重复对象赋给另一个对象之前，可更改重复对象的任何属性，而不会影响源文字。



## 示例


```JavaScript
/*本示例创建活动文档上第一个句子的检索选项的副本，并设置该副本选项不获取隐藏文字。*/
function test() {
    let trMode = ActiveDocument.Sentences.Item(1).TextRetrievalMode.Duplicate
    trMode.IncludeHiddenText = false
}
```


```JavaScript
/*本示例创建所选内容的检索选项的副本，并显示该副本选项的检索视图是否为wdPrintView。*/
function test() {
    let trMode = Selection.Range.TextRetrievalMode.Duplicate
    alert(trMode.ViewType == wdPrintView)
}
```
