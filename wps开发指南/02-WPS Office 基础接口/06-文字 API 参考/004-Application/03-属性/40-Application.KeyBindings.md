# Application.KeyBindings

返回一个 **[KeyBindings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/obj)** 集合，该集合代表自定义的按键指定方案，包含了键代码、键类别和命令。



## 语法

express.**KeyBindings**

express   一个代表 **Application** 对象的变量。

## 类型

KeyBindings

## 示例


```JavaScript
/*此示例将 Ctrl+Alt+W 组合键分配给 FileClose 命令。此键盘自定义保存在 Normal 模板中。*/
function test() {
    CustomizationContext = NormalTemplate
    Application.KeyBindings.Add(wdKeyCategoryCommand, "FileClose", BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyW))
}
```


```JavaScript
/*此示例在光标处插入 KeyBindings 集合中每个项目的命令名称和组合键字符串。*/
function test() {
    CustomizationContext = NormalTemplate
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        let keyBinding = Application.KeyBindings.Item(i)
        Selection.InsertAfter(`${keyBinding.Command}\t${keyBinding.KeyString}\n`)
        Selection.Collapse(wdCollapseEnd)
    }
}
```
