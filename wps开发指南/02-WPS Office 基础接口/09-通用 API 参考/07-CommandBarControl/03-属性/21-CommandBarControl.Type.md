# CommandBarControl.Type

获取 **CommandBarControl** 的类型。只读。



## 语法

express.**Type**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

MsoControlType

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

 **Type** 属性的值可用作 **[MsoControlType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoControlType)** 枚举中的值之一。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件的类型是否为msoControlComboBox。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.Type == msoControlComboBox)
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“WordArt”的命令栏的最后一个控件的类型是否为msoControlButton。*/
function test() {
    let cbControls = ActiveWorkbook.CommandBars.Item("WordArt").Controls
    alert(cbControls.Item(cbControls.Count).Type == msoControlButton)
}
```
