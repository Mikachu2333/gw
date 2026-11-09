# CellFormat.NumberFormat

返回或设置一个 **Variant** 值，它代表对象的格式代码。



## 语法

express.**NumberFormat**

express   一个代表 **CellFormat** 对象的变量。

## 类型

any

## 说明


如果指定区域中的所有单元格包含不同的数字格式，则此属性返回 **Null** 。

格式代码与 **“设置单元格格式”** 对话框中的 **“格式代码”** 选项是同一个字符串。 **Format** 函数使用的格式代码字符串与 **NumberFormat** 和 **[NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/NumberFormatLocal)** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*此示例显示查找条件的格式代码。*/
function test() {
    alert(Application.FindFormat.NumberFormat)
}
```


```JavaScript
/*此示例设置替换条件的格式代码。*/
function test() {
    Application.ReplaceFormat.NumberFormat = "0.00"
}
```
