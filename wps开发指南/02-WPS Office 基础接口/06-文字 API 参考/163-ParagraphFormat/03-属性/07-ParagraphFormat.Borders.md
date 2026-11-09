# ParagraphFormat.Borders

返回一个 **Borders** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例为活动文档第一个段落添加双线下边框。*/
function test() {
    let border = Application.ActiveDocument.Paragraphs.Item(1).Format.Borders.Item(wdBorderBottom)
    border.LineStyle = wdLineStyleDouble
    border.LineWidth = wdLineWidth025pt
}
```


```JavaScript
/*本示例将选定的所有段落的边框设置为显示状态。*/
function test() {
    Selection.ParagraphFormat.Borders.Enable = true
}
```
