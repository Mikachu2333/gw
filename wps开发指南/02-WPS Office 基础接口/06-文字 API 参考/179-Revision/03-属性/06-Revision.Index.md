# Revision.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Revision** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上最后一处修订的索引。*/
function test() {
    alert(ActiveDocument.Revisions.Item(ActiveDocument.Revisions.Count).Index)
}
```


```JavaScript
/*本示例判断如果第一个文档上修订的类型为wdRevisionInsert，则显示该修订的索引。*/
function test() {
    let revisions = Documents.Item(1).Revisions
    for (let i = 1; i <= revisions.Count; i++) {
        if (revisions.Item(i).Type == wdRevisionInsert) {
            alert(revisions.Item(i).Index)
        }
    }
}
```
