# CommandBar.Position

获取或设置一个代表命令栏位置的 **[MsoBarPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBarPosition)** 常量。可读写。



## 语法

express.**Position**

express   一个代表 **CommandBar** 对象的变量。

## 类型

MsoBarPosition

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，判断名为“WordArt”的命令栏是否为内置命令栏，如果是，则将该命令栏的位置设置为msoBarTop；如果不是，则将该命令栏的位置设置为msoBarBottom。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    if (commandBar.Visible) {
        if (commandBar.BuiltIn) {
            commandBar.Position = msoBarTop
        } else {
            commandBar.Position = msoBarBottom
        }
    }

}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中图表命令栏的位置是否为msoBarTop。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(commandBar.Position == msoBarTop)
}
```
