# KeysBoundTo 对象

 **[KeyBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/obj)** 对象的集合，这些对象被分配给当前上下文中的命令、样式、宏或其他项目。

## 说明


使用 **[KeysBoundTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/KeysBoundTo)** 属性可返回 **KeysBoundTo** 集合。


## 示例


```JavaScript
/*本示例显示分配给 Normal 模板中 FileClose 命令的组合键。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryCommand, "FileClose")
    let str = ""
    for (let i = 1; i <= keysBoundTo.Count; i++) {
        str = str + keysBoundTo.Item(i).KeyString + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例显示文档或模板名称，这些文档或模板中存储了宏“Project.CreateNewMacros.test1”的键。*/
function test() {
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryMacro, "Project.CreateNewMacros.test1")
    alert(keysBoundTo.Context.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/member/Item) | 返回集合中的单个 **KeyBinding** 对象。 |
| [Key](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/member/Key) | 返回一个 **KeyBinding** 对象，该对象代表指定的自定义组合键。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Command](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/member/Command) | 返回一个 **String** 类型的值，该值代表分配给指定组合键的命令。只读。 |
| [CommandParameter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/member/CommandParameter) | 返回分配给指定快捷键的命令参数。只读 **String** 类型。 |
| [Context](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/member/Context) | 返回一个 **Object** 类型的值，该值代表指定键绑定的存储位置。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中按键的数目。只读。 |
| [KeyCategory](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeysBoundTo/member/KeyCategory) | 返回分配给指定组合键的项目的类型。只读 **WdKeyCategory** 类型。 |