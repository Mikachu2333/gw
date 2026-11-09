# Options.DisplaySmartTagButtons

如果为 **True** ，则 WPS 在鼠标指针置于智能标记上方时显示一个按钮。 **Boolean** 类型，可读写。




## 语法

express.**DisplaySmartTagButtons**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


智能标记按钮提供一个下拉菜单，以便用户访问智能标记选项和操作。




## 示例


```JavaScript
/*本示例隐藏在鼠标指针置于智能标记上方时按钮的显示。*/
function DontShowSmartTagButton() {
    Options.DisplaySmartTagButtons = false
}
```
