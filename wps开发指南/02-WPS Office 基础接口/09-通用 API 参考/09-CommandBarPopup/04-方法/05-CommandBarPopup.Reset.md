# CommandBarPopup.Reset

将内置 **CommandBarPopup** 控件重置为其初始功能和图符。




## 语法

express.**Reset()**

express   一个代表 **CommandBarPopup** 对象的变量。

## 返回值

void

## 说明


重置一个内置控件将恢复该控件原来对应的动作，并将各属性恢复成初始状态。

| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例在所有命令栏中搜索标签为“Graphics”的 CommandBarPopup 对象，然后将其重置为默认状态。
function test()
{
    let myControl = Application.CommandBars.FindControl(Application.Enum.msoControlPopup, null, "Graphics") 
    myControl.Reset()
}
```
