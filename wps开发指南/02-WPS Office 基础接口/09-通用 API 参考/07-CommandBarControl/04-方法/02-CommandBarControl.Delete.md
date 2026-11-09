# CommandBarControl.Delete

将 **CommandBarControl** 对象从其集合中删除。



## 语法

express.**Delete(Temporary)**

express   一个代表 **CommandBarControl** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Temporary | 可选 | any | 如果为 **True** ，则从当前会话中删除此控件。应用程序在下次会话中将再次显示该控件。 |

## 返回值

void

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”命令栏并为其添加两个命令栏控件，然后判断如果该命令栏的控件的数量大于1，则删除第一个控件。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandBar.Visible = true
    commandBar.Controls.Add(msoControlButton, 2)
    commandBar.Controls.Add(msoControlButton, 3)
    if (commandBar.Controls.Count > 1) {
        commandBar.Controls.Item(1).Delete(true)
    }
}
```


```JavaScript
/*本示例运行于表格组件，在活动工作簿上新建一个名为“example1”命令栏和名为“example2”命令栏，并分别为两个命令栏添加一个控件，然后将名为“example2”的命令栏的新建控件复制到名为“example1”的命令栏中，最后删除名为“example1”的命令栏的第一个控件。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Add("example1")
    commandBar.Visible = true
    commandBar.Controls.Add(msoControlButton, 2)
    let cbControl = ActiveWorkbook.CommandBars.Add("example2").Controls.Add(msoControlButton, 3)
    cbControl.Copy(commandBar)
    commandBar.Controls.Item(1).Delete()
}
```
