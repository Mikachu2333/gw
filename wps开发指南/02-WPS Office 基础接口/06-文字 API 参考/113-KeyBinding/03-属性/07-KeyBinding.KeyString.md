# KeyBinding.KeyString

返回指定键的组合键字符串（例如，Ctrl+Shift+A）。只读 **String** 类型。



## 语法

express.**KeyString**

express   一个代表 **KeyBinding** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示Normal模板中的第一个自定义组合键的组合键字符串。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    if (Application.KeyBindings.Count >= 1) {
        alert(Application.KeyBindings.Item(1).KeyString)
    }
}
```


```JavaScript
/*本示例判断如果 KeyBindings 集合包括 ALT + CTRL + W 组合键，则显示一条消息。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    let buildKeyCode = Application.BuildKeyCode(wdKeyAlt, wdKeyControl, wdKeyW)
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        let keyBinding = Application.KeyBindings.Item(i)
        if (keyBinding.KeyCode == buildKeyCode) {
            alert(keyBinding.KeyString + " is already in use")
        }
    }
}
```
