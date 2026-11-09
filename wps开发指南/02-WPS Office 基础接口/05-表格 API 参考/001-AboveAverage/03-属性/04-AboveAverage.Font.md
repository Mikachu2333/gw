# AboveAverage.Font

返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，该对象在条件格式规则的计算结果为 **True** 时指定字体格式。只读。



## 语法

express.**Font**

express   一个代表 **AboveAverage** 对象的变量。

## 类型

Font

## 说明


条件格式对象并不支持 **Font** 对象的所有属性。您可以设置字体样式、下划线、颜色和删除线属性。



## 示例


```JavaScript
/*本示例设置活动工作表上区域 B1:B10 中第一个（AboveAverage）条件格式的特定文本的字体的颜色和字号。*/
function test() {
    let aboveAverage = ActiveSheet.Range("B1:B10").FormatConditions.Item(1)
    aboveAverage.Font.ColorIndex = 4
    aboveAverage.Font.Size = 15
}
```


```JavaScript
/*本示例将活动工作表上区域 B1:B10 中第二个（AboveAverage）条件格式特定文本的字体设置为加粗和倾斜。*/
function test() {
    let aboveAverage = ActiveSheet.Range("B1:B10").FormatConditions.Item(2)
    aboveAverage.Font.Bold = true
    aboveAverage.Font.Italic = true
}
```
