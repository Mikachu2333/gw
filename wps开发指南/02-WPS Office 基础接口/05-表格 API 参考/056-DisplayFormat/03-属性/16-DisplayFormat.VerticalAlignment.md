# DisplayFormat.VerticalAlignment

返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象采用垂直对齐方式。只读。



## 语法

express.**VerticalAlignment**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示在当前用户界面中 F3 单元格的垂直对齐方式是否为居中对齐。*/
function test() {
    alert(Range("F3").DisplayFormat.VerticalAlignment == xlVAlignCenter)
}
```


```JavaScript
/*本示例判断在当前用户界面中 D5:D10 区域单元格的垂直对齐方式是否为顶部对齐，并通知用户。*/
function test() {
    if (Range("D5:D10").DisplayFormat.VerticalAlignment == xlVAlignTop) {
        alert("垂直对齐方式是顶部对齐")
    } else {
        alert("垂直对齐方式不是顶部对齐")
    }
}
```
