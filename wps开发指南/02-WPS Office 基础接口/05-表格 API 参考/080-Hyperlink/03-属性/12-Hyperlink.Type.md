# Hyperlink.Type

返回一个包含 **MsoHyperlinkType** 常量的 **Long** 值，它代表 HTML 框架的位置。



## 语法

express.**Type**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例判断工作表Sheet1中第一项超链接是否在单元格中*/
function test() {
    let hl = Application.Worksheets.Item("Sheet1").Hyperlinks.Item(1)
    if (hl.Type == msoHyperlinkRange) {
        MsgBox('超链接在单元格中')
    } else {
        MsgBox('超链接不在单元格中')
    }
}
```


```JavaScript
/*本示例显示第一个形状的超链接是否属于 Shape 对象。*/
function test() {
    let hl = Application.Worksheets.Item(1).Shapes.Item(1).Hyperlink
    MsgBox(hl.Type == msoHyperlinkShape)
}
```
