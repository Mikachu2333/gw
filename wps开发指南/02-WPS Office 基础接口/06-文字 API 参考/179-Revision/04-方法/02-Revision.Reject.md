# Revision.Reject

拒绝接受指定的修订。将删除修订标记，不改变原文



## 语法

express.**Reject()**

express   一个代表 **Revision** 对象的变量。

## 返回值

void

## 说明


不能拒绝格式更改。



## 示例


```JavaScript
/*本示例将拒绝在活动文档中找到的下一处修订。*/
function test() {
    let revNext = Selection.NextRevision()
    if (Application.ActiveDocument.Revisions.Count >= 1 && revNext !== null) {
        revNext.Reject()
    }
}
```


```JavaScript
/*本示例拒绝第一段中的所有修订。*/
function test() {
    let range = ActiveDocument.Paragraphs(1).Range
    for (let i = 1; i <= range.Revisions.Count; i++) {
        range.Revisions.Item(i).Reject()
    }
}
```


```JavaScript
/*本示例拒绝选定内容中的第一处修订。*/
function test() {
    let revisions = Selection.Range.Revisions
    if (revisions.Count >= 1) {
        revisions.Item(1).Reject()
    }
}
```
