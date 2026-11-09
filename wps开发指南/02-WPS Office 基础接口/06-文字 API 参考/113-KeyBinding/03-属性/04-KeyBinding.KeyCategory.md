# KeyBinding.KeyCategory

返回分配给指定组合键的项目的类型。只读 **WdKeyCategory** 类型。



## 语法

express.**KeyCategory**

express   一个代表 **KeyBinding** 对象的变量。

## 类型

WdKeyCategory

## 示例


```JavaScript
/*本示例显示分配给字体名称的按键，如果尚未给字体分配按键，则显示一条消息。*/
function test() {
    let count = 0
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        let keyBinding = Application.KeyBindings.Item(i)
        if (keyBinding.KeyCategory == wdKeyCategoryFont) {
            count++
            alert(keyBinding.Command + "\n" + keyBinding.KeyString)
        }
    }
    if (count == 0) {
        alert("Keys haven't been assigned to fonts")
    }
}
```


```JavaScript
/*本示例显示活动文档中第一个自定义组合键的项目类型是否为wdKeyCategoryFont。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    alert(Application.KeyBindings.Item(1).KeyCategory == wdKeyCategoryFont)
}
```
