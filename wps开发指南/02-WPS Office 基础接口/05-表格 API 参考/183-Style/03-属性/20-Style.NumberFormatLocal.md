# Style.NumberFormatLocal

以采用用户语言字符串的形式返回或设置一个 **String** 值，它代表对象的格式代码。



## 语法

express.**NumberFormatLocal**

express   一个代表 **Style** 对象的变量。

## 类型

string

## 说明


 **Format** 函数使用的格式代码字符串与 **[NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/NumberFormat)** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例显示活动工作簿第一个样式的数字格式。*/
function test() {
    alert("活动工作簿第一个样式的数字格式为" + ActiveWorkbook.Styles.Item(1).NumberFormatLocal)
}
```


```JavaScript
/*本示例为单元格A1赋值，并将A1单元格的数字格式设置为百分比格式。*/
function test() {
    Worksheets("Sheet1").Range("A1").Value2 = 0.3
    Worksheets("Sheet1").Range("A1").NumberFormatLocal = "0.00%"
}
```
