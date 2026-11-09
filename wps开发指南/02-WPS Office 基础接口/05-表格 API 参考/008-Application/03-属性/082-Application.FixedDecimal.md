# Application.FixedDecimal

如果该属性被设置为 **True** ，则以后输入的所有数据都根据 **[FixedDecimalPlaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FixedDecimalPlaces)** 属性所设置的固定小数位数设置格式。 **Boolean** 类型，可读写。



## 语法

express.**FixedDecimal**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 FixedDecimal 属性设置为true，并将 FixedDecimalPlaces 属性设为 4。本示例运行后，在工作表中输入“30000”将生成“3”，输入“12500”生成“1.25”。*/
function test() {
    Application.FixedDecimal = true
    Application.FixedDecimalPlaces = 4
}
```


```JavaScript
/*本示例演示 FixedDecimal 属性的数据类型，并将 FixedDecimal 属性的值设置为false。*/
function test() {
    alert("FixedDecimal属性的数据类型为：" + typeof Application.FixedDecimal)
    Application.FixedDecimal = false
}
```
