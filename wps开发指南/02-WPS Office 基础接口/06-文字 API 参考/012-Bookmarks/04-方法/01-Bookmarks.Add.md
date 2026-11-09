# Bookmarks.Add

返回一个 **[Bookmark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/obj)** 对象，该对象代表添加到区域中的书签。



## 语法

express.**Add(Name, Range)**

express   一个代表 **Bookmarks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 书签的名称。名称不能超过 40 个字符或包含多个单词。 |
| Range | 可选 | any | 书签标记的文本区域。可将书签设置到一个折叠的区域（插入点）。 |

## 返回值

Bookmark

## 示例


```JavaScript
/*本示例为活动文档中的所选区域添加名为“myplace”的书签。*/
function test() {
    // Select some text in the active document prior to execution.
    Application.ActiveDocument.Bookmarks.Add("myplace", Selection.Range)
}
```


```JavaScript
/*本示例在插入点添加名为“mark”的书签。*/
function test() {
    Application.ActiveDocument.Bookmarks.Add("mark")
}
```


```JavaScript
/*本示例在第一个文档中的第三段添加名为“third_para”的书签，然后在活动窗口中显示该文档的所有书签。*/
function test() {
    // To best illustrate this example,
    // the first document must be opened, not active,
    // and contain more than 3 paragraphs.
    Documents.Item(1).Bookmarks.Add("third_para", Documents.Item(1).Paragraphs.Item(3).Range)
    Documents.Item(1).ActiveWindow.View.ShowBookmarks = true
}
```
