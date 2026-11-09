# Application.Run

运行一个宏或者调用一个函数。该方法可用于运行 JavaScript 或 ET 宏语言编写的宏，或者运行 DLL 或 XLL 中的函数。



## 语法

express.**Run(Macro, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Macro | 可选 | any | 要运行的宏。它可以是具有宏名称的字符串、表示函数所在位置的 Range 对象，或者是一个已注册的 DLL (XLL) 函数的注册号。如果使用字符串，将在当前工作表的上下文中对该字符串求值。 |
| Arg1 - Arg30 | 可选 | any | 应传递给函数的参数。 |

## 返回值

Variant

## 说明


此方法不可使用命名参数，参数必须通过位置进行传递。

 **Run** 方法返回被调用的宏返回的任何值。如果将对象作为参数传递给宏，该对象将转换为相应的值（通过对该对象应用 **Value** 属性）。这意味着不能用 **Run** 方法将对象传递给宏。



## 示例


```JavaScript
/*本示例运行名为“test1”的宏。*/
function test() {
    Application.Run("test1")
}
```


```JavaScript
/*本示例运行名为“test2”的宏。*/
function test() {
    Application.Run("test2", 3)
}
```
