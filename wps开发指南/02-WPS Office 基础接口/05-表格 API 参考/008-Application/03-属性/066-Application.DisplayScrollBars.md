# Application.DisplayScrollBars

如果滚动条在所有工作簿中显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayScrollBars**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例对所有工作簿都关闭滚动条。*/
function test() {
    Application.DisplayScrollBars = false
}
```


```JavaScript
/*本示例演示DisplayScrollBars的数据类型，当提示框关闭后将DisplayScrollBars属性设置为true。*/
function test() {
    alert("DisplayScrollBars 属性的数据类型为：" + typeof Application.DisplayScrollBars)
    Application.DisplayScrollBars = true
}
```
