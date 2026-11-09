# Document.DeleteAllComments

删除文档中 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/obj)** 集合内的所有批注。

使用 **Comments** 对象的 **Add** 方法可向文档中添加批注。



## 语法

express.**DeleteAllComments()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档所有批注*/
function test() {
    Application.ActiveDocument.DeleteAllComments()
}
```


```JavaScript
/*本示例判断如果第一个文档批注数量大于1，则删除所有批注*/
function test() {
    if (Documents.Item(1).Comments.Count > 1) {
        Documents.Item(1).DeleteAllComments()
    }
}
```
