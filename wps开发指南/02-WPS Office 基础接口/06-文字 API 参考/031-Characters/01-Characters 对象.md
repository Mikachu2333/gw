# Characters 对象

选定内容、区域或文档中的字符的集合。不存在 Character 对象； **Characters** 集合中的每一项都是一个代表单个字符的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。

## 说明


使用 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 、 **Range** 或 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象的 **Characters** 属性返回 **Characters** 集合。


## 示例


```JavaScript
/*本示例显示选定的字符数。*/
function test() {
    alert(Selection.Characters.Count + " characters are selected")
}
```
使用 **Characters** (_Index_) 返回代表一个字符的 **Range** 对象（其中 _Index_ 是索引编号）。索引编号代表字符在 **Characters** 集合中的位置。



```JavaScript
/*本示例将选定内容中的首字母设置为 24 磅加粗格式。*/
function test() {
    let character = Application.Selection.Characters.Item(1)
    character.Bold = true
    character.Font.Size = 24
}
```
文档中本集合的 **Count** 属性返回主文章（文章：包含文档中可区别于其他文字区域的文字区域。例如，如果文档包括正文文本、脚注和标题，则文章包含主文章、脚注文章和标题文章。）的项目数。要计算其他部分的项目数，请使用 **Range** 对象的集合。

没有用于 **Characters** 集合的 **Add** 方法。但是可以使用 **InsertAfter** 或 **InsertBefore** 方法将字符添加到 **Range** 对象中。



```JavaScript
/*本示例将活动文档中第一个字符字体颜色设置为红色。*/
function test() {
    Application.ActiveDocument.Characters.Item(1).Font.Color = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/member/Item) | 返回集合中的单个 **Range** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/member/Count) | 返回 **Characters** 集合中的字符数。 **Long** 类型，只读。 |
| [First](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/member/First) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表集合中的第一个字符。 |
| [Last](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/member/Last) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表集合中的最后一个字符。 |