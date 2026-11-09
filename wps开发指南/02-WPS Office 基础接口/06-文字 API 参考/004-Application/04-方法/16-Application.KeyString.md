# Application.KeyString

为指定的键返回组合键字符串（例如，Ctrl+Shift+A）。



## 语法

express.**KeyString(KeyCode, KeyCode2)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| KeyCode | 必选 | number（int4 精度） | 用某个 **WdKey** 常量指定的键。 |
| KeyCode2 | 可选 | any | 用某个 **WdKey** 常量指定的第二个键。 |

## 返回值

String

## 说明


可以使用 **BuildKeyCode** 方法创建 *KeyCode* 或 *KeyCode2* 参数。



## 示例


```JavaScript
/*此示例显示 WdKey 常量（wdKeyControl、wdKeyShift 和 wdKeyA）的组合键字符串（CTRL+SHIFT+A）。*/
function test() {
    Application.CustomizationContext = ActiveDocument.AttachedTemplate
    alert(KeyString(BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyA)))
}
```


```JavaScript
/*此示例将 wdKeyControl 和 wdKeyQ 的组合键字符串插入到光标处。*/
function test() {
    let keyCode1 = Application.BuildKeyCode(wdKeyControl, wdKeyQ)
    Selection.TypeText(Application.KeyString(keyCode1))
}
```
