# CommandBarComboBox.Id

获取内置的 **CommandBarComboBox** 控件的 ID。只读。




## 语法

express.**Id**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

number（int 精度）

## 说明


控件的 ID 号决定了该控件的内置操作。所有自定义控件的 **Id** 属性的值都是 1。

| 注释                                                    |
| ----------------------------------------------------- |
| WPS Office Assistant 在 WPS Office system 2015 版中已被淘汰。 |




## 示例


```JavaScript
//下面的示例将名为“Standard”的工具栏上每个控件的标题更改为该控件当前的 Id 属性值。 
function test()
{
    let ctl = Application.CommandBars.Item("Standard").Controls
    for(let i=1; i<=ctl.Count; i++)
    {
        ctl.Item(i).Caption = String(ctl.Id)
    }
}
```
