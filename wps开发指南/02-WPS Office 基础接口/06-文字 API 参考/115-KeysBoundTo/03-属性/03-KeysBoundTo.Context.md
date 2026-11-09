# KeysBoundTo.Context

返回一个 **Object** 类型的值，该值代表指定键绑定的存储位置。只读。



## 语法

express.**Context**

express   一个代表 **KeysBoundTo** 对象的变量。

## 类型

Object

## 说明


该属性可以返回 **Document** 、 **Template** 或 **Application** 对象。内置键分配方案（例如，将 Ctrl+I 分配给 **Italic** ）将以上下文形式返回 **Application** 对象。添加的任何键绑定将返回 **Document** 或 **Template** 对象，具体取决于添加 **KeyBinding** 对象后有效的自定义上下文。



## 示例


```JavaScript
/*本示例显示保存宏“Project.CreateNewMacros.test1”的文档或者模板的名称。*/
function test() {
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryMacro, "Project.CreateNewMacros.test1")
    alert(keysBoundTo.Context.Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为FontSize组合键绑定的文档或模板的地址。*/
function test() {
    Selection.Range.Text = Application.KeysBoundTo(wdKeyCategoryCommand, "FontSize").Context.Path
}
```
