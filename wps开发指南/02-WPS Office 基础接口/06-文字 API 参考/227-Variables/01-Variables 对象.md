# Variables 对象

 **[Variable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variable/obj)** 对象的集合，这些对象代表已添加到文档或模板的变量。文档变量用于在宏会话之间保留宏设置。

## 说明


使用 **Variables** 属性可返回 **Variables** 集合。


## 示例


```JavaScript
/*本示例显示第一个文档上文档变量的数量。*/
function test() {
    alert(Documents.Item(1).Variables.Count + " variables")
}
```
使用 **Add** 方法可将变量添加到文档。



```JavaScript
/*本示例为活动文档添加一个名为“Temp”的文档变量，其值为12。*/
function test() {
    ActiveDocument.Variables.Add("Temp", "12")
}
```
如果要添加的文档变量的名称和 **Variables** 集合中已有的变量名称相同，将发生错误。要避免此错误，请在添加新变量之前枚举集合。



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
使用 **Variables** (_Index_) 可返回一个 **Variable** 对象，其中 _Index_ 为文档变量名或索引号。



```JavaScript
/*本示例显示活动文档上文档变量“Temp”的值。*/
function test() {
    alert(ActiveDocument.Variables.Item("Temp").Value)
}
```
索引号代表文档变量在 **Variables** 集合中的位置。添加到 **Variables** 集合的第一个变量的索引号为 1，添加到集合的第二个变量的索引号为 2，以此类推。



```JavaScript
/*本示例显示活动文档上第一个文档变量的名称。*/
function test() {
    alert(ActiveDocument.Variables.Item(1).Name)
}
```
要将变量添加到模板，请使用 **OpenAsDocument** 方法将模板作为文档打开。



```JavaScript
/*本示例将用户名称（来自“选项”对话框）存储在附加到活动文档的模板中。*/
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
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variables/member/Add) | 返回一个 **Variable** 对象，该对象代表添加到文档中的变量。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variables/member/Item) | 返回集合中的单个 **Variable** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variables/member/Count) | 返回一个 **Long** 类型的值,该值代表集合中变量的数量。 |