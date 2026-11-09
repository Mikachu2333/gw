# Pane.Document

返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象与指定窗格相关。只读。



## 语法

express.**Document**

express   一个代表 **Pane** 对象的变量。

## 类型

Document

## 示例


```JavaScript
/*本示例显示活动窗格的对应文档名。*/
function test() {
    alert(ActiveWindow.ActivePane.Document.Name)
}
```


```JavaScript
/*本示例关闭并保存活动窗格对应的文档。*/
function test() {
    ActiveWindow.ActivePane.Document.Close(wdSaveChanges)
}
```
