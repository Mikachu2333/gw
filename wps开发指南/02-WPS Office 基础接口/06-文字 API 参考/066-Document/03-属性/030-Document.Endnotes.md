# Document.Endnotes

返回一个 **[Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/obj)** 集合，该集合代表文档中的所有尾注。只读。



## 语法

express.**Endnotes**

express   一个代表 **Document** 对象的变量。

## 类型

Endnotes

## 示例


```JavaScript
/*本示例将活动文档中的尾注放在文档的结尾并将尾注引用编号设置为小写的罗马数字。*/
function test() {
    let endnotes = ActiveDocument.Endnotes
    endnotes.Location = wdEndOfDocument
    endnotes.NumberStyle = wdNoteNumberStyleLowercaseRoman
}
```


```JavaScript
/*本示例判断如果第一个文档中尾注的数量大于等于1，则将所有尾注转换为脚注。*/
function test() {
    if (Documents.Item(1).Endnotes.Count >= 1) {
        Documents.Item(1).Endnotes.Convert()
    }
}
```
