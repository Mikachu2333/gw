# TextInput.EditType

为指定的文字型窗体域设置选项。



## 语法

express.**EditType(Type, Default, Format, Enabled)**

express   一个代表 **TextInput** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | WdTextFormFieldType | 文本框的类型。 |
| Default | 可选 | any | 出现在文本框中的默认文字。 |
| Format | 可选 | any | 设置文本、数字或日期格式的格式字符串（例如，“0.00”、“Title Case”或“M/d/yy”）。有关格式的更多示例，请查看 **“文字型窗体域选项”** 对话框中指定文字型窗体域类型的格式列表。 |
| Enabled | 可选 | any | 如果为 **True** ，则可以向窗体域中输入文字。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在活动文档的开头添加一个名为“Today”的文字型窗体域。EditType 方法将窗体域的类型设置为 wdCurrentDateText，并将日期格式设置为“M/d/yy”。*/
function test() {
    let formField = ActiveDocument.FormFields.Add(ActiveDocument.Range(0, 0), wdFieldFormTextInput)
    formField.Name = "Today"
    formField.TextInput.EditType(wdCurrentDateText, null, "M/d/yy", false)
}
```


```JavaScript
/*本示例设置所选内容中第一个文本型窗体域的文本框类型和文本框中的默认文字。*/
function test() {
    let textInput = Selection.FormFields.Item(1).TextInput
    textInput.EditType(wdRegularText, "example_3", null, true)
}
```
