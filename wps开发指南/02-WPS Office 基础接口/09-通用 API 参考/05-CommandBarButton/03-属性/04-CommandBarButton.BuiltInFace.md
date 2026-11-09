# CommandBarButton.BuiltInFace

如果命令栏按钮控件的图标是其原始内置图标，则为 **True** 。可读写。



## 语法

express.**BuiltInFace**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

boolean

## 说明


此属性只能设置为 **True** ，其功能是将图标重新设置为内置的图标。可读写 **Boolean** 类型。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于表格组件，判断如果名为“Cell”的命令栏中名为“清除内容(&N)”的（按钮）控件的图标是其原始内置图标，则显示该控件的 ID 编号。*/
function test() {
    let cbButton = ActiveWorkbook.CommandBars.Item("Cell").Controls.Item("清除内容(&N)")
    if (cbButton.BuiltInFace) {
        alert(cbButton.FaceId)
    }
}
```


```JavaScript
/*本示例运行于各组件，显示名为“WordArt”的命令栏的第一个（按钮）控件的图标是否为其原始内置图标。*/
function test() {
    let cbButton = Application.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbButton.BuiltInFace)
}
```
