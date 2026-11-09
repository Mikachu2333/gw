# KeyBinding.Disable

如果指定组合键当前被赋予某一命令，则删除该组合键。使用该方法后，组合键将不再起作用。



## 语法

express.**Disable()**

express   一个代表 **KeyBinding** 对象的变量。

## 返回值

void

## 说明


该方法等效于单击 **“自定义键盘”** 对话框中的 **“删除”** 按钮。将 **Clear** 方法用于 **KeyBinding** 对象可将一条内置命令重置为其默认键分配。在将 **KeyBinding** 对象添加到别处前，无需删除或重新绑定它。



## 示例


```JavaScript
/*本示例删除 Ctrl+Shift+B 的按键分配方案。默认情况下，此组合键分配给 Bold 命令。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.FindKey(BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyB)).Disable()
}
```


```JavaScript
/*本示例将 CTRL + SHIFT + O 组合键分配给 Organizer 命令，然后使用禁用方法删除 CTRL + SHIFT + O 键组合，并显示一条消息。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.KeyBindings.Add(wdKeyCategoryCommand, "Organizer", Application.BuildKeyCode(wdKeyO, wdKeyControl, wdKeyShift))
    let keyBinding = Application.FindKey(BuildKeyCode(wdKeyO, wdKeyControl, wdKeyShift))
    alert(keyBinding.Command + " is assigned to CTRL+Shift+O")
    keyBinding.Disable()
    if (keyBinding.Command == "") {
        alert("null is assigned to CTRL+Shift+O")
    }
}
```


```JavaScript
/*本示例删除名为“Project.CreateNewMacros.Macro1”的共用宏的所有键分配方案。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        let keyBinding = Application.KeyBindings.Item(i)
        if (keyBinding.Command == "Project.CreateNewMacros.Macro1") {
            keyBinding.Disable()
        }
    }
}
```
