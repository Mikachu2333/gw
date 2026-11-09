# Border.LineWidth

返回或设置对象边框的线条宽度。可读写。



## 语法

express.**LineWidth**

express   一个代表 **Border** 对象的变量。

## 类型

WdLineWidth

## 说明


如果对象没有边框或具有具有多个线宽的边框，则返回 **WdLineWidth** 常量或 **wdUndefined** 。如果指定的线宽不适用于边框的线条样式，则此属性将生成错误。要确定可用于特定线型的线宽，请参阅“ **边框和底纹** ”对话框（“ **格式** ”菜单）。



## 示例


```JavaScript
/*本示例为活动文档的第一个表格的第一行添加下边框。*/
function test() {
    if (Application.ActiveDocument.Tables.Count >= 1) {
        let border = Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Borders.Item(wdBorderBottom)
        border.LineStyle = wdLineStyleDouble
        border.LineWidth = wdLineWidth050pt
    }
}
```


```JavaScript
/*本示例为选定内容的左边添加红色波浪线边框。*/
function test() {
    let border = Application.Selection.Borders(wdBorderLeft)
    border.LineStyle = wdLineStyleSingleWavy
    border.LineWidth = wdLineWidth075pt
    border.ColorIndex = wdRed
}
```
