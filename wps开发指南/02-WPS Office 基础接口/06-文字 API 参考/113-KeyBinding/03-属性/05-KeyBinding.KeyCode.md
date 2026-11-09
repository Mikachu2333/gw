# KeyBinding.KeyCode

返回指定键绑定中第一个键的唯一代码。 **Long** 类型，只读。



## 语法

express.**KeyCode**

express   一个代表 **KeyBinding** 对象的变量。

## 类型

number（int4 精度）

## 说明


在使用 **[KeyBindings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/obj)** 对象的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Add)** 方法添加键绑定时，可以使用 **[BuildKeyCode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/BuildKeyCode)** 方法创建此代码。



## 示例


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


```JavaScript
/*本示例显示活动文档中第三个自定义组合键的第一个键是否为 CTRL+ALT+H。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    alert(Application.KeyBindings.Item(3).KeyCode == Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyH))
}
```
