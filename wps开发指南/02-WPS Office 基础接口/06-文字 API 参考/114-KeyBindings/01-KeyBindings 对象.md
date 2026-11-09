# KeyBindings 对象

 **[KeyBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBinding/obj)** 对象的集合，这些对象代表当前上下文中的自定义按键分配方案。在 **“自定义键盘”** 对话框中进行自定义按键分配方案。

## 说明


使用 **[KeyBindings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/KeyBindings)** 属性可返回 **KeyBindings** 集合。


## 示例


```JavaScript
/*本示例将自定义按键方案中每一项键绑定的命令和组合键插入到所选内容之后。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        let keyBinding = Application.KeyBindings.Item(i)
        Selection.InsertAfter(`${keyBinding.Command}\t${keyBinding.KeyString}\n`)
        Selection.Collapse(wdCollapseEnd)
    }
}
```
使用 **Add** 方法可将 **KeyBinding** 对象添加到 **KeyBindings** 集合。



```JavaScript
/*本示例为活动文档中“标题 1”样式添加 CTRL + ALT + H 组合键。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    Application.KeyBindings.Add(wdKeyCategoryStyle, "标题 1", Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyH))
}
```
使用 **KeyBindings** (_Index_) 可返回一个 **KeyBinding** 对象，其中 _Index_ 为索引号。



```JavaScript
/*本示例显示与KeyBindings集合中的第一个KeyBinding对象相关联的命令。*/
function test() {
    alert(Application.KeyBindings.Item(1).Command)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Add) | 返回一个 **KeyBinding** 对象，该对象代表宏、内置命令、字体、“自动图文集”词条、样式或符号的新快捷键。 |
| [ClearAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/ClearAll) | 清除所有的自定义按键分配方案，并恢复原有的 WPS文字 快捷键分配方案。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Item) | 返回集合中的单个 **KeyBinding** 对象。 |
| [Key](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Key) | 返回一个 **KeyBinding** 对象，该对象代表指定的自定义组合键。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Context](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Context) | 返回一个 **Object** 类型的值，该值代表指定键绑定的存储位置。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中键绑定的数量。只读。 |