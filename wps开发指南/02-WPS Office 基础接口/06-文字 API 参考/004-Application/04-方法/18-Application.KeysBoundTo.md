# Application.KeysBoundTo

返回一个 **[KeysBoundTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/obj)** 对象，该对象代表指定项的所有组合键。



## 语法

express.**KeysBoundTo(KeyCategory, Command, CommandParameter)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| KeyCategory | 必选 | WdKeyCategory | 组合键的类别。 |
| Command | 必选 | string | 命令的名称。 |
| CommandParameter | 可选 | any | 由 Command 指定的命令所需的附加文字（如果有）。有关详细信息，请参阅 **KeyBindings** 对象的 **Add** 方法的“说明”部分。 |

## 返回值

KeysBoundTo

## 示例


```JavaScript
/*本示例将 Ctrl+Alt+D 组合键分配给 FileOpen 命令，然后显示活动文档附加的模板中为 FileOpen 命令指定的所有组合键。*/
function test() {
    Application.KeyBindings.Add(wdKeyCategoryCommand, "FileOpen", BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyD))
    Application.CustomizationContext = ActiveDocument.AttachedTemplate
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryCommand, "FileOpen")
    let str = ""
    for (let i = 1; i <= keysBoundTo.Count; i++) {
        str += keysBoundTo.Item(i).KeyString + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例将 Ctrl+Alt+A 组合键分配给“Macro1”宏，然后删除“Normal”模板中“Macro1”的所有按键指定方案。*/
function test() {
    Application.KeyBindings.Add(wdKeyCategoryMacro, "Macro1", BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyA))
    Application.CustomizationContext = NormalTemplate
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryMacro, "Project.CreateNewMacros.Macro1")
    for (let i = keysBoundTo.Count; i >= 1; i--) {
        keysBoundTo.Item(i).Disable()
    }
}
```
