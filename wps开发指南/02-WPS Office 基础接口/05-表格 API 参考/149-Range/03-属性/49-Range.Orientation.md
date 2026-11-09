# Range.Orientation

返回或设置一个 **Variant** 值，它代表文本方向。



## 语法

express.**Orientation**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


此属性的值可设为 –90 到 90 度之间的整数值或以下常量之一： **xlDownward** 、 **xlHorizontal** 、 **xlUpward** 、 **xlVertical** 



## 示例


```JavaScript
/*将 A1 单元格的文本方向设置为向上，A2 单元格的文本方向设置为居中向下*/
function test() {
    Range("A1").Orientation = xlUpward
    Range("A2").Orientation = xlVertical
}
```


```JavaScript
/*本示例将 C3:E5 单元格区域的文本倾斜 -30 度*/
function test() {
    Range("C3:E5").Orientation = -30
}
```
