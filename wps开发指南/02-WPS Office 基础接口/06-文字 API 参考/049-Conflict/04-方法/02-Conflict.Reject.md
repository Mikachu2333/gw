# Conflict.Reject

拒绝用户更改，删除冲突，并接受冲突更改的服务器版本。



## 语法

express.**Reject()**

express   一个代表 **Conflict** 对象的变量。

## 返回值

void

## 说明


 **Reject** 方法拒绝冲突的用户版本，并接受服务器上的当前版本。



## 示例


```JavaScript
/*本示例拒绝活动文档中的所有冲突。*/
function test() {
    let conflicts = ActiveDocument.CoAuthoring.Conflicts
    for (let i = 1; i <= conflicts.Count; i++) {
        conflicts.Item(i).Reject()
    }
}
```


```JavaScript
/*本示例判断如果第一个文档中的 Conflict 对象的数量小于 3，则拒绝文档中第一个冲突。*/
function test() {
    let conflicts = Documents.Item(1).CoAuthoring.Conflicts
    if (conflicts.Count < 3) {
        conflicts.Item(1).Reject()
    }
}
```
