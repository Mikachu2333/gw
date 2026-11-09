# Border.Color

返回或设置指定 **Border** 对象的 24 位颜色。



## 语法

express.**Color**

express   一个代表 **Border** 对象的变量。

## 类型

WdColor

## 说明


可以是任何有效的 **WdColor** 常量，或者 JavaScript 的 **RGB** 函数的返回值



## 示例


```JavaScript
/*本示例在第一个表格中每个单元格周围添加靛蓝色的点划线边框。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        let borders = ActiveDocument.Tables.Item(1).Borders
        for (let i = 1; i <= borders.Count; i++) {
            borders.Item(i).Color = wdColorIndigo
            borders.Item(i).LineStyle = wdLineStyleDashDot
            borders.Item(i).LineWidth = wdLineWidth075pt
        }
    }
}
```


```JavaScript
/*本示例设置活动文档上第一个表格的上框线的颜色和样式。*/
function test() {
    let border = ActiveDocument.Tables.Item(1).Borders.Item(wdBorderTop)
    border.Color = RGB(50, 50, 150)
    border.LineStyle = wdLineStyleEmboss3D
}
```
