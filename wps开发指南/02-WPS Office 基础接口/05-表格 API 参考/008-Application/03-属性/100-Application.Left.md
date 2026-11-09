# Application.Left

返回或设置一个 **Double** 值，它代表从屏幕左边缘到 ET 主窗口左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **Application** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例演示从屏幕左边缘到 ET 主窗口左边缘的距离。*/
function test() {
    alert("从屏幕左边缘到 ET 主窗口左边缘的距离为：" + Application.Left)
}
```


```JavaScript
/*此示例设置从屏幕左边缘到 ET 主窗口左边缘的距离值。*/
function test() {
    Application.WindowState = xlNormal
    Application.Left = 100
}
```
