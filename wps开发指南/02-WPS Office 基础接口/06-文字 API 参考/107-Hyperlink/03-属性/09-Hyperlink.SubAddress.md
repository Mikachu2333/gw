# Hyperlink.SubAddress

返回或设置指定超链接目标中命名的位置。 **String** 类型，可读写。



## 语法

express.**SubAddress**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 说明


命名的位置可以是 WPS 文档中的书签、ET 工作表中命名的单元格或单元格引用、Access 数据库中命名的对象，或者是 WPP 演示文稿中幻灯片的序号。



## 示例


```JavaScript
/*本例显示所选超链接的子地址。*/
function test() {
    if (Application.Selection.Range.Hyperlinks.Count >= 1) {
        alert(Application.Selection.Range.Hyperlinks.Item(1).SubAddress)
    }
}
```


```JavaScript
/*本例为活动文档中的选定内容添加超链接，设置超链接的目标和子地址，然后将其显示在消息框中。*/
function test() {
    let hyperlink = Application.ActiveDocument.Hyperlinks.Add(Selection.Range, "E:/MyFile.docx", "temp")
    alert("The hyperlink goes to " + hyperlink.SubAddress)
}
```
