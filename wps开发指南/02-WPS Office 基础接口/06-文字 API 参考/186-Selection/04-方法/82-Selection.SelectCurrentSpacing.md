# Selection.SelectCurrentSpacing

向前扩展选定内容，直至遇到具有另一种行间距的段落为止。



## 语法

express.**SelectCurrentSpacing()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选定所有行间距相同的连续段落，并将行间距改为单倍行距。*/
function test() {
    Selection.SelectCurrentSpacing()
    Selection.ParagraphFormat.Space1()
}
```


```JavaScript
/*本示例在第一个窗口中向前扩展选定内容，直至遇到具有另一种行间距的段落为止，并将扩展后选中的文字进行加粗。*/
function test() {
    Windows.Item(1).Selection.SelectCurrentSpacing()
    Windows.Item(1).Selection.Font.Bold = msoTrue
}
```
