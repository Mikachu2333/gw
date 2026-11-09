# Borders.InsideLineStyle

返回或设置指定对象的内部边框。



## 语法

express.**InsideLineStyle**

express   一个代表 **Borders** 对象的变量。

## 类型

WdLineStyle

## 说明


如果指定对象应用了多种边框，则该属性返回 **wdUndefined** ；否则，返回 **False** 或 **WdLineStyle** 常量。可将该属性值设置为 **True** 、 **False** 或 **WdLineStyle** 常量。

如果为 **True** ，则样式设置为默认样式，线条宽度设置为默认线条宽度。可用 **DefaultBorderLineWidth** 和 **DefaultBorderLineStyle** 属性设置默认样式和线条宽度。

可用下列任何一种指令删除活动文档中第一个表格的内部边框。

```JavaScript
ActiveDocument.Tables(1).Borders.InsideLineStyle = wdLineStyleNone
ActiveDocument.Tables(1).Borders.InsideLineStyle = false
```



## 示例


```JavaScript
/*本示例在活动文档的第一个表格中的行列之间添加内边框。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        let table = ActiveDocument.Tables.Item(1)
        table.Borders.InsideLineStyle = true
    }
}
```


```JavaScript
/*本示例在活动文档的前 4 个段落之间添加边框。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Paragraphs.Item(1).Range.Start, ActiveDocument.Paragraphs.Item(4).Range.End)
    let borders = range.Borders
    borders.InsideLineStyle = wdLineStyleSingle
    borders.InsideLineWidth = wdLineWidth150pt
}
```
