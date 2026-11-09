# DisplayFormat.WrapText

返回一个值，该值指示 ET 是否会使当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的文本自动换行。只读。



## 语法

express.**WrapText**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 说明


如果该区域中的所有单元格都自动换行，则返回 **True** 。



## 示例


```JavaScript
/*本示例显示在当前用户界面中 B3 单元格的文本是否自动换行。*/
function test() {
    alert(Range("B3").DisplayFormat.WrapText)
}
```


```JavaScript
/*本示例判断在当前用户界面中 E5:E10 单元格的文本是否自动换行，并通知用户。*/
function test() {
    if (Range("E5:E10").DisplayFormat.WrapText) {
        alert("文本会自动换行")
    } else {
        alert("文本不会自动换行")
    }
}
```
