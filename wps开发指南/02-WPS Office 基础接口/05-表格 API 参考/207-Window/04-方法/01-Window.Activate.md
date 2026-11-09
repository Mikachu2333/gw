# Window.Activate

将窗口提到 z-次序的最前面。



## 语法

express.**Activate()**

express   一个代表 **Window** 对象的变量。

## 返回值

Variant

## 说明


这样不会运行可能附加在工作簿上的 Auto\_Activate 或 Auto\_Deactivate 宏（使用 **RunAutoMacros** 方法可运行这些宏）。



## 示例


```JavaScript
/*本示例激活“工作簿2”为活动窗口。*/
function test() {
    Application.Windows.Item("工作簿2").Activate()
}
```


```JavaScript
/*本示例激活第二个窗口为活动窗口。*/
function test() {
    Application.Windows.Item(2).Activate()
}
```
