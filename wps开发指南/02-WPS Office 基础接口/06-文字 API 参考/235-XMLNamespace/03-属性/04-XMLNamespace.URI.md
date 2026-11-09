# XMLNamespace.URI

返回一个 **String** 类型的值，代表相关命名空间的“统一资源标识符”(URI)。



## 语法

express.**URI**

express   一个代表 **XMLNamespace** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示架构库中第一个架构的 URI。*/
function test() {
    alert(Application.XMLNamespaces.Item(1).URI)
}
```


```JavaScript
/*本示例将活动文档上新增段落的文档部分的文本设置为架构库中第一个架构的 URI。*/
function test() {
    let paragraph = ActiveDocument.Paragraphs.Add()
    paragraph.Range.Text = Application.XMLNamespaces.Item(1).URI
}
```
