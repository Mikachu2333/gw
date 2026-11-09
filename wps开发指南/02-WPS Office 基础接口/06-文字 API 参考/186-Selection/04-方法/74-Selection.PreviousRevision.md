# Selection.PreviousRevision

找到前一处修订并作为 **Revision** 对象返回。



## 语法

express.**PreviousRevision(Wrap)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Wrap | 可选 | any | 如果为 **True** ，则在到达文档开始时继续从文档尾部查找修订。默认值为 **False** 。 |

## 返回值

Revision

## 示例


```JavaScript
/*本示例选定活动文档第一节中的最后一个修订，并显示此修订的日期与时间。*/
function test() {
    Selection.EndOf(wdStory, wdMove)
    let revision = Selection.PreviousRevision()
    if (revision != null) {
        alert(revision.Date)
    }
}
```


```JavaScript
/*本示例判断如果前一处修订的修改类型为删除或插入文本，则本示例将予以拒绝。如果修订类型为样式修改，则将接受该修订。*/
function test() {
    let revision = Selection.PreviousRevision(true)
    if (revision != null) {
        switch (revision.Type) {
            case wdRevisionDelete:
            case wdRevisionInsert:
                revision.Reject()
                break
            case wdRevisionStyle:
                revision.Accept()
                break
        }
    }
}
```
