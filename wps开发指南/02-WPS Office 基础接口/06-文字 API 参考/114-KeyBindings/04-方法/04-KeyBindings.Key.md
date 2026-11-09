# KeyBindings.Key

返回一个 **KeyBinding** 对象，该对象代表指定的自定义组合键。



## 语法

express.**Key(KeyCode, KeyCode2)**

express   一个代表 **KeyBindings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| KeyCode | 必选 | number（int4 精度） | 用 **WdKey** 常量之一指定的一个键。 |
| KeyCode2 | 可选 | any | 用 **WdKey** 常量之一指定的第二个键。 |

## 返回值

KeyBinding

## 说明


如果该组合键不存在，则此方法返回 **null** 。

可用 **BuildKeyCode** 方法创建 _KeyCode_ 或 _KeyCode2_ 参数。



## 示例


```JavaScript
/*本示例为 Arial 字体添加 ALT + F4 组合键，然后显示KeyBindings集合中的项的数目。该示例然后清除 ALT + F4 键组合（返回到其默认设置），并重新显示KeyBindings集合中的项的数目。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.KeyBindings.Add(wdKeyCategoryFont, "Arial", Application.BuildKeyCode(wdKeyAlt, wdKeyF4))
    alert(Application.KeyBindings.Count + " keys in KeyBindings collection")
    Application.KeyBindings.Key(Application.BuildKeyCode(wdKeyAlt, wdKeyF4)).Clear()
    alert(Application.KeyBindings.Count + " keys in KeyBindings collection")
}
```


```JavaScript
/*本示例为活动文档中名为“Macro1”的宏分配 CTRL + SHIFT + U 组合键。该示例使用 Key 属性返回一个 KeyBinding 对象，这样 WPS 可以检索和显示的命令名称。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    Application.KeyBindings.Add(wdKeyCategoryMacro, "Macro1", Application.BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyU))
    alert(Application.KeyBindings.Key(Application.BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyU)).Command)
}
```


```JavaScript
/*本示例判断CTRL + SHIFT + A 组合键是否为KeyBindings集合中的一部分。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    let keyBinding = Application.KeyBindings.Key(Application.BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyA))
    if (keyBinding == null) {
        alert("Key is not in the KeyBindings collection")
    }
}
```
