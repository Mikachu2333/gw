# DisplayFormat.IndentLevel

返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的缩进级别。只读。



## 语法

express.**IndentLevel**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示 E3 单元格的缩进级别。*/
function test() {
    alert(Range("E3").DisplayFormat.IndentLevel)
}
```


```JavaScript
/*本示例判断 G5:G10 单元格的缩进级别是否为3，并通知用户。*/
function test() {
    if (Range("G5:G10").DisplayFormat.IndentLevel == 3) {
        alert("缩进级别为3")
    } else {
        alert("缩进级别不为3")
    }
}
```
