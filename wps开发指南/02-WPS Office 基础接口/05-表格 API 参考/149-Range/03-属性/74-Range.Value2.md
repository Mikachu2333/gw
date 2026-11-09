# Range.Value2

返回或设置单元格值。 **Variant** 类型，可读写。



## 语法

express.**Value2**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


该属性与 **Value** 属性的唯一区别是： **[Value2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Value2)** 属性不使用 **Currency** 和 **Date** 数据类型。可以通过使用 **Double** 数据类型，以浮点数形式返回这些数据类型格式的数值。



## 示例


```JavaScript
/*本示例使用 Value2 属性对两个单元格的值进行相加。*/
function test() {
    Application.Range("A1").Value2 = Range("B1").Value2 + Range("C1").Value2
}
```


```JavaScript
/*本示例在 A1 单元格设置公式 =SUM(B1:C1)，并显示 A1 单元格的值*/
function test() {
    Range("A1").Formula = "=SUM(B1:C1)"
    alert(Range("A1").Value2)
}
```
