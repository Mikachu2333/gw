# Application.Left

返回或设置一个 **Long** 类型的值，该值代表活动文档的水平位置，以磅为单位。可读写。



## 语法

express.**Left**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示从屏幕左边缘到 Wps文档主窗口左边缘的距离。*/
function test() {
    alert("从屏幕左边缘到 Wps 文档主窗口左边缘的距离为：" + Application.Left)
}
```


```JavaScript
/*此示例设置从屏幕左边缘到 Wps文档主窗口左边缘的距离值。*/
function test() {
    Application.WindowState = wdWindowStateNormal
    Application.Left = 500
}
```
