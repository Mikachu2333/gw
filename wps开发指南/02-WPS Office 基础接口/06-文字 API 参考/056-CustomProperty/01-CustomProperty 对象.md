# CustomProperty 对象

代表智能标记的自定义属性的单个实例。 **CustomProperty** 对象是 **[CustomProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperties/obj)** 集合的一个成员。

## 说明


使用 **CustomProperties** 集合的 [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperties/member/Item)方法或 **Properties** (*Index*) 属性（其中 *Index* 是属性编号）返回一个 **CustomProperty** 对象。

使用 **Name** 和 **Value** 属性返回与智能标记的自定义属性相关的信息。


## 示例


```JavaScript
/*本示例显示活动文档中第一个智能标记的第一个自定义属性的名称和值。*/
function test() {
    let customProperty = Application.ActiveDocument.SmartTags.Item(1).Properties.Item(1)
    alert("Smart Tag Name: " + customProperty.Name + "\n" + "Smart Tag Value: " + customProperty.Value)
}
```


```JavaScript
/*本示例判断如果第一个文档中第一个智能标记的第一个自定义属性的名称为“default”，则删除该自定义属性。*/
function test() {
    let customProperty = Documents.Item(1).SmartTags.Item(1).Properties.Item(1)
    if (customProperty.Name == "default") {
        customProperty.Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperty/member/Delete) | 删除指定自定义属性。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperty/member/Application) | 返回一个代表 WPS 应用程序的 [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj) 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperty/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperty/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperty/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **CustomProperty** 对象的父对象。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperty/member/Value) | 返回或设置自定义属性的值。可读/写 **String** 类型。 |