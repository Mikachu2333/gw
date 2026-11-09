# Categories 对象

代表构建基块类别的集合。

## 说明


可以使用 **Item** 方法访问现有类别。然后使用 **[BuildingBlocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/member/BuildingBlocks)** 属性访问该类别的 **[BuildingBlock](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/obj)** 对象的集合。

可以使用 **Item** 方法访问现有类别。要创建新的类别，请使用 **BuildingBlockEntries** 集合的 **Add** 方法。然后，设置 _Category_ 参数的值。


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
/*本示例显示第一个模板的自动文本条目构建基块中名为“General”的类别的索引。*/
function test() {
    let category = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item("General")
    alert(category.Index)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Categories/member/Item) | 返回 **Category** 对象，该对象表示集合中的指定项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Categories/member/Count) | 返回 **Categories** 集合中的项目数。 **Long** 类型，只读。 |