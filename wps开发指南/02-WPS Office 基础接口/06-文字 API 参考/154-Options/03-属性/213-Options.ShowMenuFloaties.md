# Options.ShowMenuFloaties

返回或设置 **Boolean** 值，该值表示当用户在文档窗口中右键单击时是否显示浮动工具栏。可读/写。



## 语法

express.**ShowMenuFloaties**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 当用户在文档窗口中右键单击时，显示浮动工具栏。*/
function test() {
    Options.ShowMenuFloaties = true
}
```


```JavaScript
/*本示例判断如果当用户在文档窗口中右键单击时显示浮动工具栏，则通知用户。*/
function test() {
    if (Options.ShowMenuFloaties) {
        alert("当用户在文档窗口中右键单击时显示浮动工具栏。")
    }
}
```
