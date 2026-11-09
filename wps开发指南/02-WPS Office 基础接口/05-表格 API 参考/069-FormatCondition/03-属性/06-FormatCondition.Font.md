# FormatCondition.Font

返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，它代表指定对象的字体。



## 语法

express.**Font**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个条件格式的特定文本的字体的颜色和字号。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.Font.ColorIndex = 4
    formatCondition.Font.Size = 15
}
```


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第一个条件格式特定文本的字体设置为加粗和倾斜。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.Font.Bold = true
    formatCondition.Font.Italic = true
}
```
