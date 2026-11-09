# Document.AcceptAllRevisions

接受对指定文档的所有修订。



## 语法

express.**AcceptAllRevisions()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例检查活动文档中的主要文章中是否有修订，如果有，则将文档的所有文章中的所有修订合并。*/
function test() {
    if (ActiveDocument.Revisions.Count >= 1) {
        ActiveDocument.AcceptAllRevisions()
    }
}
```


```JavaScript
/*本示例接受对第一个文档的所有修订。*/
function test() {
    Documents.Item(1).AcceptAllRevisions()
}
```
