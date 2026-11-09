# Application.DisplayStatusBar

如果显示状态栏，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayStatusBar**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例保存 DisplayStatusBar 属性的当前状态，然后将该属性设置为true，以显示状态栏。*/
function test() {
    let saveStatusBar = Application.DisplayStatusBar
    Application.DisplayStatusBar = true
}
```


```JavaScript
/*本示例判断如果状态栏处于显示状态，通知用户后将DisplayStatusBar属性设置为false。*/
function test() {
    if (Application.DisplayStatusBar) {
        alert("即将隐藏状态栏。")
        Application.DisplayStatusBar = false
    }
}
```
