# Document.ListTemplates

返回一个 **ListTemplates** 集合，该集合代表指定文档中的所有列表格式。只读。



## 语法

express.**ListTemplates**

express   一个代表 **Document** 对象的变量。

## 类型

ListTemplates

## 说明


 **ListTemplates** 属性是 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 、 **[ListGallery](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGallery/obj)** 和 **[Template](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/obj)** 对象的成员。



## 示例


```JavaScript
/*本示例显示活动文档中使用的列表模板数量。*/
function test() {
    alert(ActiveDocument.ListTemplates.Count)
}
```


```JavaScript
/*本示例显示第一个文档的第一个列表模板是否多级符号。*/
function test() {
    alert(Documents.Item(1).ListTemplates.Item(1).OutlineNumbered)
}
```
