# Document.RemoveLockedStyles

当文档中应用了格式设置限制时，清除文档中的锁定样式。



## 语法

express.**RemoveLockedStyles()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除活动文档中的锁定样式。*/
function test() {
    ActiveDocument.RemoveLockedStyles()
}
```


```JavaScript
/*本示例清除第一个文档中的锁定样式，并通知用户。*/
function test() {
    Documents.Item(1).RemoveLockedStyles()
    alert("已清除第一个文档中的锁定样式")
}
```
