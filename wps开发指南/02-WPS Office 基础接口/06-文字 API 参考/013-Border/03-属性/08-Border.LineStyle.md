# Border.LineStyle

返回或设置指定对象的边框样式。 **WdLineStyle** 类型，可读写。



## 语法

express.**LineStyle**

express   一个代表 **Border** 对象的变量。

## 类型

WdLineStyle

## 说明


如果是为单个字符或单词区域设置 **LineStyle** 属性，应选用字符边框。

如果是为一个或几个段落区域设置 **LineStyle** 属性，应选用段落边框。连续段落之间的边框可应用 **InsideLineStyle** 属性。

如果是为节设置 **LineStyle** 属性，应选用节中的页面边框。



## 示例


```JavaScript
/*如果所选内容是一个段落或折叠的选择内容，则此示例会在所选内容上方添加 0.75 磅的单段落边框。如果所选内容不包括段落，则在所选文本周围应用边框。*/
function test() {
    let border = Application.Selection.Borders.Item(wdBorderTop)
    border.LineStyle = wdLineStyleSingle
    border.LineWidth = wdLineWidth075pt
}
```


```JavaScript
/*此示例在活动文档中的每个框架下方添加 1.5 磅双边框。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Frames.Count; i++) {
        let border = ActiveDocument.Frames.Item(i).Borders.Item(wdBorderBottom)
        border.LineStyle = wdLineStyleDouble
        border.LineWidth = wdLineWidth150pt
    }
}
```


```JavaScript
/*本示例设置活动文档中的第四个单词的上框线的边框样式。*/
function test() {
    ActiveDocument.Words.Item(4).Borders.Item(wdBorderTop).LineStyle = wdLineStyleSingle
}
```
