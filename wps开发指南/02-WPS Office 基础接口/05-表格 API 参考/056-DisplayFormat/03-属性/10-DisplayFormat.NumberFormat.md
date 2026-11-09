# DisplayFormat.NumberFormat

返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的格式代码。只读。



## 语法

express.**NumberFormat**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 说明


如果指定区域中的所有单元格不具有相同的数字格式，则此属性将返回 **Null** 。



## 示例


```JavaScript
/*本示例显示 F5 单元格的数字格式。*/
function test() {
    alert(Range("F5").DisplayFormat.NumberFormat)
}
```


```JavaScript
/*本示例判断 D5:D10 单元格的数字格式是否为 General ，并通知用户。*/
function test() {
    if (Range("D5:D10").DisplayFormat.NumberFormat == "General") {
        alert("数字格式为General")
    } else {
        alert("数字格式不是General")
    }
}
```
