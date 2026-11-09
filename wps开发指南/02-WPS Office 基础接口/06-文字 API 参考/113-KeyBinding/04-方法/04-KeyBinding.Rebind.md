# KeyBinding.Rebind

更改分配给指定的组合键的命令。



## 语法

express.**Rebind(KeyCategory, Command, CommandParameter)**

express   一个代表 **KeyBinding** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| KeyCategory | 必选 | WdKeyCategory | 指定组合键的键类别。 |
| Command | 必选 | string | 指定命令的名称。 |
| CommandParameter | 可选 | any | _Command_ 所指定的命令所需的附加文字（如果有）。有关该参数的值的信息，请参阅 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Add)** 方法。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将 Ctrl+Shift+S 组合键重新分配给“FileSaveAs”命令。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    let keyBinding = Application.FindKey(Application.BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyS))
    keyBinding.Rebind(wdKeyCategoryCommand, "FileSaveAs")
}
```


```JavaScript
/*本示例将所有分配给宏“Project.CreateNewMacros.Macro1”的键重新分配给宏“Project.CreateNewMacros.ReportMacro”。*/
function test() {
    Application.CustomizationContext = ActiveDocument.AttachedTemplate
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        let keyBinding = Application.KeyBindings.Item(i)
        if (keyBinding.Command == "Project.CreateNewMacros.Macro1") {
            keyBinding.Rebind(wdKeyCategoryMacro, "Project.CreateNewMacros.ReportMacro")
        }
    }
}
```
