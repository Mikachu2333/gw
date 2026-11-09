# Range.VerticalAlignment

返回或设置一个 **Variant** 值，它代表指定对象的垂直对齐方式。



## 语法

express.**VerticalAlignment**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


此属性的值可设为以下常量之一： **xlBottom** 、 **xlCenter** 、 **xlDistributed** 、 **xlJustify** 、 **xlTop** 



## 示例


```JavaScript
/*本示例将 A1 单元格的垂直对齐方式设置为下对齐*/
function test() {
    Range("A1").VerticalAlignment = xlBottom
}
```


```JavaScript
/*本示例将 C2 单元格的垂直对齐方式设置为居中*/
function test() {
    Range("C2").VerticalAlignment = xlCenter
}
```
