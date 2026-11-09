# COMAddIn.Connect

获取或设置指定的 **COMAddIn** 对象的连接状态。可读/写。



## 语法

express.**Connect**

express   一个代表 **COMAddIn** 对象的变量。

## 类型

boolean

## 说明


如果该加载项是活动的，那么 **Connect** 属性返回 **True** ，反之返回 **False** 。活动加载项是经过注册并建立了连接的加载项；非活动加载项是经过注册但当前没有连接的加载项。



## 示例


```JavaScript
/*本示例运行于各组件，判断第一个 COM 加载项的连接状态，并通知用户。*/
function test() {
    if (Application.COMAddIns.Item(1).Connect) {
        alert("The add-in is connected.")
    } else {
        alert("The add-in is not connected.")
    }
}
```


```JavaScript
/*本示例运行于各组件，切换第一个 COM 加载项的连接状态。*/
function test() {
    Application.COMAddIns.Item(1).Connect = !Application.COMAddIns.Item(1).Connect
}
```
