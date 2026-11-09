# Conflicts.AcceptAll

接受所有冲突更改，删除冲突，并将更改合并到文档的服务器副本中。



## 语法

express.**AcceptAll()**

express   一个代表 **Conflicts** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例接受活动文档中的所有用户冲突更改。*/
function test() {
    ActiveDocument.CoAuthoring.Conflicts.AcceptAll()
}
```


```JavaScript
/*本示例判断如果第一个文档中的 Conflict 对象的数量小于 3，则接受文档中的所有用户冲突更改。*/
function test() {
    let conflicts = Documents.Item(1).CoAuthoring.Conflicts
    if (conflicts.Count < 3) {
        conflicts.AcceptAll()
    }
}
```
