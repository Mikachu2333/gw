# KeyBinding.Execute

运行与指定的组合键相关联的命令。



## 语法

express.**Execute()**

express   一个代表 **KeyBinding** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将 Ctrl+Shift+C 组合键分配给 FileClose 命令，然后执行这个组合键（关闭当前文档）。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.KeyBindings.Add(wdKeyCategoryCommand, "FileClose", Application.BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyC))
    Application.FindKey(Application.BuildKeyCode(wdKeyControl, wdKeyShift, wdKeyC)).Execute()
}
```


```JavaScript
/*本示例执行活动文档中第一个自定义组合键的命令。*/
function test() {
    Application.CustomizationContext = Application.ActiveDocument
    Application.KeyBindings.Item(1).Execute()
}
```
