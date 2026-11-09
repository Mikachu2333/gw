# BuildingBlock 对象

代表模板中的构建基块。构建基块是预先构建的内容，类似于自动图文集，其中可能包含文本、图像和格式。

## 说明


每个 **BuildingBlock** 对象都是 **[BuildingBlocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlocks/obj)** 和 **[BuildingBlockEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockEntries/obj)** 集合的成员。构建基块存储在 WPS 模板中。因此，要访问文档可用的构建基块，需要访问附加的模板。内置构建基块存储在名为“Building Blocks.dotx”的模板中。

可以使用 **BuildingBlocks** 集合或 BuildingBlockEntries 集合的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlocks/member/Item)** 方法返回各个构建基块。


## 示例


```JavaScript
/*本示例显示第一个模板的第一个构建基块的名称。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    alert(buildingBlock.Name)
}
```
根据访问集合的方式的不同，返回的集合可能不同。例如，用类别为“常规”的 **wdTypeAutoText** 类型访问构建基块集合所返回的集合，可能与用类别为“自定义”的 **wdTypeAutoText** 类型访问构建基块集合所返回的集合不同，与用类别为“常规”的 **wdTypeCustomAutoText** 类型访问构建基块集合所返回的集合也可能不同。因此，从 **BuildingBlockEntries** 集合访问的集合中的第一项可能与从 **BuildingBlocks** 集合访问的集合中的第一项不同。

要创建新的构建基块，可以使用 **BuildingBlockEntries** 集合或 **BuildingBlocks** 集合的 **Add** 方法。不过，建议使用 **BuildingBlockEntries** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockEntries/member/Add)** 方法来创建新的构建基块。



```JavaScript
/*本示例将所选文本添加到第一个模板的水印构建基块库中，并设置该构建基块的说明。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Add("New Building Block Entry", wdTypeWatermarks, "General", Selection.Range)
    buildingBlock.Description = "example"
}
```
可以使用 **[Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Insert)** 方法在文档中插入新的构建基块。



```JavaScript
/*本示例在活动文档的插入点插入第一个模板中的第一个构建基块。*/
function test() {
    Application.Templates.Item(1).BuildingBlockEntries.Item(1).Insert(Selection.Range)
}
```
可以使用 **[Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Delete)** 方法从模板删除构建基块。



```JavaScript
/*本示例删除第一个模板的第一个构建基块。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    buildingBlock.Delete()
}
```
构建基块按类别和类型组织。可以使用 **[BuildingBlockTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockTypes/obj)** 集合访问各个 **[BuildingBlockType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockType/obj)** 对象。使用 **[Categories](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Categories/obj)** 集合访问各个 **[Category](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Category)** 对象。然后，使用 **BuildingBlocks** 属性访问 **Category** 对象的 **BuildingBlocks** 集合。



```JavaScript
/*本示例将第一个模板中所有构建基块的类型和类别名称打印到“即时窗口”。（此示例假定即时窗口可见）。*/
function test() {
    let bdbTypes = Application.Templates.Item(1).BuildingBlockTypes
    for (let i = 1; i <= bdbTypes.Count; i++) {
        let bdbType = bdbTypes.Item(i)
        if (bdbType.Categories.Count > 0) {
            Console.log(bdbType.Name)
            for (let j = 1; j <= bdbType.Categories.Count; j++) {
                let category = bdbType.Categories.Item(j)
                Console.log("\t" + category.Name)
            }
        }
    }
}
```
每个构建基块都有一些包含只适用于自己的信息的属性，如 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Name)** 、 **[Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Description)** 、 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Type)** 和 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Value)** 。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Delete) | 删除指定的构建基块。 |
| [Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Insert) | 在文档中插入构建基块的值，并返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象表示文档中构建基块的内容。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Category](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Category) | 返回一个 **[Category](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/obj)** 对象，该对象代表构建基块的类别。只读。 |
| [Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Description) | 返回或设置一个 **String** ，代表构建基块的说明。可读写。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/ID) | 返回一个 **String** ，代表构建基块的内部标识号。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Index) | 返回 **Long** 值，该值表示项目在集合中的位置。只读。 |
| [InsertOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/InsertOptions) | 返回或设置一个 **Long** 类型的值，该值代表如何在文档中插入构建基块的内容。可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Name) | 返回或设置一个 **String** ，代表构建基块的名称。可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Type) | 返回一个 **BuildingBlockType** 对象，该对象代表构建基块的类型。只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Value) | 返回或设置一个 **String** 类型的值，该值代表构建基块的内容。可读写。 |