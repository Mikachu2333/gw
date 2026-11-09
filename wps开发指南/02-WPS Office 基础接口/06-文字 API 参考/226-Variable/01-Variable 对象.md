# Variable 对象

代表存储为文档的一部分的变量。文档变量用于在宏会话之间保留宏设置。 **Variable** 对象是 **[Variables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variables/obj)** 集合的一个成员。 **Variables** 集合包括文档或模板中的所有文档变量。

## 说明


使用 **Variables** (_Index_) 可返回一个 **Variable** 对象，其中 _Index_ 为文档变量名或索引号。


## 示例


```JavaScript
/*本示例显示活动文档上名为“commondata”的文档变量的值。*/
function test() {
    alert(ActiveDocument.Variables.Item("commondata").Value)
}
```
索引号代表文档变量在 **Variables** 集合中的位置。最后添加到 **Variables** 集合的变量的索引号为 1，倒数第二个添加到集合的变量的索引号为 2，以此类推。



```JavaScript
/*本示例显示活动文档上第一个文档变量的名称。*/
function test() {
    alert(ActiveDocument.Variables.Item(1).Name)
}
```
可以使用 **Variables** 集合的 **Add** 方法向文档添加变量。



```JavaScript
/*本示例向活动文档添加一个名为“Temp”的文档变量，其值为 "12"。*/
function test() {
    ActiveDocument.Variables.Add("Temp", "12")
}
```
如果要添加的文档变量与 **Variables** 集合中已有的变量同名，那么将发生错误。要避免此错误，请在添加新变量之前枚举集合。



```JavaScript
/*本示例遍历活动文档上所有文档变量，如果已存在名为“Blue”的文档变量，则将其值设置为 6。如果此变量尚不存在，则将其添加到文档中并将其设置为 6。*/
function test() {
    let num = 0
    let variables = ActiveDocument.Variables
    for (let i = 1; i <= variables.Count; i++) {
        if (variables.Item(i).Name == "Blue") {
            num = variables.Item(i).Index
        }
    }
    if (num == 0) {
        variables.Add("Blue", "6")
    } else {
        variables.Item(num).Value = 6
    }
}
```
只有将合适的变量名插入 DOCVARIABLE 域，文档变量才是可见的。



```JavaScript
/*本示例在活动文档中添加一个名为“Temp”的文档变量，然后插入一个 DOCVARIABLE 域显示该变量的值。*/
function test() {
    ActiveDocument.Variables.Add("Temp", "12")
    ActiveDocument.Fields.Add(Selection.Range, wdFieldDocVariable, "Temp")
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = false
}
```
要将文档变量添加到模板，请使用 **OpenAsDocument** 方法将该模板作为文档打开。



```JavaScript
/*本示例将用户名（从“选项”对话框中）存储在附加到活动文档的模板中。*/
function test() {
    Application.ScreenUpdating = false
    let document = ActiveDocument.AttachedTemplate.OpenAsDocument()
    document.Variables.Add("UserName", Application.UserName)
    document.Close(wdSaveChanges)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variable/member/Delete) | 删除指定的变量。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variable/member/Index) | 返回一个 **Long** 类型的值, 该值代表某个变量在变量集合中的序号位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variable/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variable/member/Value) | 返回或设置文档变量的值。可读写 **String** 类型。 |