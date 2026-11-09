# Application.StandardFontSize

以磅（磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位返回或设置标准字体大小。 **Long** 类型，可读写。



## 语法

express.**StandardFontSize**

express   一个代表 **Application** 对象的变量。

## 类型

number（double 精度）

## 说明


如果使用该属性更改标准字体大小，则直到重新启动 ET 后，所做的更改才能生效。



## 示例


```JavaScript
/*本示例将标准字体大小设置为 12 磅。*/
function test() {
    Application.StandardFontSize = 12
}
```


```JavaScript
/*本示例演示将StandardFontSize属性的值设置为15，并显示该属性的值。*/
function test() {
    Application.StandardFontSize = 15
    alert("StandardFontSize属性的值为：" + Application.StandardFontSize)
}
```
