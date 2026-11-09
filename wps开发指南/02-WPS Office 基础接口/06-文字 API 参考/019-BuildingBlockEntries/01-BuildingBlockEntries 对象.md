# BuildingBlockEntries 对象

代表模板中所有 **[BuildingBlock](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/obj)** 对象的集合。

## 说明


可以使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockEntries/member/Add)** 方法创建新的构建基块，并将该构建基块添加到模板中。

与 **BuildingBlocks** 集合的 **Add** 方法不同，在使用 **BuildingBlockEntries** 集合的 **Add** 方法添加构建基块时需要指定类型和类别。这是因为构建基块是按类型和类别组织的。在使用 **BuildingBlockEntries** 集合时，访问的是模板中整个构建基块的集合，但在使用 **BuildingBlocks** 集合时，访问的是模板中特定类型和类别的构建基块集合。

可以使用 **BuildingBlock** 对象的 **Category** 和 **Type** 属性，来确定构建基块的类型和类别。


## 示例


```JavaScript
/*本示例将所选文本添加到 Templates 集合中第一个模板的水印构建基块库中。*/
function test() {
    Application.Templates.Item(1).BuildingBlockEntries.Add("New Building Block Entry", wdTypeWatermarks, "General", Selection.Range)
}
```


```JavaScript
/*本示例显示第一个模板的第二个构建基块类型的本地化名称。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(2)
    alert(buildingBlock.Type.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockEntries/member/Add) | 在模板中创建一个新的生成块条目，并且返回一个代表新的生成块条目的 **[BuildingBlock](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockEntries/member/Item) | 返回 **BuildingBlock** 对象，该对象表示集合中的指定项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockEntries/member/Count) | 返回 **BuildingBlockEntries** 集合中的项目数。只读 **Long** 类型。 |