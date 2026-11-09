# Document.Revisions

返回一个 **[Revisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revisions/obj)** 集合，该集合代表文档或区域中的修订。只读。



## 语法

express.**Revisions**

express   一个代表 **Document** 对象的变量。

## 类型

Revisions

## 示例


```JavaScript
/*本示例显示活动文档中修订的数目。*/
function test() {
    alert(ActiveDocument.Revisions.Count)
}
```


```JavaScript
/*本示例接受第一个文档中所有修订。*/
function test() {
    Documents.Item(1).Revisions.AcceptAll()
}
```
