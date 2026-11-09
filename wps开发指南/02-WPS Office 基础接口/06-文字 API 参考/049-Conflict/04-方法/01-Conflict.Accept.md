# Conflict.Accept

接受用户指定的冲突更改，删除冲突，并将更改合并到文档的服务器副本中。



## 语法

express.**Accept()**

express   一个代表 **Conflict** 对象的变量。

## 返回值

void

## 说明


 **Accept** 方法接受冲突更改的用户版本，并拒绝冲突更改的服务器版本。



## 示例


```JavaScript
/*本示例接受活动文档中的所有冲突。*/
function test() {
    let conflicts = ActiveDocument.CoAuthoring.Conflicts
    for (let i = 1; i <= conflicts.Count; i++) {
        conflicts.Item(i).Accept()
    }
}
```


```JavaScript
/*本示例判断如果第一个文档中的 Conflict 对象的数量小于 4，则接受文档中第一个冲突。*/
function test() {
    let conflicts = Documents.Item(1).CoAuthoring.Conflicts
    if (conflicts.Count < 4) {
        conflicts.Item(1).Accept()
    }
}
```
