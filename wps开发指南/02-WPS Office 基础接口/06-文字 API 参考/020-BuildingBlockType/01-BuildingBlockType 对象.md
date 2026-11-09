# BuildingBlockType 对象

代表构建基块的类型。每个 **BuildingBlockType** 对象都是 **[BuildingBlockTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockTypes/obj)** 集合的成员。

## 说明


WPS 使用类型和类别来组织构建基块。每个构建基块类型由一个 **[WdBuildingBlockTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBuildingBlockTypes)** 常量表示。可以使用 **[Categories](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockType/member/Categories)** 属性访问特定构建基块类型的类别。


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
/*本示例显示第一个模板中页码编号构建基块的索引。*/
function test() {
    let buildingBlockType = Application.Templates.Item(1).BuildingBlockTypes.Item(wdTypePageNumber)
    alert(buildingBlockType.Index)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Categories](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockType/member/Categories) | 返回一个 **Categories** 集合，该集合代表构建基块类型的类别。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockType/member/Index) | 返回 **Long** 值，该值表示项目在集合中的位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockType/member/Name) | 返回一个 **String** ，代表生成块类型的本地化名称。只读。 |