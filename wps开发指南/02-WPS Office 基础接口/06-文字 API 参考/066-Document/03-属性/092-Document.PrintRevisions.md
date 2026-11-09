# Document.PrintRevisions

如果为 **True** ，则在打印文档的同时打印修订标记。如果返回 **False** ，则不打印修订标记（即打印接受修订后的状态）。 **Boolean** 类型，可读写。



## 语法

express.**PrintRevisions**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在打印活动文档时不带有修订标记。*/
function test() {
    ActiveDocument.PrintRevisions = false
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例判断如果活动文档打印时携带修订标记，则通知用户*/
function test() {
    if (ActiveDocument.PrintRevisions) {
        alert("当前已启动打印时不带修订标记")
    } else {
        alert("当前已启动打印时携带修订标记")
    }
}
```
