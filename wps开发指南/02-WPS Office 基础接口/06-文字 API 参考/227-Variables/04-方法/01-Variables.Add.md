# Variables.Add

返回一个 **Variable** 对象，该对象代表添加到文档中的变量。



## 语法

express.**Add(Name, Value)**

express   一个代表 **Variables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 文档变量的名称。 |
| Value | 可选 | any | 文档变量的值。 |

## 返回值

Variable

## 说明


除非用相应的变量名插入了 DOCVARIABLE 域，否则用户可以看到文档变量。如果要插入的变量名称已经存在于 **Variables** 集合中，则会产生错误。若要避免这个错误，可在向集合中添加新变量之前，枚举该集合的所有成员。



## 示例


```JavaScript
/*本示例为活动文档添加一个名为 Temp 的文档变量，然后插入一个 DOCVARIABLE 域，以显示 Temp 变量的值。*/
function test() {
    ActiveDocument.Variables.Add("Temp", "12")
    ActiveDocument.Fields.Add(Selection.Range, wdFieldDocVariable, "Temp")
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = false
}
```


```JavaScript
/*本示例将名为“Blue”的文档变量的值设为 6，如果该变量不存在，则将该文档变量添加到文档，并将值设为 6。*/
function test() {
    let num = 0
    for (let i = 1; i <= ActiveDocument.Variables.Count; i++) {
        let variable = ActiveDocument.Variables.Item(i)
        if (variable.Name == "Blue") {
            num = variable.Index
        }
    }
    if (num == 0) {
        ActiveDocument.Variables.Add("Blue", "6")
    } else {
        ActiveDocument.Variables.Item(num).Value = "6"
    }
}
```


```JavaScript
/*本示例将用户名称（来自“选项”对话框）存储在附加到活动文档的模板中。*/
function test() {
    Application.ScreenUpdating = false
    let document = ActiveDocument.AttachedTemplate.OpenAsDocument()
    document.Variables.Add("UserName", Application.UserName)
    document.Close(wdSaveChanges)
}
```
