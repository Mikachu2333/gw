# Range.Style

返回或设置一个包含 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj)** 对象的 **Variant** 值，它代表指定区域的样式。



## 语法

express.**Style**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*此示例对工作表 sheet1 中的单元格 A1 应用“常规”样式。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1").Style = "Normal"
}
```


```JavaScript
/*如果工作表 sheet1 中的单元格 B4 当前应用的是“常规”样式，此示例将对其应用“百分比”样式。*/
function test() {
    if (Worksheets.Item("Sheet1").Range("B4").Style == "Normal") {
        Worksheets.Item("Sheet1").Range("B4").Style = "Percent"
    }
}
```
