# CommandBarButton.FaceId

获取或设置某个 **CommandBarButton** 控件的图符的 ID 号。可读写。



## 语法

express.**FaceId**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

number（int 精度）

## 说明


 **FaceId** 属性确定一个命令栏按钮的外观而非其功能。 **CommandBarControl** 对象的 **Id** 属性确定按钮的功能。

对于具有自定义图标的命令栏按钮，其 **FaceId** 属性值为 0（零）。

在某些 WPS Office应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，向自定义命令栏中添加一个命令栏按钮，并且单击此按钮相当于单击“文件”菜单上的“打开”命令，这是因为此按钮的 ID 号为 23。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom2", msoBarTop, null, true)
    commandBar.Visible = true
    let cbButton = commandBar.Controls.Add(msoControlButton, 23)
    cbButton.FaceId = 17
}
```


```JavaScript
/*本示例运行于各组件，显示名为“WordArt”的命令栏的第一个（按钮）控件的 ID 编号。*/
function test() {
    let cbButton = Application.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbButton.FaceId)
}
```
