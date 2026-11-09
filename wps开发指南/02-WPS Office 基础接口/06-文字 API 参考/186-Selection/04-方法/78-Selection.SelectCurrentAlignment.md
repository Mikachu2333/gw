# Selection.SelectCurrentAlignment

向前扩展选定部分，直到遇到另一种段落对齐方式为止。



## 语法

express.**SelectCurrentAlignment()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


段落的对齐方式有四种：左对齐、居中、右对齐和两端对齐。



## 示例


```JavaScript
/*本示例将插入点置于后面第一个与当前段落的对齐方式有区别的段落开头。如果全文的对齐方式全部相同，则本示例将所选内容移至文档末尾，并显示一条消息。*/
function test() {
    Selection.SelectCurrentAlignment()
    Selection.Collapse(wdCollapseEnd)
    if (Selection.End == ActiveDocument.Content.End - 1) {
        alert("No change in alignment found.")
    }
}
```


```JavaScript
/*本示例在第一个窗口中向前扩展选定部分，直到遇到另一种段落对齐方式为止，然后删除选中的文字。*/
function test() {
    Windows.Item(1).Selection.SelectCurrentAlignment()
    Windows.Item(1).Selection.Delete()
}
```
