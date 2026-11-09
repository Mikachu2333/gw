# CommandBars.MenuAnimationStyle

获取或设置一个代表命令栏的动画处理方式的 **[MsoMenuAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoMenuAnimation)** 。可读写。



## 语法

express.**MenuAnimationStyle**

express   一个代表 **CommandBars** 对象的变量。

## 类型

MsoMenuAnimation

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，为 WPS Office 中所有命令栏设置选项。*/
function test() {
    Application.CommandBars.LargeButtons = true
    Application.CommandBars.DisplayTooltips = true
    Application.CommandBars.DisplayKeysInTooltips = true
    Application.CommandBars.MenuAnimationStyle = msoMenuAnimationUnfold
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中所有命令栏的动画处理方式。*/
function test() {
    switch (ActiveWorkbook.CommandBars.MenuAnimationStyle) {
        case msoMenuAnimationNone:
            alert("无动画")
            break
        case msoMenuAnimationRandom:
            alert("随机动画")
            break
        case msoMenuAnimationSlide:
            alert("菜单滑入视图")
            break
        case msoMenuAnimationUnfold:
            alert("菜单展开到视图中")
            break
    }
}
```
