# KeyBinding.Clear

从 **KeyBindings** 集合中删除指定的键绑定，并将内置命令重新设置为默认按键分配方案。



## 语法

express.**Clear()**

express   一个代表 **KeyBinding** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例从 Normal 模板中删除 Alt+F1 按键指定方案。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.FindKey(Application.BuildKeyCode(wdKeyAlt, wdKeyF1)).Clear()
}
```


```JavaScript
/*本示例从活动文档中删除 CTRL + SHIFT + U 按键指定方案，然后显示自定义按键方案的数量。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    Application.FindKey(Application.BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyU)).Clear()
    alert(Application.KeyBindings.Count)
}
```
