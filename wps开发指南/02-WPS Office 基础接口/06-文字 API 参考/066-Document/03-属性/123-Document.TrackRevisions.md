# Document.TrackRevisions

如果在指定文档中跟踪更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**TrackRevisions**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例对活动文档进行设置，以便能标记对该文档的修改，并在屏幕上显示修订标记。*/
function test() {
    ActiveDocument.TrackRevisions = true
    ActiveDocument.ShowRevisions = true
}
```


```JavaScript
/*本示例将在没有启用修订标记的情况下插入文本。*/
function test() {
    if (!ActiveDocument.TrackRevisions) {
        Selection.InsertBefore("new text")
    }
}
```
