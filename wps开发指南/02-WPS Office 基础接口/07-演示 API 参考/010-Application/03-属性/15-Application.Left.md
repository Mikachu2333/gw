# Application.Left

返回或设置一个 **Single** 类型值，它表示从文档、应用程序和幻灯片窗口的左边缘到应用程序窗口工作区的左边缘的距离（以磅为单位）。将此属性设置为非常大的正值或负值可能会使窗口完全离开桌面。可读/写。



## 语法

express.**Left**

express   一个代表 **Application** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将应用程序窗口的左边距设置为80磅。*/
function test() {
    Application.Left = 80
}
```


```JavaScript
/*本示例显示应用程序窗口的左边距。*/
function test() {
    alert(Application.Left + " 磅")
}
```
