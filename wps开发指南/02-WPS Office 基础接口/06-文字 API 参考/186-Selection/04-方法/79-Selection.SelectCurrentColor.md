# Selection.SelectCurrentColor

向前扩展选定内容，直至遇到另一种颜色的文字为止。



## 语法

express.**SelectCurrentColor()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例从文档的开头将所选内容向前扩展，直至遇到另一种颜色的第一个字符，然后显示选定部分中的字符数。*/
function test() {
    Selection.HomeKey(wdStory, wdMove)
    Selection.SelectCurrentColor()
    let number = Selection.Text.length
    alert(`Contiguous characters with the same color: ${number}`)
}
```


```JavaScript
/*本示例在第一个窗口中向前扩展选定内容，直至遇到另一种颜色的文字为止，然后删除选中的文字。*/
function test() {
    Windows.Item(1).Selection.SelectCurrentColor()
    Windows.Item(1).Selection.Delete()
}
```
