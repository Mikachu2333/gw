# Conflicts.RejectAll

拒绝所有用户的更改并保留文档的服务器副本。



## 语法

express.**RejectAll()**

express   一个代表 **Conflicts** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例拒绝所有用户的更改，并保留活动文档的服务器副本。*/
function test() {
    ActiveDocument.CoAuthoring.Conflicts.RejectAll()
}
```


```JavaScript
/*本示例判断如果第一个文档中的 Conflict 对象的数量小于 3，则拒绝所有用户的更改并保留文档的服务器副本。*/
function test() {
    let conflicts = Documents.Item(1).CoAuthoring.Conflicts
    if (conflicts.Count < 3) {
        conflicts.RejectAll()
    }
}
```
