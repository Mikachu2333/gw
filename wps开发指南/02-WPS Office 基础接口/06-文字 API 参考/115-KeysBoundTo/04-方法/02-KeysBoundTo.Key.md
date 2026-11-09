# KeysBoundTo.Key

返回一个 **KeyBinding** 对象，该对象代表指定的自定义组合键。



## 语法

express.**Key(KeyCode, KeyCode2)**

express   一个代表 **KeysBoundTo** 对象的变量。

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
/*本示例显示活动文档中 FileClose 组合键的命令。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    alert(Application.KeysBoundTo(wdKeyCategoryCommand, "FileClose").Key(Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyW)).Command)
}
```


```JavaScript
/*本示例清除 FileClose 命令中 CTRL + ALT + W 键组合。*/
function test() {
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryCommand, "FileClose")
    keysBoundTo.Key(Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyW)).Clear()
}
```
