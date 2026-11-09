# KeyBinding.Context

返回一个 **Object** 类型的值，该值代表指定键绑定的存储位置。只读。



## 语法

express.**Context**

express   一个代表 **KeyBinding** 对象的变量。

## 类型

Object

## 说明


该属性可以返回 **Document** 、 **Template** 或 **Application** 对象。内置键分配方案（例如，将 Ctrl+I 分配给 **Italic** ）将以上下文形式返回 **Application** 对象。添加的任何键绑定将返回 **Document** 或 **Template** 对象，具体取决于添加 **KeyBinding** 对象后有效的自定义上下文。



## 示例


```JavaScript
/*本示例向“Italic”命令添加 F2 键，并显示分配给“Italic”命令的组合键字符串和上下文。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.KeyBindings.Add(wdKeyCategoryCommand, "Italic", Application.BuildKeyCode(wdKeyF2))
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        let keyBinding = Application.KeyBindings.Item(i)
        if (keyBinding.Command == "Italic") {
            alert(`${keyBinding.KeyString}\n${keyBinding.Context.Name}\n`)
        }
    }
}
```


```JavaScript
/*本示例将所选内容的文本替换为活动文档中第一个自定义组合键关联的地址。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    Selection.Range.Text = Application.KeyBindings.Item(1).Context.Path
}
```
