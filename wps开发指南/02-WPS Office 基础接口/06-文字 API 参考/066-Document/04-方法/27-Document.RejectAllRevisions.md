# Document.RejectAllRevisions

拒绝指定文档的所有修订。



## 语法

express.**RejectAllRevisions()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果活动文档中所做的修订的数量大于等于1，则拒绝该文档的所有修订。*/
function test() {
    if (ActiveDocument.Revisions.Count >= 1) {
        ActiveDocument.RejectAllRevisions()
    }
}
```


```JavaScript
/*本示例拒绝第一个文档的所有修订。*/
function test() {
    Documents.Item(1).RejectAllRevisions()
}
```
