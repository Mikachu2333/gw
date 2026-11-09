# KeyBindings.Context

返回一个 **Object** 类型的值，该值代表指定键绑定的存储位置。只读。



## 语法

express.**Context**

express   一个代表 **KeyBindings** 对象的变量。

## 类型

Object

## 说明


该属性可以返回 **Document** 、 **Template** 或 **Application** 对象。内置键分配方案（例如，将 Ctrl+I 分配给 **Italic** ）将以上下文形式返回 **Application** 对象。添加的任何键绑定将返回 **Document** 或 **Template** 对象，具体取决于添加 **KeyBinding** 对象后有效的自定义上下文。



## 示例


```JavaScript
/*本示例显示自定义按键方案绑定的模板的名称。*/
function test() {
    alert(Application.KeyBindings.Context.Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为自定义按键方案绑定的模板地址。*/
function test() {
    Selection.Range.Text = Application.KeyBindings.Context.Path
}
```
