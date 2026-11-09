# Selection.SelectCell

选择包含当前选定内容的匹配单元格。



## 语法

express.**SelectCell()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


使用此方法，要求当前选定内容必须包含在一个单独单元格中。



## 示例


```JavaScript
/*本示例将选择包含当前选定内容的整个单元格。*/
function test() {
    Selection.SelectCell()
}
```


```JavaScript
/*本示例在第一个窗口选中包含当前选定内容的整个单元格，并将其外边框设置为双实线。*/
function test() {
    let selection = Windows.Item(1).Selection
    selection.SelectCell()
    selection.Borders.OutsideLineStyle = wdLineStyleDouble
}
```
