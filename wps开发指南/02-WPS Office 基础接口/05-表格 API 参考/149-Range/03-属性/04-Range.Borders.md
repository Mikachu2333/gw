# Range.Borders

返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/obj)** 集合，它代表样式或单元格区域（包括定义为条件格式一部分的区域）的边框。



## 语法

express.**Borders**

express   一个代表 **Range** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*此示例将 Sheet1 中单元格 B2 的底部边框颜色设置为红色细边框。*/
function test() {
    let b2_bottom = Worksheets.Item("Sheet1").Range("B2").Borders.Item(xlEdgeBottom)
    b2_bottom.LineStyle = xlContinuous
    b2_bottom.Weight = xlThin
    b2_bottom.ColorIndex = 3
}
```


```JavaScript
/*本示例将 A1:E3 单元格区域的边框设置为绿色、中等粗细，并使颜色变暗*/
function test() {
    Range("A1:E3").Borders.Color = RGB(0, 255, 0)
    Range("A1:E3").Borders.Weight = xlMedium
    Range("A1:E3").Borders.TintAndShade = -1
}
```
