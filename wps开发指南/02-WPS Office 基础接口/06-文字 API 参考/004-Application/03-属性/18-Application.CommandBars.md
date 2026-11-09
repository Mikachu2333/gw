# Application.CommandBars

返回一个 **CommandBars** 集合，该集合代表 WPS 中的菜单栏以及所有工具栏。



## 语法

express.**CommandBars**

express   一个代表 **Application** 对象的变量。

## 类型

CommandBars

## 说明


此属性已更改。 **CommandBar** ("Comments")不能用于自定义注释的上下文菜单。

在访问 **CommandBars** 集合之前，可用 **[CustomizationContext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CustomizationContext)** 属性设置模板或文档上下文。



## 示例


```JavaScript
/*本示例增大所有命令栏按钮并激活工具提示。*/
function test() {
    let commandBars = Application.CommandBars
    commandBars.LargeButtons = true
    commandBars.DisplayTooltips = true
}
```


```JavaScript
/*本示例设置首字下沉命令栏显示在快捷菜单中。*/
function test() {
    let commandBar = Application.CommandBars.Item("Drop Caps")
    commandBar.Position = msoBarPopup
}
```


```JavaScript
/*本示例将“版本”命令按钮添至“常用”工具栏。*/
function test() {
    CustomizationContext = NormalTemplate
    Application.CommandBars.Item("Standard").Controls.Add(msoControlButton, 2522, null, 4)
}
```
