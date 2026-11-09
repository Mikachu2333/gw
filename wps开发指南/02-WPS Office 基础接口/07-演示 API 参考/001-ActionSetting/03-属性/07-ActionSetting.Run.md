# ActionSetting.Run

返回或设置演示文稿或宏的名称，当在幻灯片放映过程中单击指定形状或鼠标指针经过该形状时，将运行该演示文稿或宏。可读/写。



## 语法

express.**Run**

express   一个代表 **ActionSetting** 对象的变量。

## 类型

string

## 说明


 **[Action](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Action)** 属性必须设置为 **ppActionRunMacro** 或 **ppActionRunProgram** ，此属性才能影响幻灯片的放映动作。

如果 **Action** 属性的值为 **ppActionRunMacro** ，则指定的字符串值应为一个当前已加载的全局宏的名称。如果 **Action** 属性的值为 **ppActionRunProgram** ，则指定的字符串应为一个程序的完整路径和文件名。

可以将 **Run** 属性设为无参数的或单个 *Shape* 或 *Object* 参数的宏。幻灯片放映时被单击的形状将被作为此参数传送。



## 示例


```JavaScript
/*本示例指定在幻灯片放映过程中的任何时候，如果鼠标指针经过形状，将运行宏 CalculateTotal。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(2).ActionSettings.Item(ppMouseOver)
    actionSetting.Action = ppActionRunMacro
    actionSetting.Run = "CalculateTotal"
    actionSetting.AnimateAction = msoTrue
}
```


```JavaScript
/*本示例显示当鼠标指针经过活动窗口选定的第一个形状时运行的宏的名称。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseOver)
    alert(actionSetting.Run)
}
```
