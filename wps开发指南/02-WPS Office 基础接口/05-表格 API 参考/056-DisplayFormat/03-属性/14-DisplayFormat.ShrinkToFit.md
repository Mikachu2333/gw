# DisplayFormat.ShrinkToFit

返回一个值，该值指示 ET 是否会自动缩小文本以适合当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的可用列宽。只读。



## 语法

express.**ShrinkToFit**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 说明


如果文本会自动缩小以适合可用列宽，则返回 **True** 。



## 示例


```JavaScript
/*本示例显示 D3 单元格是否自动收缩文本以适应当前用户界面中显示的可用列宽。*/
function test() {
    alert(Range("D3").DisplayFormat.ShrinkToFit)
}
```


```JavaScript
/*本示例判断 E5:E10 单元格是否自动收缩文本以适应当前用户界面中显示的可用列宽，并通知用户。*/
function test() {
    if (Range("E5:E10").DisplayFormat.ShrinkToFit) {
        alert("文本会自动收缩")
    } else {
        alert("文本不会自动收缩")
    }
}
```
