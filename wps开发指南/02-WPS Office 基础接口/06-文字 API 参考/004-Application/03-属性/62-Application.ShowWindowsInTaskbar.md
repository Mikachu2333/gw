# Application.ShowWindowsInTaskbar

如果为 **True** ，则在任务栏中显示打开的文档，默认值为 Single Document Interface (SDI)。如果为 **False** ，则只在 **“窗口”** 菜单中列出打开的文档，提供 Multiple Document Interface (MDI) 的外观。 **Boolean** 类型，可读写。




## 语法

express.**ShowWindowsInTaskbar**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例切换界面，以只在“窗口”菜单上列出打开的文档。*/
function SDIToMDI(){
    Application.ShowWindowsInTaskbar = false
}
```
