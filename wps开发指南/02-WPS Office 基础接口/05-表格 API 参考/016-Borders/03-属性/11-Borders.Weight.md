# Borders.Weight

返回或设置一个 **[XlBorderWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlBorderWeight)** 值，它代表边框的粗细。



## 语法

express.**Weight**

express   一个代表 **Borders** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将 E6 单元格边框的粗细设置为 xlThick 。*/
function test() {
    Range("E6").Borders.Weight = xlThick
}
```


```JavaScript
/*本示例显示 D3 单元格边框的粗细是否为 xlThin 。*/
function test() {
    alert(Range("D3").Borders.Weight == xlThin)
}
```
