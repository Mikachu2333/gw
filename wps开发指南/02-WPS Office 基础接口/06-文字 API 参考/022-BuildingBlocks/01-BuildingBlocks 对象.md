# BuildingBlocks 对象

代表模板中特定构建基块类型和类别的 **[BuildingBlock](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/obj)** 对象的集合。

## 说明


可以使用 **[Add](#TODO)** 方法创建新的构建基块，并将该构建基块添加到模板中。

用 **BuildingBlocks** 集合返回的集合是根据类型和类别筛选过的集合。根据访问集合的方式的不同，所返回的集合有所不同。例如，用类别为“常规”的 **wdTypeAutoText** 类型访问构建基块集合所返回的集合，可能与用类别为“自定义”的 **wdTypeAutoText** 类型访问构建基块集合所返回的集合不同，与用类别为“常规”的 **wdTypeCustomAutoText** 类型访问构建基块集合所返回的集合也不同。


## 示例


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中第一个类别的构建基块的数量。*/
function test() {
    alert(Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item(1).BuildingBlocks.Count)
}
```


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中第一个类别的所有构建基块的说明。*/
function test() {
    let buildingBlocks = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item(1).BuildingBlocks
    for (let i = 1; i <= buildingBlocks.Count; i++) {
        alert(buildingBlocks.Item(i).Description)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlocks/member/Item) | 返回 **BuildingBlock** 对象，该对象表示集合中的指定项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlocks/member/Count) | 返回 **BuildingBlocks** 集合中的项目数。只读 **Long** 类型。 |