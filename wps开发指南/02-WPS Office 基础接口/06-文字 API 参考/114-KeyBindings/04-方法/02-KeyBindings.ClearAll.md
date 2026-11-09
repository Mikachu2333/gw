# KeyBindings.ClearAll

清除所有的自定义按键分配方案，并恢复原有的 WPS文字 快捷键分配方案。



## 语法

express.**ClearAll()**

express   一个代表 **KeyBindings** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除 Normal 模板中的自定义按键分配方案，按键分配方案将恢复为默认设置。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.KeyBindings.ClearAll()
}
```


```JavaScript
/*本示例清除活动文档中的自定义按键分配方案，并显示清除前后文档中的自定义按键分配方案数量。*/
function test() {
    Application.CustomizationContext = ActiveDocument
    alert(`清除前文档中自定义按键分配方案数量：${Application.KeyBindings.Count}`)
    Application.KeyBindings.ClearAll()
    alert(`清除后文档中自定义按键分配方案数量：${Application.KeyBindings.Count}`)
}
```
