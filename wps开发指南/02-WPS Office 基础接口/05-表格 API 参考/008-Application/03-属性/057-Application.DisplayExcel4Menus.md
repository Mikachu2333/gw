# Application.DisplayExcel4Menus

如果 ET 显示 4.0 版的菜单栏，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayExcel4Menus**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将切换到显示 ET 4.0 版的菜单。*/
function test() {
    Application.DisplayExcel4Menus = true
}
```


```JavaScript
/*本示例演示 DisplayExcel4Menus 属性的数据类型。*/
function test() {
    alert(typeof Application.DisplayExcel4Menus)
}
```
