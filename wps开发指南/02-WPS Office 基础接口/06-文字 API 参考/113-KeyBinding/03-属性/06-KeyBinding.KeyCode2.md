# KeyBinding.KeyCode2

返回指定键绑定中第二个键的唯一代码。 **Long** 类型，只读。



## 语法

express.**KeyCode2**

express   一个代表 **KeyBinding** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示 KeyBindings 集合中每个键的键代码（活动文档中所有自定义键的集合）。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        let keyBinding = Application.KeyBindings.Item(i)
        if (keyBinding.KeyCode2 !== wdNoKey) {
            alert(`${keyBinding.KeyString}\nKeyCode1 = ${keyBinding.KeyCode}\nKeyCode2 = ${keyBinding.KeyCode2}`)
        } else {
            alert(`${keyBinding.KeyString}\nKeyCode1 = ${keyBinding.KeyCode}`)
        }
    }
}
```


```JavaScript
/*本示例判断如果活动文档上第二个自定义组合键含有第二个键的键代码，则显示该键代码。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    let keyBinding = Application.KeyBindings.Item(2)
    if (keyBinding.KeyCode2 !== wdNoKey) {
        alert(keyBinding.KeyCode2)
    }
}
```
