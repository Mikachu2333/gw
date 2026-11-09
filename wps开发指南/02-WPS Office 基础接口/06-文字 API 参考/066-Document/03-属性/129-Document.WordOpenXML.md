# Document.WordOpenXML

返回一个 **String** 类型的值，该值代表文档的 WPS Open XML 内容的平面 XML 格式。只读。



## 语法

express.**WordOpenXML**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档的 WPS Open XML 内容的平面 XML 格式。*/
function test() {
    alert(ActiveDocument.WordOpenXML)
}
```


```JavaScript
/*本示例在光标处插入第一个文档的 WPS Open XML 内容的平面 XML 格式。*/
function test() {
    Selection.TypeText(Documents.Item(1).WordOpenXML)
}
```
