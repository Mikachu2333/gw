# Range.DisplayFormat

返回代表指定区域的显示设置的 **[DisplayFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/obj)** 对象。只读



## 语法

express.**DisplayFormat**

express   一个代表 **Range** 对象的变量。

## 类型

DisplayFormat

## 示例


```JavaScript
/*本示例将 A1 单元格的字体加粗，并使用 DisplayFormat 检查*/
function test() {
    Range("A1").Font.Bold = true
    alert(Range("A1").DisplayFormat.Font.Bold)
}
```


```JavaScript
/*本示例将 C5 单元格的内部颜色设置为红色，并使用 DisplayFormat 检查*/
function test() {
    Range("C5").Interior.Color = RGB(255, 0, 0)
    alert(Range("C5").DisplayFormat.Interior.Color)
}
```
