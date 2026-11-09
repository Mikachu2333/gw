# Category 对象

代表构建基块类型的各个类别。

## 说明


WPS 使用类型和类别来组织构建基块。每个构建基块类型由一个 **[WdBuildingBlockTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBuildingBlockTypes)** 常量表示。每个类别是用户定义的唯一字符串。WPS 附带了两个已定义的类别：“常规”和“自定义”。您可以根据需要创建其他类别。

可以使用 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/member/Type)** 属性访问与特定类别相关联的构建基块类型。使用 **[BuildingBlocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/member/BuildingBlocks)** 属性访问类别的构建基块集合。

可以使用 **Categories** 集合的 **Item** 方法访问现有类别。要创建新的类别，请使用 **BuildingBlockEntries** 集合的 **Add** 方法。然后设置 _Category_ 参数的值。


## 示例


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


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中第一个类别的名称。*/
function test() {
    let category = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item(1)
    alert(category.Name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BuildingBlocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/member/BuildingBlocks) | 返回一个 **[BuildingBlocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlocks/obj)** 集合，该集合代表类别的构建基块。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/member/Type) | 返回一个 **[BuildingBlockType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockType/obj)** 对象，该对象代表构建基块类别的构建基块类型。只读。 |