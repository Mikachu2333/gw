# Window.DisplayRuler

如果在指定窗口中显示标尺，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayRuler**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置窗口中显示标尺。*/
function test() {
    ActiveWindow.DisplayRuler = true
}
```


```JavaScript
/*本示例演示 DisplayRuler 属性的数据类型，并将第一个窗口的 DisplayRuler 属性的值设置为false。*/
function test() {
    alert("DisplayRuler属性的数据类型为：" + typeof Windows.Item(1).DisplayRuler)
    Windows.Item(1).DisplayRuler = false
}
```
