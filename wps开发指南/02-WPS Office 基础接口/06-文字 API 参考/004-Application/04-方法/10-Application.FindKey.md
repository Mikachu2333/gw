# Application.FindKey

返回 **[KeyBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/obj)** 对象，该对象代表指定的组合键。只读。



## 语法

express.**FindKey(KeyCode, KeyCode2)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| KeyCode | 必选 | number（int4 精度） | 用 WdKey 常量之一指定的一个键。 |
| KeyCode2 | 可选 | any | 用 WdKey 常量之一指定的第二个键。 |

## 返回值

KeyBinding

## 说明


可用 **[BuildKeyCode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/BuildKeyCode)** 方法创建 *KeyCode* 或 *KeyCode2* 参数。



## 示例


```JavaScript
/*本示例禁用活动文档选用的模板中的 Alt+Shift+F12 键组合。要返回包含不止两个键的 KeyBinding 对象，请用 BuildKeyCode 方法，如本例所示。*/
function test() {
    Application.CustomizationContext = ActiveDocument.AttachedTemplate
    Application.FindKey(Application.BuildKeyCode(wdKeyAlt, wdKeyShift, wdKeyF12)).Disable()
}
```


```JavaScript
/*本示例显示 F1 指向的命令。*/
function test() {
    Application.CustomizationContext = NormalTemplate
    alert(Application.FindKey(wdKeyF1).Command)
}
```
