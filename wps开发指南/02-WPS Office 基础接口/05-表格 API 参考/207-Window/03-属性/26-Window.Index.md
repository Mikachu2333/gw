# Window.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示当前窗口的索引号。*/
function test() {
    alert(Application.ActiveWindow.Index)
}
```


```JavaScript
/*本示例新增一个窗体副本，并通知用户其索引号。*/
function test() {
    let oldW = Application.ActiveWindow
    let newW = oldW.NewWindow()
    alert(newW.Index)
}
```
