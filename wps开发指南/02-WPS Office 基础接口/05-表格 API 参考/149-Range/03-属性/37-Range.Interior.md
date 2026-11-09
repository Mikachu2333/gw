# Range.Interior

返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，它代表指定对象的内部。



## 语法

express.**Interior**

express   一个代表 **Range** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*此示例将 Sheet1 中 A1 单元格的内部颜色设为蓝绿色。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1").Interior.ColorIndex = 8 // Cyan
}
```


```JavaScript
/*本示例将 C5 单元格的颜色设置为红色，并将颜色变为最深*/
function test() {
    let interior = Range("C5").Interior
    interior.Color = RGB(255, 0, 0)
    interior.TintAndShade = -1
}
```
