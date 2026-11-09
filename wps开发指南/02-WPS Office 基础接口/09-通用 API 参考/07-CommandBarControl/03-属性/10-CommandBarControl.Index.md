# CommandBarControl.Index

获取一个 **Long** 类型的值，该值代表集合中 **CommandBarControl** 对象的索引号。只读。



## 语法

express.**Index**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

第一个命令栏控件的位置为 1。 **CommandBarControls** 集合中的分隔符不计算在内。



## 示例


```JavaScript
/*本示例运行于各组件，在名为“Standard”的命令栏中搜索 Id 值为 23 的控件。如果找到这样的控件，并且该控件的索引号大于 5，则该控件将被定位为命令栏上的第一个控件。*/
function test() {
    let cbControl = Application.CommandBars.Item("Standard").FindControl(null, 23)
    if (cbControl.Index > 5) {
        cbControl.Move(null, 1)
    }
}
```


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件的索引号。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.Index)
}
```
