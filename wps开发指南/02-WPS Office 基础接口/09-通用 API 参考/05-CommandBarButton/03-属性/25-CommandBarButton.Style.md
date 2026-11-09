# CommandBarButton.Style

获取或设置 **CommandBarButton** 控件的显示方式。可读写。



## 语法

express.**Style**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

MsoButtonStyle

## 说明


 **Style** 属性的值可作为 **[MsoButtonStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoButtonStyle)** 枚举中的值之一。  

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，创建一个名为“example”的命令栏并添加一个按钮，然后将该按钮的样式设置为msoButtonIconAndCaptionBelow。*/
function test() {
    let commandBar = Application.CommandBars.Add("example")
    let cbButton = commandBar.Controls.Add(msoControlButton, 2)
    commandBar.Visible = true
    cbButton.Style = msoButtonIconAndCaptionBelow
}
```


```JavaScript
/*本示例运行于各组件，显示名为“WordArt”的命令栏的第一个（按钮）控件的样式是否为msoButtonAutomatic。*/
function test() {
    let cbButton = Application.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbButton.Style == msoButtonAutomatic)
}
```
