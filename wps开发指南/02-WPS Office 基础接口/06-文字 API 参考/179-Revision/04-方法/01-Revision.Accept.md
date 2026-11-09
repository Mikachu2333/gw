# Revision.Accept

接受指定修订、删除修订标记并将更改合并到文档中。



## 语法

express.**Accept()**

express   一个代表 **Revision** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果下一处修订类型是插入文本，则接受该修订。*/
function test() {
    let revision = Selection.NextRevision(true)
    if (revision != null && revision.Type == wdRevisionInsert) {
        revision.Accept()
    }
}
```


```JavaScript
/*本示例接受选定内容中的所有修订。*/
function test() {
    let revisions = Selection.Range.Revisions
    for (let i = revisions.Count; i >= 1; i--) {
        revisions.Item(i).Accept()
    }
}
```
