# CommandBarControl.Id

获取内置的 **CommandBarControl** 的 ID。只读。



## 语法

express.**Id**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

控件的 ID 号决定了该控件的内置操作。所有自定义控件的 **Id** 属性的值都是 1。



## 示例


```JavaScript
/*本示例运行于各组件，判断如果新建命令栏的新建控件的 ID 值小于 25，则更改该新建控件的按钮面。*/
function test() {
    let cbControl = Application.CommandBars.Add("example").Controls.Add(msoControlButton)
    if (cbControl.Id < 25) {
        cbControl.FaceId = 17
        cbControl.Tag = "Changed control"
    }
}
```


```JavaScript
/*本示例运行于各组件，显示名为“Standard”的命令栏中名为“打开”的控件的 ID 值。*/
function test() {
    let cbControl = Application.CommandBars.Item("Standard").Controls.Item("打开")
    alert(cbControl.Id)
}
```
