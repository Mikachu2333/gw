# Selection.SelectCurrentTabs

向前扩展选定内容，直至遇到另一种制表位的段落为止。



## 语法

express.**SelectCurrentTabs()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选定活动文档的第二段，然后将所选内容扩展到所有包含相同制表位的段落。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(2).Range
    range.Select()
    Selection.SelectCurrentTabs()
}
```


```JavaScript
/*本示例选定具有相同制表位的段落，并检索第一个制表位的位置，将所选内容移至具有相同制表位的下一个区域，然后将第一组段落中设置的制表位添至当前所选内容中。*/
function test() {
    Selection.SelectCurrentTabs()
    let position = Selection.Paragraphs.TabStops.Item(1).Position
    Selection.Collapse(wdCollapseEnd)
    Selection.SelectCurrentTabs()
    Selection.Paragraphs.TabStops.Add(position)
}
```
