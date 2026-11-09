# Application.ShowMenuFloaties

返回或设置一个 **Boolean** 值，该值表示当用户在工作簿窗口中右键单击时是否显示 **“浮动工具栏”** 。如果显示 **“浮动工具栏”** ，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowMenuFloaties**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示当用户在工作簿窗口中右键单击时是否展示“浮动工具栏”。*/
function test() {
    alert(Application.ShowMenuFloaties)
}
```


```JavaScript
/*本示例设置当用户在工作簿窗口中右键单击时不展示“浮动工具栏”。*/
function test() {
    Application.ShowMenuFloaties = false
}
```
