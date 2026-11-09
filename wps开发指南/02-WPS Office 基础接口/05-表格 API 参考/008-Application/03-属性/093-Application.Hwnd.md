# Application.Hwnd

返回一个 **Number** 类型的值，该值表示 ET 窗口的最高级别的窗口句柄。只读。



## 语法

express.**Hwnd**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*在本示例中，ET 向用户通知 ET 窗口的最高级别的窗口句柄。*/
function test() {
    MsgBox("The top-level window handle is: " + Application.Hwnd)
}
```


```JavaScript
/*本示例演示 ET 窗口最高级别的窗口句柄的数据类型。*/
function test() {
    alert(typeof (Application.Hwnd))
}
```
