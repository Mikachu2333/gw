# MultiThreadedCalculation.ThreadMode

返回或设置指定的 **MultiThreadedCalculation** 对象的线程模式。可读/写 **XlThreadMode** 类型。



## 语法

express.**ThreadMode**

express   一个代表 **MultiThreadedCalculation** 对象的变量。

## 类型

XlThreadMode

## 说明


线程模式可以设置为 **XlThreadModeAutomatic** 或 **XlThreadModeManual** 。



## 示例


```JavaScript
/*本示例将并发计算模式的线程模式设置为xlThreadModeManual。*/
function test() {
    Application.MultiThreadedCalculation.ThreadMode = xlThreadModeManual
}
```


```JavaScript
/*本示例显示并发计算模式的线程模式是否为xlThreadModeAutomatic。*/
function test() {
    alert(Application.MultiThreadedCalculation.ThreadMode == xlThreadModeAutomatic)
}
```
