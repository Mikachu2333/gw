# Document.Characters

返回一个 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/obj)** 集合，该集合代表文档中的字符。只读。



## 语法

express.**Characters**

express   一个代表 **Document** 对象的变量。

## 类型

Characters

## 示例


```JavaScript
/*本示例显示活动文档中的字符数（包括空格）。*/
function test() {
    let count = ActiveDocument.Characters.Count
    alert("活动文档中的字符数: " + count)
}
```


```JavaScript
/*本示例将第一个文档的第一个字符的格式设置为粗斜体。*/
function test() {
    let range = Documents.Item(1).Characters.First
    range.Bold = msoTrue
    range.Italic = msoTrue
}
```
