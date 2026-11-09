# Revision.Type

返回修订的类型。只读 **WdRevisionType** 类型。



## 语法

express.**Type**

express   一个代表 **Revision** 对象的变量。

## 类型

WdRevisionType

## 示例


```JavaScript
/*本示例判断如果活动文档中的下一处修订的修订类型为插入文本，则接受该修订。*/
function test() {
    let revision = Selection.NextRevision()
    if (revision != null && revision.Type == wdRevisionInsert) {
        revision.Accept()
    }
}
```


```JavaScript
/*本示例显示活动文档上第四处修订的类型是否为wdRevisionProperty。*/
function test() {
    alert(ActiveDocument.Revisions.Item(4).Type == wdRevisionProperty)
}
```
