# Document.TablesOfContents

返回一个 **[TablesOfContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfContents/obj)** 集合，该集合代表指定文档中的目录。只读。



## 语法

express.**TablesOfContents**

express   一个代表 **Document** 对象的变量。

## 类型

TablesOfContents

## 示例


```JavaScript
/*本示例在“example.docx”文档的开始处添加目录。目录从 TC 域收集项目文本。*/
function test() {
    let range = Documents.Item("example.docx").Range(0, 0)
    Documents.Item("example.docx").TablesOfContents.Add(range, false, null, null, true)

}
```


```JavaScript
/*本示例更新活动文档的目录中的各项目页码。*/
function test() {
    let tbOfContents = ActiveDocument.TablesOfContents
    for (let i = 1; i <= tbOfContents.Count; i++) {
        tbOfContents.Item(i).UpdatePageNumbers()
    }
}
```
