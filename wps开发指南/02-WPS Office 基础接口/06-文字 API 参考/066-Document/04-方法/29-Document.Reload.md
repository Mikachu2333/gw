# Document.Reload

通过解析指向缓冲文档的超链接再下载该文档来重新加载该文档。



## 语法

express.**Reload()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


该方法异步重新加载文档，也就是说，在真正开始重新加载文档之前，可以执行此过程中 **Reload** 方法后紧跟的语句。因此，在宏中使用此方法将得到意想不到的结果。



## 示例


```JavaScript
/*本示例打开并重新加载指定的超链接。*/
function test() {
    ActiveDocument.FollowHyperlink("https://365.kdocs.cn/")
    ActiveDocument.Reload()
}
```


```JavaScript
/*本示例将异步重新加载第一个文档。*/
function test() {
    Documents.Item(1).Reload()
}
```
