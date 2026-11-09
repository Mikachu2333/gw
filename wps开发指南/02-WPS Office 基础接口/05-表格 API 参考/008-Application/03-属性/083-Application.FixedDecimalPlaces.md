# Application.FixedDecimalPlaces

返回或设置当 **[FixedDecimal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/FixedDecimal)** 属性设置为 **True** 时使用的固定小数位数。 **Long** 类型，可读写。



## 语法

express.**FixedDecimalPlaces**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将 FixedDecimal 属性设置为true，并将 FixedDecimalPlaces 属性设为 4。本示例运行后，在工作表中输入“30000”将生成“3”，输入“12500”生成“1.25”。*/
function test() {
    Application.FixedDecimal = true
    Application.FixedDecimalPlaces = 4
}
```


```JavaScript
/*本示例演示将FixedDecimalPlaces属性的值设置为3，并显示属性的值。*/
function test() {
    Application.FixedDecimalPlaces = 3
    alert("FixedDecimalPlaces属性的值为：" + Application.FixedDecimalPlaces)
}
```
