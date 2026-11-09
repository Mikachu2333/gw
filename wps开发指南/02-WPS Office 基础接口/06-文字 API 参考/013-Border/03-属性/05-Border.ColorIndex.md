# Border.ColorIndex

返回或设置指定边框或字体对象的颜色。 **WdColorIndex** 类型，可读写。



## 语法

express.**ColorIndex**

express   一个代表 **Border** 对象的变量。

## 类型

WdColorIndex

## 说明


 **wdByAuthor** 常量对边框和字体对象无效。



## 示例


```JavaScript
/*本示例为第一个表格的每个单元格添加红虚线边框。*/
function test() {
    if (Application.ActiveDocument.Tables.Count >= 1) {
        let borders = Application.ActiveDocument.Tables.Item(1).Borders
        for (let i = 1; i <= borders.Count; i++) {
            borders.Item(i).ColorIndex = wdRed
            borders.Item(i).LineStyle = wdLineStyleDashDot
            borders.Item(i).LineWidth = wdLineWidth075pt
        }
    }
}
```


```JavaScript
/*本示例设置活动文档的第一个段落的底部框线的线型和颜色。*/
function test() {
    let border = ActiveDocument.Paragraphs.Item(1).Borders.Item(wdBorderBottom)
    border.LineStyle = wdLineStyleDouble
    border.ColorIndex = wdYellow
}
```
