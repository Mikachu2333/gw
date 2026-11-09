# Application.MultiThreadedCalculation

返回控制多线程重新计算设置的 **MultiThreadedCalculation** 对象。只读。



## 语法

express.**MultiThreadedCalculation**

express   一个代表 **Application** 对象的变量。

## 类型

MultiThreadedCalculation

## 示例


```JavaScript
/*本示例显示MultiThreadedCalculation的一部分的进程线程的总计数。*/
function test() {
    alert(Application.MultiThreadedCalculation.ThreadCount)
}
```


```JavaScript
/*本示例将MultiThreadedCalculation的线程模式设置为xlThreadModeManual。*/
function test() {
    Application.MultiThreadedCalculation.ThreadMode = xlThreadModeManual
}
```
