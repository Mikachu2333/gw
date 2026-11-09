# DisplayFormat.Interior

返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，该对象代表当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的内部。只读。



## 语法

express.**Interior**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*本示例显示 G3 单元格的内部颜色是否为红色。*/
function test() {
    alert(Range("G3").DisplayFormat.Interior.Color == RGB(255, 0, 0))
}
```


```JavaScript
/*本示例判断 E1:E5 单元格的内部颜色是否为 xlColorIndexNone ，并通知用户。*/
function test() {
    if (Range("E1:E5").DisplayFormat.Interior.ColorIndex == xlColorIndexNone) {
        alert("内部颜色是xlColorIndexNone")
    } else {
        alert("内部颜色不是xlColorIndexNone")
    }
}
```
