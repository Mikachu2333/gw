# Revisions.AcceptAll

接受文档或区域中的所有修订、删除所有修订标记并将更改合并到文档中。



## 语法

express.**AcceptAll()**

express   一个代表 **Revisions** 对象的变量。

## 返回值

void

## 说明


使用 **AcceptAllRevisions** 方法接受文档中的所有修订。



## 示例


```JavaScript
/*本示例接受活动文档中的所有修订。*/
function test() {
    if (ActiveDocument.Revisions.Count >= 1) {
        ActiveDocument.Revisions.AcceptAll()
    }
}
```


```JavaScript
/*本示例接受选定内容中的所有修订。*/
function test() {
    Selection.Range.Revisions.AcceptAll()
}
```
