# KeyBinding 对象

代表当前上下文中的一个自定义按键分配方案。 **KeyBinding** 对象是 **KeyBindings** 集合的一个成员。

## 说明


使用 **KeyBindings** (_Index_) 可返回一个 **KeyBinding** 对象，其中 _Index_ 为索引号。


## 示例


```JavaScript
/*本示例显示第一个自定义组合键的命令。*/
function test() {
    alert(Application.KeyBindings.Item(1).Command)
}
```


```JavaScript
/*本示例显示活动文档中的第一个自定义组合键的组合键字符串。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    if (Application.KeyBindings.Count >= 1) {
        alert(Application.KeyBindings.Item(1).KeyString)
    }
}
```
您还可以使用 **FindKey** 属性和 **Key** 方法返回 **KeyBinding** 对象。

在 **“自定义键盘”** 对话框中进行自定义按键分配方案。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/Clear) | 从 **KeyBindings** 集合中删除指定的键绑定，并将内置命令重新设置为默认按键分配方案。 |
| [Disable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/Disable) | 如果指定组合键当前被赋予某一命令，则删除该组合键。使用该方法后，组合键将不再起作用。 |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/Execute) | 运行与指定的组合键相关联的命令。 |
| [Rebind](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/Rebind) | 更改分配给指定的组合键的命令。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Command](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/Command) | 返回分配给指定组合键的命令。 **String** 类型，只读。 |
| [CommandParameter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/CommandParameter) | 返回分配给指定快捷键的命令参数。只读 **String** 类型。 |
| [Context](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/Context) | 返回一个 **Object** 类型的值，该值代表指定键绑定的存储位置。只读。 |
| [KeyCategory](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/KeyCategory) | 返回分配给指定组合键的项目的类型。只读 **WdKeyCategory** 类型。 |
| [KeyCode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/KeyCode) | 返回指定键绑定中第一个键的唯一代码。 **Long** 类型，只读。 |
| [KeyCode2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/KeyCode2) | 返回指定键绑定中第二个键的唯一代码。 **Long** 类型，只读。 |
| [KeyString](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/KeyString) | 返回指定键的组合键字符串（例如，Ctrl+Shift+A）。只读 **String** 类型。 |
| [Protected](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/member/Protected) | 如果无法更改 **“自定义键盘”** 对话框中的指定键绑定，则该属性值为 **True** 。 **Boolean** 类型，只读。 |