# Document.CommandBars

返回一个 **CommandBars** 集合，该集合代表 WPS 中的菜单栏以及所有工具栏。



## 语法

express.**CommandBars**

express   一个代表 **Document** 对象的变量。

## 类型

CommandBars

## 说明


在访问 **CommandBars** 集合之前，可用 **CustomizationContext** 属性设置模板或文档上下文。



## 示例


```JavaScript
/*本示例增大所有命令栏按钮并激活工具提示。*/
function test() {
    ActiveDocument.CommandBars.LargeButtons = true
    ActiveDocument.CommandBars.DisplayTooltips = true
}
```


```JavaScript
/*本示例在活动文档的底部显示状态栏。*/
function test() {
    let commandBar = ActiveDocument.CommandBars.Item("Status Bar")
    commandBar.Visible = true
    commandBar.Position = msoBarBottom
}
```


```JavaScript
/*本示例将“版本”命令按钮添至“常用”工具栏。*/
function test() {
    CustomizationContext = NormalTemplate
    ActiveDocument.CommandBars.Item("Standard").Controls.Add(msoControlButton, 2522, null, 4)
}
```
