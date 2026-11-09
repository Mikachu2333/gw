# Range.Find

返回一个 **[Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/obj)** 对象，该对象包含查找操作所需的条件。只读。



## 语法

express.**Find**

express   一个代表 **Range** 对象的变量。

## 类型

Find

## 示例


```JavaScript
/*本示例在活动文档的主文档文章中查找所有字号为12的加粗文本“Hello”，并且将其替换为“exmple”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.Font.Bold = true
    find.Font.Size = 12
    find.Execute("Hello", null, null, null, null, null, null, null, null, "exmple")
}
```


```JavaScript
/*本示例显示是否在所选内容中搜索到文本“kingsoft”。*/
function test() {
    let find = Selection.Range.Find
    find.ClearFormatting()
    find.Execute("kingsoft")
    alert(find.Found)
}
```
