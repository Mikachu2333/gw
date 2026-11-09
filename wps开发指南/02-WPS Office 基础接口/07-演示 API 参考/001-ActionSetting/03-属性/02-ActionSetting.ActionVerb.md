# ActionSetting.ActionVerb

返回或设置包含 OLE 动作的字符串，该 OLE 动作将在用户在幻灯片放映过程中单击指定形状或将鼠标指针移过该形状时运行。可读/写。



## 语法

express.**ActionVerb**

express   一个代表 **ActionSetting** 对象的变量。

## 类型

string

## 说明


要使该属性可影响幻灯片放映操作，必须先将 **[Action](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Action)** 属性设置为 **ppActionOLEVerb** 。



## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的第三个形状（OLE 对象），使其在幻灯片放映过程中当鼠标移过它时播放。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(3).ActionSettings.Item(ppMouseOver)
    actionSetting.ActionVerb = "Play"
    actionSetting.Action = ppActionOLEVerb
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状在用户单击形状时的 OLE 动作的字符串。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseClick)
    alert(actionSetting.ActionVerb)
}
```
