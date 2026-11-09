# BuildingBlockType.Categories

返回一个 **Categories** 集合，该集合代表构建基块类型的类别。只读。



## 语法

express.**Categories**

express   一个代表 **BuildingBlockType** 对象的变量。

## 类型

Categories

## 示例


```JavaScript
/*本示例显示第一个文档所附加的模板中页码编号构建基块的类别的数量。*/
function test() {
    let categories = Documents.Item(1).AttachedTemplate.BuildingBlockTypes.Item(wdTypePageNumber).Categories
    alert(categories.Count)
}
```


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
