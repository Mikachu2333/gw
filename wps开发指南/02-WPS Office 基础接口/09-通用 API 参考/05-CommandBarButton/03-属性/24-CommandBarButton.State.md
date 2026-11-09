# CommandBarButton.State

获取或设置 **CommandBarButton** 控件的外观。可读写。



## 语法

express.**State**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

MsoButtonState

## 说明


内置命令栏按钮的 **State** 属性是只读的。 **Type** 属性的值可作为 **[MsoButtonState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoButtonState)** 枚举中的值之一。



## 示例


```JavaScript
/*本示例运行于各组件，创建一个名为“Custom”的命令栏并添加两个按钮，然后将第一个按钮的外观设置为 msoButtonUp，并将第二个按钮的外观设置为 msoButtonDown。*/
function test() {
    // Add new command bar.
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    // Add 2 buttons to new command bar.
    commandBar.Controls.Add(msoControlButton, 2)
    commandBar.Controls.Add(msoControlButton, 3)
    commandBar.Visible = true

    let cbButton1 = commandBar.Controls.Item(1)
    cbButton1.State = msoButtonUp

    let cbButton2 = commandBar.Controls.Item(2)
    cbButton2.State = msoButtonDown
}
```


```JavaScript
/*本示例运行于各组件，显示名为“WordArt”的命令栏的第一个（按钮）控件的外观是否为msoButtonUp。*/
function test() {
    let cbButton = Application.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbButton.State == msoButtonUp)
}
```
