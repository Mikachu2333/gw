# DisplayFormat.ReadingOrder

返回当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的读取顺序。只读。



## 语法

express.**ReadingOrder**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示 F4 单元格的读取顺序是否根据上下文。*/
function test() {
    alert(Range("F4").DisplayFormat.ReadingOrder == xlContext)
}
```


```JavaScript
/*本示例判断 D10 单元格的读取顺序是否为从左到右，并通知用户。*/
function test() {
    if (Range("D10").DisplayFormat.ReadingOrder == xlLTR) {
        alert("读取顺序是从左到右")
    } else {
        alert("读取顺序不是从左到右")
    }
}
```
