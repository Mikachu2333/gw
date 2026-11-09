# Conflict.Type

返回 [Conflict](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflict/obj) 对象的 [WdRevisionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRevisionType)。只读。



## 语法

express.**Type**

express   一个代表 **Conflict** 对象的变量。

## 类型

WdRevisionType

## 示例


```JavaScript
/*本示例显示活动文档中的每个冲突的类型是否为 wdRevisionInsert。*/
function test() {
    let conflicts = ActiveDocument.CoAuthoring.Conflicts
    for (let i = 1; i <= conflicts.Count; i++) {
        alert(conflicts.Item(i).Type == wdRevisionInsert)
    }
}
```


```JavaScript
/*本示例判断如果第一个文档中的第一个 Conflict 对象的类型为无修订，则通知用户。*/
function test() {
    let conflict = Documents.Item(1).CoAuthoring.Conflicts.Item(1)
    if (conflict.Type == wdNoRevision) {
        alert("类型为无修订")
    }
}
```
