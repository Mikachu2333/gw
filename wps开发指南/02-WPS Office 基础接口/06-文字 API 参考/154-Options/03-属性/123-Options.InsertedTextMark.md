# Options.InsertedTextMark

返回或设置启用修订时 WPS 设置插入文本格式的方式（ **TrackRevisions** 属性为 **True** ）。 **WdInsertedTextMark** 类型，可读写。



## 语法

express.**InsertedTextMark**

express   一个代表 **Options** 对象的变量。

## 类型

WdInsertedTextMark

## 说明


如果未启用修订，则会忽略该属性。将该属性与 **InsertedTextColor** 属性结合使用可控制文档中插入文本的外观。

要在编辑过程中查看插入文本的格式， **ShowRevisions** 属性必须为 **True** 。如果要 WPS 在打印文档时使用插入文本的格式， **PrintRevisions** 属性必须为 **True** 。



## 示例


```JavaScript
/*本示例设置 WPS 为插入的文本应用斜体格式。*/
function test() {
    Options.InsertedTextMark = wdInsertedTextMarkItalic
}
```


```JavaScript
/*本示例设置 WPS 为插入的文本应用加粗格式（如果尚未将其设置为加粗格式）。*/
function test() {
    if (Options.InsertedTextMark != wdInsertedTextMarkBold) {
        Options.InsertedTextMark = wdInsertedTextMarkBold
    } else {
        alert("Inserted text is already bold!")
    }
}
```
