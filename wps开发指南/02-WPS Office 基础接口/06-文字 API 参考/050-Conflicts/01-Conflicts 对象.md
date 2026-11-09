# Conflicts 对象

代表文档中的冲突的 [Conflict](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflict/obj) 对象的集合。 **Conflict** 对象的类型由 [WdRevisionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRevisionType) 枚举指定。

## 说明


使用 [Conflicts](#TODO) 属性可以返回文档的 **Conflicts** 集合。使用 Conflicts(_Index_) 可以返回单个 **Conflict** 对象，其中 _Index_ 为冲突索引号。


## 示例


```JavaScript
/*本示例接受活动文档中的第一个冲突。*/
function test() {
    ActiveDocument.CoAuthoring.Conflicts.Item(1).Accept()
}
```


```JavaScript
/*本示例判断如果第一个文档中的 Conflict 对象的数量小于 4，则接受文档中的所有用户冲突更改。*/
function test() {
    let conflicts = Documents.Item(1).CoAuthoring.Conflicts
    if (conflicts.Count < 4) {
        conflicts.AcceptAll()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AcceptAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflicts/member/AcceptAll) | 接受所有冲突更改，删除冲突，并将更改合并到文档的服务器副本中。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflicts/member/Item) | 返回集合中的单个 **Conflicts** 对象。 |
| [RejectAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflicts/member/RejectAll) | 拒绝所有用户的更改并保留文档的服务器副本。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflicts/member/Count) | 返回 **Conflicts** 集合中的项目数。只读。 |