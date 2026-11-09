# CellFormat.NumberFormatLocal

以采用用户语言字符串的形式返回或设置一个 **Variant** 值，它代表对象的格式代码。



## 语法

express.**NumberFormatLocal**

express   一个代表 **CellFormat** 对象的变量。

## 类型

any

## 说明


 **Format** 函数使用的格式代码字符串与 **[NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/NumberFormat)** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*此示例设置查找条件的格式代码。*/
function test() {
    Application.FindFormat.NumberFormatLocal = "0.00%"
}
```


```JavaScript
/*此示例显示替换条件的格式代码。*/
function test() {
    alert(Application.ReplaceFormat.NumberFormatLocal)
}
```
