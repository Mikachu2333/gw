# Application.Assistant

返回一个 **Assistant** 对象，该对象代表“WPS Office 助手”。




## 语法

express.**Assistant**

express   一个代表 **Application** 对象的变量。

## 类型

Assistant

## 说明


WPS Office 助手和 AnswerWizard 在 2013 版的 WPS Office 中的作用已经弱化。




## 示例


```JavaScript
/*本示例显示 WPS 助手。*/
Application.Assistant.Visible = true
```


```JavaScript
/*本示例显示 WPS 助手，并将它移至屏幕的左上角。*/
function test()
{
assistant.Visible = true
assistant.Move(100,100)
}
```


```JavaScript
/*本示例显示 WPS 助手和在气球中的自定义消息。*/
function test()
{
Assistant.Visible = true
let bln = Assistant.NewBalloon
bln.Mode = msoModeAutoDown
bln.Text = "Hello"
bln.Button = msoButtonSetNone
bln.Show()
}
```
