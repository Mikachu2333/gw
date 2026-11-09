# Application.BuildKeyCode

为指定的组合键返回唯一的代码。



## 语法

express.**BuildKeyCode(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | WdKey | 使用 **WdKey** 常量之一指定的键。 |
| Arg2 - Arg4 | 可选 | any | 使用 **WdKey** 常量之一指定的键。 |

## 返回值

number（int4 精度）

## 示例


```JavaScript
/*本示例为 FileClose 命令指定组合键 Alt+F1。*/
function test() {
    Application.CustomizationContext = NormalTemplate
    Application.KeyBindings.Add(wdKeyCategoryCommand, "FileClose", Application.BuildKeyCode(wdKeyAlt, wdKeyF1))
}
```


```JavaScript
/*本示例从 Normal 模板中删除 Alt+F1 按键指定方案。*/
function test() {
    Application.CustomizationContext = NormalTemplate
    Application.FindKey(Application.BuildKeyCode(wdKeyAlt, wdKeyF1)).Clear()
}
```


```JavaScript
/*本示例显示 F1 指向的命令。*/
function test() {
    Application.CustomizationContext = NormalTemplate
    alert(Application.FindKey(Application.BuildKeyCode(wdKeyF1)).Command)
}
```
