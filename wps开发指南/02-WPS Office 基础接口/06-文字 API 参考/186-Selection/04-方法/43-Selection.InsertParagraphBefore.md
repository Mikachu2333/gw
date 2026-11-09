# Selection.InsertParagraphBefore

在指定的所选内容或范围前插入一个新段落。



## 语法

express.**InsertParagraphBefore()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


使用此方法后，所选内容将扩展以包含新段落。



## 示例


```JavaScript
/*本示例在所选内容之前插入文字“Hello”作为一个新段落。*/
function test() {
    Selection.InsertParagraphBefore()
    Selection.InsertBefore("Hello")
}
```


```JavaScript
/*本示例在活动文档第二个段落前插入一个新段落。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.Collapse(wdCollapseStart)
    Selection.InsertParagraphBefore()
}
```
