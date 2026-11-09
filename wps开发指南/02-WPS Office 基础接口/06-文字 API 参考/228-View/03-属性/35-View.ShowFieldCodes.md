# View.ShowFieldCodes

如果显示域代码，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowFieldCodes**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏第一个窗口的域代码。*/
function test() {
    Windows.Item(1).View.ShowFieldCodes = false
}
```


```JavaScript
/*本示例显示第一个窗口的域代码。*/
function test() {
    Windows.Item(1).View.ShowFieldCodes = true
}
```


```JavaScript
/*本示例切换活动窗口的域代码。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = !ActiveDocument.ActiveWindow.View.ShowFieldCodes
}
```
