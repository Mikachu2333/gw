# Application.DefaultTableSeparator

返回或设置一个字符；在将文本转换为表格时，该字符用来将文本分隔为单元格。 **String** 类型，可读写。



## 语法

express.**DefaultTableSeparator**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


如果省略 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象或 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象的 **ConvertToTable** 方法中的 *Separator* 参数，则使用 **DefaultTableSeparator** 属性的值。



## 示例


```JavaScript
/*本示例更改默认的表格分隔字符。*/
function test() {
    Application.DefaultTableSeparator = "%"
}
```


```JavaScript
/*本示例在光标处插入将文本转换为表格时，用来将文本分隔为单元格的字符。*/
function test() {
    Selection.TypeText(Application.DefaultTableSeparator)
}
```
