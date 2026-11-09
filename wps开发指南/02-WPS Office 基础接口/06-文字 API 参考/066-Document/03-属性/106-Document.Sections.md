# Document.Sections

返回一个 **[Sections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/obj)** 集合，该集合代表指定文档中的节。只读。



## 语法

express.**Sections**

express   一个代表 **Document** 对象的变量。

## 类型

Sections

## 示例


```JavaScript
/*本示例设置活动文档中所有节的页面方向。*/
function test() {
    let sections = ActiveDocument.Sections
    for (let i = 1; i <= sections.Count; i++) {
        sections.Item(i).PageSetup.Orientation = wdOrientLandscape
    }
}
```


```JavaScript
/*本示例创建一个新文档，然后向该文档中添加一些文字，然后在该文档中创建一个新节，然后将文字插入新节。*/
function test() {
    let document = Documents.Add()
    Selection.InsertAfter("This is section 1.")
    let section = document.Sections.Add()
    section.Range.InsertAfter("This is section 2")
}
```
