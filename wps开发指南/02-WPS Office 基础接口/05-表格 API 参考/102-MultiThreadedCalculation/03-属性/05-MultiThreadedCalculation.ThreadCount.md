# MultiThreadedCalculation.ThreadCount

获取进程的线程总数，这些线程是指定的 **MultiThreadedCalculation** 对象的一部分。



## 语法

express.**ThreadCount**

express   一个代表 **MultiThreadedCalculation** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示并发计算模式的一部分进程的线程总数。*/
function test() {
    alert(Application.MultiThreadedCalculation.ThreadCount)
}
```


```JavaScript
/*本示例开启并发计算模式，并将一部分进程的线程总数设置为5。*/
function test() {
    Application.MultiThreadedCalculation.Enabled = true
    Application.MultiThreadedCalculation.ThreadCount = 5
}
```
