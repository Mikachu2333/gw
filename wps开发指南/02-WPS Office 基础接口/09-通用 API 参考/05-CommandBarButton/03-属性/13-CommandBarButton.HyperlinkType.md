# CommandBarButton.HyperlinkType

设置或获取一个 **[MsoCommandBarButtonHyperlinkType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoCommandBarButtonHyperlinkType)** 常量，代表与指定的命令栏按钮相关联的超链接的类型。可读写。



## 语法

express.**HyperlinkType**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

MsoCommandBarButtonHyperlinkType

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”的命令栏并为该命令栏添加一个按钮控件，然后判断如果该按钮控件关联的超链接类型为msoCommandBarButtonHyperlinkNone，则将超链接的类型更改为msoCommandBarButtonHyperlinkOpen，并设置按钮的 URL。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    let cbButton = commandBar.Controls.Add(msoControlButton)
    cbButton.FaceId = 277
    cbButton.HyperlinkType = msoCommandBarButtonHyperlinkNone
    if (cbButton.HyperlinkType == msoCommandBarButtonHyperlinkNone) {
        cbButton.HyperlinkType = msoCommandBarButtonHyperlinkOpen
        cbButton.TooltipText = "https://www.wps.cn/"
    }
}
```


```JavaScript
/*本示例运行于各组件，显示名为“WordArt”的命令栏的第一个（按钮）控件相关联的超链接的类型是否为msoCommandBarButtonHyperlinkNone。*/
function test() {
    let cbButton = Application.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbButton.HyperlinkType == msoCommandBarButtonHyperlinkNone)
}
```
