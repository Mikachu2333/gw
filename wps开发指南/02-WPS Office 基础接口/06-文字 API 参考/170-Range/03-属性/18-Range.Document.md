# Range.Document

返回与指定区域相关的 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象。只读。



## 语法

express.**Document**

express   一个代表 **Range** 对象的变量。

## 类型

Document

## 示例


```JavaScript
/*本示例显示与所选内容相关的文档的名称。*/
function test() {
    alert(Selection.Range.Document.Name)
}
```


```JavaScript
/*本示例显示与活动文档的主文档文章相关的文档的类型是否为wdTypeDocument。*/
function test() {
    alert(ActiveDocument.Content.Document.Type == wdTypeDocument)
}
```
