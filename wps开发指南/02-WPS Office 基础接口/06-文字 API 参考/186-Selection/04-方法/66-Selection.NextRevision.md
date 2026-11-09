# Selection.NextRevision

找到下一处修订并作为一个 **Revision** 对象返回。



## 语法

express.**NextRevision(Wrap)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Wrap | 可选 | any | 如果为 **True** ，则在到达文档尾部时继续从文档开始查找修订。默认值为 **False** 。 |

## 返回值

Revision

## 说明


修订的文本成为当前的选定区域。用生成的 **Revision** 对象的属性来查看修订的类型、由谁制作的修订，等等。用 **Revision** 对象的方法接受或拒绝修订。

如果没有发现有修订，当前的选择区域保持不变。



## 示例


```JavaScript
/*本示例拒绝活动文档第五段后找到的下一处修订。如果未找到修订，则 revision 变量设置为 null。*/
function test() {
    if (ActiveDocument.Paragraphs.Count >= 5) {
        let revision = null
        let range = ActiveDocument.Paragraphs.Item(5).Range
        range.Select()
        revision = Selection.NextRevision(false)
        if (revision != null) {
            revision.Reject()
        }
    }
}
```


```JavaScript
/*如果下一处修订类型是插入文本，本示例将接受该修订。*/
function test() {
    let revision = Selection.NextRevision(true)
    if (revision != null) {
        if (revision.Type == wdRevisionInsert) {
            revision.Accept()
        }
    }
}
```


```JavaScript
/*本示例在当前选定内容后找到由文档作者制作的下一处修订。*/
function test() {
    let strAuthor = ActiveDocument.BuiltInDocumentProperties(wdPropertyAuthor)
    while (true) {
        let revision = Selection.NextRevision(false)
        if (revision != null) {
            if (revision.Author == strAuthor) {
                alert("Another revision by " + strAuthor + "!")
                break
            }
        } else {
            alert("No more revisions!")
            break
        }
    }
}
```
