# Styles 对象

 **Style** 对象的集合，这些对象代表文档中的内置样式和用户定义的样式。

## 说明


使用 **Styles** 属性返回 **Styles** 集合。


## 示例


```JavaScript
/*本示例删除活动文档中的所有用户定义样式。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Styles.Count; i++) {
        let style = ActiveDocument.Styles.Item(i)
        if (!style.BuiltIn) {
            style.Delete()
        }
    }
}
```
使用 **Add** 方法创建新的用户定义样式并将其添加到 **Styles** 集合。



```JavaScript
/*本示例添加了一个名为“Introduction”的新字符样式，并将其设置为 12 磅 Arial 字体，具有粗体和斜体格式，然后将此新字符样式应用于所选区域。*/
function test() {
    let style = ActiveDocument.Styles.Add("Introduction", wdStyleTypeCharacter)
    let font = style.Font
    font.Bold = true
    font.Italic = true
    font.Name = "Arial"
    font.Size = 12
    Selection.Range.Style = "Introduction"
}
```
使用 **Styles** (Index)，其中 Index 是样式名称、 **WdBuiltinStyle** 常量或索引号，以返回单个 **Style** 对象。您必须与样式名称的拼写和间距完全匹配，但不必完全匹配其大小写。



```JavaScript
/*本示例修改活动文档中名为“Color”的用户定义的样式的字体。*/
function test() {
    ActiveDocument.Styles.Item("Color").Font.Name = "Arial"
}
```


```JavaScript
/*本示例将内置“标题 1”样式设置为非加粗。*/
function test() {
    ActiveDocument.Styles.Item(wdStyleHeading1).Font.Bold = false
}
```
样式索引编号代表样式在按字母顺序排列的样式名列表中的位置。请注意，Styles.Item(1) 这是按字母顺序排列列表中的第一个样式。



```JavaScript
/*本示例显示第一个样式的基本样式和样式名称。*/
function test() {
    let style = ActiveDocument.Styles.Item(1)
    alert(`Base style= ${style.BaseStyle}\nStyle name= ${style.NameLocal}`)
}
```
 **Template** 对象中不能使用 **Styles** 对象。但是，可以使用 **OpenAsDocument** 方法将模板作为文档打开，以便可以修改模板中的样式。



```JavaScript
/*本示例更改附加到活动文档的模板中“标题 1”样式的格式。*/
function test() {
    let document = ActiveDocument.AttachedTemplate.OpenAsDocument()
    document.Styles.Item(wdStyleHeading1).Font.Name = "Arial"
    document.Close(wdSaveChanges)
}
```
使用 **OrganizerCopy** 方法在文档和模板之间复制样式。使用 **UpdateStyles** 方法更新活动文档中的样式，以匹配附加模板中的样式定义。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/member/Add) | 创建新的用户定义样式并将其添加到 **Styles** 集合。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/member/Item) | 返回集合中的单个 **Style** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中样式的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Styles** 对象的父对象。 |