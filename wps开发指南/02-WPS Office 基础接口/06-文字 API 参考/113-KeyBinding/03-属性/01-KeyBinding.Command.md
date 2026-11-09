# KeyBinding.Command

返回分配给指定组合键的命令。 **String** 类型，只读。



## 语法

express.**Command**

express   一个代表 **KeyBinding** 对象的变量。

## 类型

string

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
/*本示例将所选内容的文本替换为所有自定义按键方案的命令。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    let str = ""
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        str += Application.KeyBindings.Item(i).Command + "\n"
    }
    Selection.Range.Text = str
}
```
