# Application.AutoPercentEntry

如果在向格式设置为百分比的单元格中输入数据时，并不自动将该数据乘以 100，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoPercentEntry**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使得以后向格式为百分比的单元格中输入的数据都将自动乘以 100。*/
function test() {
    Application.AutoPercentEntry = false
}
```


```JavaScript
/*本示例演示AutoPercentEntry属性的数据类型，并将AutoPercentEntry属性的值设置为true。*/
function test() {
    alert(typeof Application.AutoPercentEntry)
    Application.AutoPercentEntry = true
}
```
