# XMLNode.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表包含在指定对象中的文档部分。只读。



## 语法

express.**Range**

express   一个代表 **XMLNode** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选中活动文档中第四个元素的文档部分。*/
function test() {
    let xmlNode = Application.ActiveDocument.XMLNodes.Item(4)
    xmlNode.Range.Select()
}
```


```JavaScript
/*本示例将第一个文档上所有XML元素文档部分的格式设置为加粗，并设置该文档范围的字号。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes
    for (let i = 1; i <= xmlNodes.Count; i++) {
        xmlNodes.Item(i).Range.Bold = true
        xmlNodes.Item(i).Range.Font.Size = 20
    }
}
```
