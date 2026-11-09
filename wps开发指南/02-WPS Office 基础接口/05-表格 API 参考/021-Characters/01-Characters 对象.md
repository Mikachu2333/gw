# Characters 对象

代表包含文本的对象中的字符。

## 说明


使用 **Characters** 对象可修改包含在全文本字符串中的任意字符序列。

使用 **Characters** (*start*, *length* )（其中 *start* 为起始字符号，而 *length* 为要返回的字符个数）返回 **Characters** 对象。


## 示例


```JavaScript
/*下例向单元格 B1 中添加文本，并将第二个单词设置为加粗。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("B1").Value2 = "New Title"
    Application.Worksheets.Item("Sheet1").Range("B1").Characters(5, 5).Font.Bold = true
}
```
仅当需要更改对象中文本的一部分而不影响其余部分时，才有必要使用 **Characters** 方法（如果对象不支持格式文本，则不能使用 **Characters** 方法对文本中的一部分单独设置格式）。要同时更改所有文本，通常可以对该对象直接应用某一适当的方法或属性。



```JavaScript
/*下例将单元格 A5 的内容设置为倾斜。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A5").Characters().Font.Italic = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Delete) | 删除对象。 |
| [Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Insert) | 在所选的字符前面插入一个字符串。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Caption) | 返回或设置一个 **String** 值，它代表此字符区域的文本。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Font) | 返回一个 **Font** 对象，它代表指定对象的字体。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Parent) | 返回指定对象的父对象。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/member/Text) | 返回或设置指定对象中的文本。 **String** 型，可读写。 |