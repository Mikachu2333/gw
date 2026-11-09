# Application.Quit

退出ET



## 语法

express.**Quit()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 说明


使用此方法时，如果未保存的工作簿处于打开状态，则 ET 将显示一个对话框，询问是否要保存所作更改。要防止发生这种情况，请在使用 **Quit** 方法前保存所有工作簿或将 **DisplayAlerts** 属性设置为 **False** 。如果该属性为 **False** ，则在 ET 退出时，即使有未保存的工作簿，也不会显示对话框，而且不保存就退出。

如果将工作簿的 **Saved** 属性设置为 **True** ，而没有将工作簿保存到磁盘上，则 ET 在退出时不会提示保存该工作簿。



## 示例


```JavaScript
/* 本示例保存所有打开的工作簿，然后退出 ET。 */
function test() {
    let w = Application.Workbooks
    for (let i = 1; i <= w.Count; i++) {
        w.Item(i).Save()
    }
    Application.Quit()
}
```
