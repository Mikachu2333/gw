# Application.Run

运行 JavaScript 宏。



## 语法

express.**Run(MacroName, varg1, varg2, varg3, varg4, varg5, varg6, varg7, varg8, varg9, varg10, varg11, varg12, varg13, varg14, varg15, varg16, varg17, varg18, varg19, varg20, varg21, varg22, varg23, varg24, varg25, varg26, varg27, varg28, varg29, varg30)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| MacroName | 必选 | string | 宏的名称。 |
| varg1 - varg30 | 可选 | any | 宏参数值。最多可以给指定宏传递 30 个参数值。 |

## 返回值

any

## 说明


*MacroName* 参数可以是任意模板、模块和宏名的组合。例如，下列语句均有效。

```JavaScript
Application.Run("Normal.Module1.MAIN")
Application.Run("Project.Module1.Procedure") 
Application.Run("'example.docm'!Module1.Procedure")
```

如果指定文档名称，则代码只能在与当前上下文相关的文档中运行宏，而不仅仅是任何文档中的任何宏。



## 示例


```JavaScript
/*本示例运行指定的宏。*/
function test() {
    Application.Run("Normal.Module2.Macro1")
}
```


```JavaScript
/*本示例提示用户输入模板名、模块名、宏名以及参数值，然后运行该宏。*/
function test() {
    let strTemplate = InputBox("Enter the template name")
    let strModule = InputBox("Enter the module name")
    let strMacro = InputBox("Enter the macro name")
    let strParameter = InputBox("Enter a parameter value")
    Application.Run(`${strTemplate}.${strModule}.${strMacro}`, strParameter)
}
```
