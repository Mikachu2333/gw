# KeysBoundTo.CommandParameter

返回分配给指定快捷键的命令参数。只读 **String** 类型。



## 语法

express.**CommandParameter**

express   一个代表 **KeysBoundTo** 对象的变量。

## 类型

string

## 说明


有关使用参数的命令的信息，请参阅 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Add)** 方法。使用 **Command** 属性可返回分配给指定快捷键的命令名称。



## 示例


```JavaScript
/*本示例为 FontSize 命令指定一个快捷键，命令参数是 8，然后显示命令参数和命令名称。*/
function test() {
    Application.KeyBindings.Add(wdKeyCategoryCommand, "FontSize", BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyS), "8")
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryCommand, "FontSize")
    alert(`${keysBoundTo.Command} ${keysBoundTo.CommandParameter}`)
}
```


```JavaScript
/*本示例显示分配给FontSize组合键的命令参数。*/
function test() {
    alert(Application.KeysBoundTo(wdKeyCategoryCommand, "FontSize").CommandParameter)
}
```
