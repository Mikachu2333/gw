# DisplayFormat.NumberFormatLocal

返回一个值，该值表示当前用户界面中以用户语言将关联的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 显示为字符串时的格式代码。只读。



## 语法

express.**NumberFormatLocal**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示 D3 单元格用户界面中展示的用户语言的格式代码。*/
function test() {
    alert(Range("D3").DisplayFormat.NumberFormatLocal)
}
```


```JavaScript
/*本示例显示 D3 单元格用户界面中展示的用户语言的格式代码是否为0.00，并通知用户。*/
function test() {
    if (Range("D5:D10").DisplayFormat.NumberFormatLocal == "0.00") {
        alert("用户语言的格式代码是0.00")
    } else {
        alert("用户语言的格式代码不是0.00")
    }
}
```
