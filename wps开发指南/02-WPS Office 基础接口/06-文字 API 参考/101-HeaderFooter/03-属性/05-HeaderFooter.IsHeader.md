# HeaderFooter.IsHeader

如果指定的 **HeaderFooter** 对象是页眉，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**IsHeader**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例选择页脚并添加页码。*/
function test() {
    let view = ActiveDocument.ActiveWindow.ActivePane.View
    view.Type = wdPrintView
    view.SeekView = wdSeekCurrentPageHeader
    if (Selection.HeaderFooter.IsHeader) {
        ActiveDocument.ActiveWindow.ActivePane.View.SeekView = wdSeekCurrentPageFooter
    }
    Selection.HeaderFooter.PageNumbers.Add()
}
```


```JavaScript
/*本示例显示活动文档上第一节的第一个 HeaderFooter 对象是否为页眉。*/
function test() {
    let headerFooter = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterFirstPage)
    alert(headerFooter.IsHeader)
}
```
