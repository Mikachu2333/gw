# Selection.TypeParagraph

插入一个新的空段落。



## 语法

express.**TypeParagraph()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


本方法与 Enter 的功能相同。如果选定内容没有折叠为一个插入点，则新段落取代选定内容。

用 **InsertParagraphAfter** 或 **InsertParagraphBefore** 方法可插入一个新段而不删除选定内容。



## 示例


```JavaScript
/*本示例将选定内容折叠至末尾，然后在其后插入一个新段落。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    Selection.TypeParagraph()
}
```


```JavaScript
/*本示例在第一个窗口的插入点插入一个新段落。*/
function test() {
    Windows.Item(1).Selection.TypeParagraph()
}
```
