# KeyBinding.CommandParameter

返回分配给指定快捷键的命令参数。只读 **String** 类型。



## 语法

express.**CommandParameter**

express   一个代表 **KeyBinding** 对象的变量。

## 类型

string

## 说明


有关使用参数的命令的信息，请参阅 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Add)** 方法。使用 **Command** 属性可返回分配给指定快捷键的命令名称。



## 示例


```JavaScript
/*本示例为 FontSize 命令指定一个快捷键，命令参数是 8，然后显示命令参数、命令名称和按键字符串。*/
function test() {
    let keyBinding = Application.KeyBindings.Add(wdKeyCategoryCommand, "FontSize", Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyS), null, "8")
    alert(`${keyBinding.Command} ${keyBinding.CommandParameter}\n${keyBinding.KeyString}`)
}
```


```JavaScript
/*本示例显示活动文档中第三个自定义组合键的命令参数。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    alert(Application.KeyBindings.Item(3).CommandParameter)
}
```
