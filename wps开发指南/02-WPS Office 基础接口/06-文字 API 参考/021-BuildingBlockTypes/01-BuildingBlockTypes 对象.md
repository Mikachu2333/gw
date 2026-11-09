# BuildingBlockTypes 对象

代表 **[BuildingBlockType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockType/obj)** 对象的集合。

## 说明


构建基块类型用 **[WdBuildingBlockTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBuildingBlockTypes)** 常量表示。可以使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockTypes/member/Item)** 方法访问 **BuildingBlockTypes** 集合中的特定类型。

要遍历不同构建基块类型，请使用 **For** 循环和 **[Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockTypes/member/Count)** 属性。


## 示例


```JavaScript
/*本示例遍历构建基块类型，并在即时窗口中打印类型名称。（本示例假设即时窗口是可见的。）*/
function test() {
    let bdbTypes = Application.Templates.Item(1).BuildingBlockTypes
    for (let i = 1; i <= bdbTypes.Count; i++) {
        Console.log(bdbTypes.Item(i).Name)
    }
}
```


```JavaScript
/*本示例显示附加到第一个文档的模板中页码编号构建基块的类别的数量。*/
function test() {
    let categories = Documents.Item(1).AttachedTemplate.BuildingBlockTypes.Item(wdTypePageNumber).Categories
    alert(categories.Count)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockTypes/member/Item) | 返回 **BuildingBlockType** 对象，该对象表示集合中的指定项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockTypes/member/Count) | 返回 **BuildingBlockTypes** 集合中的项目数。只读 **Long** 类型。 |