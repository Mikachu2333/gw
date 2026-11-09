# Window.Hwnd

返回一个 **Long** 类型的值，该值指示指定窗口的窗口句柄。只读。



## 语法

express.**Hwnd**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口的窗口句柄。*/
function test() {
    alert(`${ActiveDocument.ActiveWindow.Hwnd}`)
}
```


```JavaScript
/*本示例显示第二个窗口的窗口句柄。*/
function test() {
    alert(`${Windows.Item(2).Hwnd}`)
}
```
