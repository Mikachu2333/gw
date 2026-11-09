# Selection.SelectCurrentFont

向前扩展选定内容，直至遇到另一种字体或字号。



## 语法

express.**SelectCurrentFont()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例扩展所选内容，直至遇到另一不同的字体或字号。该示例使用 Grow 方法增大所选文字的下一个可用的字号。*/
function test() {
    Selection.SelectCurrentFont()
    Selection.Font.Grow()
}
```


```JavaScript
/*本示例在第一个窗口中向前扩展选定内容，直至遇到另一种字体或字号，并将扩展后选中的文字加粗。*/
function test() {
    Windows.Item(1).Selection.SelectCurrentFont()
    Windows.Item(1).Selection.Font.Bold = msoTrue
}
```
