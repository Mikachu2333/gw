# Revision.Date

返回完成指定修订的日期和时间， **Data** 类型，只读。



## 语法

express.**Date**

express   一个代表 **Revision** 对象的变量。

## 类型

Date

## 示例


```JavaScript
/*本示例显示在活动文档中查找到的下一处修订的日期和时间。*/
function test() {
    if (ActiveDocument.Revisions.Count >= 1) {
        let revision = Selection.NextRevision()
        if (revision != null) {
            alert(revision.Date)
        }
    }
}
```


```JavaScript
/*本示例在活动文档上插入主文档中所有修订的日期和时间。*/
function test() {
    let revisions = ActiveDocument.Content.Revisions
    for (let i = 1; i <= revisions.Count; i++) {
        Selection.TypeText(revisions.Item(i).Date + "\n")
    }
}
```
