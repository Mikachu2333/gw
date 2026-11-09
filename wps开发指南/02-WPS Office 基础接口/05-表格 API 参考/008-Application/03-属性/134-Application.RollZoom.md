# Application.RollZoom

如果使用智能鼠标进行缩放而不是滚动，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**RollZoom**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将智能鼠标的功能设置为缩放，不进行滚动。*/
function test() {
    Application.RollZoom = true
}
```


```JavaScript
/*本示例演示 RollZoom 属性的数据类型，并将 RollZoom 属性的值设置为false。*/
function test() {
    alert("RollZoom属性的数据类型为：" + typeof Application.RollZoom)
    Application.RollZoom = false
}
```
