# Conflict 对象

代表共同创作的文档中的冲突编辑。 **Conflict** 对象的类型由 [WdRevisionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRevisionType) 枚举指定。

## 说明


尽管 WPS 中的共同创作旨在最大程度地减少冲突，但在编辑启用了共同创作的文档时，有时会发生冲突。 当 WPS 需要用户输入来解决合并时，会发生冲突。

文档只能在支持通过 HTTP 协议通过 SOAP 进行文件同步的服务器上共同创作。

例如，当用户从服务器打开共同创作的文档、脱机工作以及再次联机将文档保存回服务器时，可能会发生冲突。 另一个示例是，当多个人员在同一时间处理同一文档范围时，有时会发生冲突。

用户只有在执行显式文档保存时才会知道文档中的冲突。 当用户执行显式文档保存时，如果文档中存在冲突，WPS 将进入冲突解决模式。 冲突解决模式使用户能够解决文档冲突。


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
/*本示例判断如果第一个文档中的 Conflict 对象的数量小于 4，则接受文档中第一个冲突。*/
function test() {
    let conflicts = Documents.Item(1).CoAuthoring.Conflicts
    if (conflicts.Count < 4) {
        conflicts.Item(1).Accept()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Accept](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflict/member/Accept) | 接受用户指定的冲突更改，删除冲突，并将更改合并到文档的服务器副本中。 |
| [Reject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflict/member/Reject) | 拒绝用户更改，删除冲突，并接受冲突更改的服务器版本。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflict/member/Index) | 返回 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflict/member/Range) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj) 对象，该对象代表包含在指定对象中的文档部分。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflict/member/Type) | 返回 [Conflict](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Conflict/obj) 对象的 [WdRevisionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRevisionType)。只读。 |