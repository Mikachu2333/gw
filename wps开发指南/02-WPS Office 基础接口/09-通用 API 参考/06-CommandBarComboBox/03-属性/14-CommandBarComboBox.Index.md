# CommandBarComboBox.Index

获取一个 **Long** 类型的值，该值代表集合中 **CommandBarComboBox** 对象的索引号。只读。




## 语法

express.**Index**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

number（int 精度）

## 说明


第一个命令栏控件的位置为 1。 **CommandBarControls** 集合中的分隔符不计算在内。

| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例在名为“Custom”的命令栏中搜索 Id 值为 23 的控件。如果能找到这样的控件，并且其索引号大于 5，则将该控件放置在命令栏上的第一个位置上。
function test()
{
    let myBar = CommandBars.Item("Custom")
    let ctrl1 = myBar.FindControl(null,23)
    if (ctrl1 && ctrl1.Index > 5)
    {
        ctrl1.Move (null,1)
    }
}
```
