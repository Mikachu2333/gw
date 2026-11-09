# DisplayFormat.HorizontalAlignment

返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象采用水平对齐方式。只读。



## 语法

express.**HorizontalAlignment**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示 E3 单元格的水平对齐方式是否为 xlHAlignGeneral 。*/
function test() {
    alert(Range("E3").DisplayFormat.HorizontalAlignment == xlHAlignGeneral)
}
```


```JavaScript
/*本示例判断 E3:E6 单元格的水平对齐方式是否为 xlHAlignLeft ，并通知用户。*/
function test() {
    if (Range("E3:E6").DisplayFormat.HorizontalAlignment == xlHAlignLeft) {
        alert("水平对齐方式是xlHAlignLeft")
    } else {
        alert("水平对齐方式不是xlHAlignLeft")
    }
}
```
