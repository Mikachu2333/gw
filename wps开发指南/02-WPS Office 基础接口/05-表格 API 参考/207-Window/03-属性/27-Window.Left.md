# Window.Left

返回一个 **Double** 值，它代表从客户区左边缘到窗口左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **Window** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例先将WindowState设为xlNormal，再设置工作区左边缘到窗口左边缘的距离为216磅。*/
function test() {
    ActiveWindow.WindowState = xlNormal
    ActiveWindow.Left = 216
}
```


```JavaScript
/*本示例先判断如果第一个窗口的WindowState属性为xlNormal，则显示第一个窗口左边缘到工作区左边缘的距离，并将其左边缘距离改为648磅。*/
function test() {
    if (Windows.Item(1).WindowState == xlNormal) {
        alert(`第一个窗口左边缘到工作区左边缘的距离为${Windows.Item(1).Left}磅，弹框关闭后则设置为648`)
        Windows.Item(1).Left = 648
    }
}
```
