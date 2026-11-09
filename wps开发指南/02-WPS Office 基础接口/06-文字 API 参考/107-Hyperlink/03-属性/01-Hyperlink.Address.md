# Hyperlink.Address

返回或设置指定超链接的地址（例如，文件名或 URL）。 **String** 类型，可读写。



## 语法

express.**Address**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 说明


如果不存在与某对象关联的超链接，则设置 **Address** 属性将返回一个错误。在此情况下，请将 **Add** 方法用于 **Hyperlinks** 集合来添加超链接。



## 示例


```JavaScript
/*本示例在活动文档的选中区域添加一个超链接，并显示超链接的地址。*/
function test() {
    let hyperlink = Application.ActiveDocument.Hyperlinks.Add(Selection.Range, "https://wps.cn/")
    alert("The hyperlink goes to " + hyperlink.Address)
}
```


```JavaScript
/*如果活动文档包含超链接，则本示例会在文档的末尾插入超链接目标的列表。*/
function test() {
    let range = Application.ActiveDocument.Range(ActiveDocument.Content.End - 1)
    let count = 0
    for (let i = 1; i <= Application.ActiveDocument.Hyperlinks.Count; i++) {
        count++
        range.InsertAfter("Hyperlink #" + count + "\t")
        range.InsertAfter(Application.ActiveDocument.Hyperlinks.Item(i).Address)
        range.InsertParagraphAfter()
    }
}
```
