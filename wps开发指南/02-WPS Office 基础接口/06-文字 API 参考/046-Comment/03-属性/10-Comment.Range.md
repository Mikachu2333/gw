# Comment.Range

返回代表备注内容的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。



## 语法

express.**Range**

express   一个代表 **Comment** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例修改第一个备注的文本，在前面附加上“test”文本。*/
function test() {
    Application.ActiveDocument.Comments.Item(1).Range.InsertBefore("test")
}
```


```JavaScript
/*本示例删除活动文档上第二个备注的文本内容。*/
function test() {
    Application.ActiveDocument.Comments.Item(2).Range.Delete()
}
```
