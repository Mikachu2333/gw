# Application.InputBox

显示一个接收用户输入的对话框。返回此对话框中输入的信息。



## 语法

express.**InputBox(Prompt, Title, Default, Left, Top, HelpFile, HelpContextID, Type)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Prompt | 必选 | string | 要在对话框中显示的消息。可为字符串、数字、日期、或布尔值（在显示之前，ET 自动将其值强制转换为 String）。 |
| Title | 可选 | any | 输入框的标题。如果省略该参数，默认标题将为“Input”。 |
| Default | 可选 | any | 指定一个初始值，该值在对话框最初显示时出现在文本框中。如果省略该参数，文本框将为空。该值可以是 Range 对象。 |
| Left | 可选 | any | 指定对话框相对于屏幕左上角的 X 坐标（以磅为单位）。 |
| Top | 可选 | any | 指定对话框相对于屏幕左上角的 Y 坐标（以磅为单位）。 |
| HelpFile | 可选 | any | 此输入框使用的帮助文件名。如果存在 HelpFile 和 HelpContextID 参数，对话框中将出现一个帮助按钮。 |
| HelpContextID | 可选 | any | HelpFile 中帮助主题的上下文 ID 号。 |
| Type | 可选 | any | 指定返回的数据类型。如果省略该参数，对话框将返回文本。 |

## 返回值

any

## 说明


下表列出了可以在 Type 参数中传递的值。可以为下列值之一或其中几个值的和。例如，对于一个可接受文本和数字的输入框，将 *Type* 设置为 1 + 2。

| 值  | 含义                        |
| -- | ------------------------- |
| 0  | 公式                        |
| 1  | 数字                        |
| 2  | 文本（字符串）                   |
| 4  | 逻辑值（ **True** 或 **False** ） |
| 8  | 单元格引用，作为一个 **Range** 对象   |
| 16 | 错误值，如 #N/A                |
| 64 | 数值数组                      |

使用 **InputBox** 可以显示一个简单的对话框，以便可以输入要在宏中使用的信息。此对话框有一个“确定”按钮和一个“取消”按钮。如果选择了“确定”按钮，则 **InputBox** 将返回对话框中输入的值。如果单击“取消”按钮，则 **InputBox** 返回 **False** 。

如果 *Type* 为 0， **InputBox** 将以文本格式返回公式。例如，“=2\*PI()/360”。如果公式中有引用，将以 A1-样式引用返回（使用 **ConvertFormula** 转换引用样式）。

如果 *Type* 为 8， **InputBox** 将返回一个 **Range** 对象。您必须用 **let** 语句将结果指定给一个 **Range** 对象，如下例所示。

```JavaScript
let myRange = Application.InputBox("Sample", undefined, undefined, undefined, undefined, undefined, undefined, 8)
```

如果不使用 **let** 语句，此变量将被设置为这个区域的值，而不是 **Range** 这个对象本身。

如果使用 **InputBox** 方法要求用户输入公式，则必须使用 **FormulaLocal** 属性来将此公式指定给一个 **Range** 对象。输入的公式使用用户语言。

 **InputBox** 方法与 **InputBox** 函数的区别在于：它可以对用户的输入进行选择性验证，也可用于 ET 对象、误差值、和公式的输入。注意，`Application.InputBox` 调用的是 **InputBox** 方法，不带对象识别符的 `InputBox` 调用的是 **InputBox** 函数。



## 示例


```JavaScript
/*本示例提示用户输入数字。*/
function test() {
    let myNum = Application.InputBox("Enter a number")
}
```


```JavaScript
/*本示例提示用户在 Sheet1 中选取一个单元格。示例使用 Type 参数证实返回值是有效的单元格引用 (一个 Range 对象)。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    let myCell = Application.InputBox("Select a cell", undefined, undefined, undefined, undefined, undefined, undefined, 8)
}
```
