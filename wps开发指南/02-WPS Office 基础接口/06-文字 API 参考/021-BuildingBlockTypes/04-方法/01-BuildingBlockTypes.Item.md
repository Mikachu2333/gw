# BuildingBlockTypes.Item

返回 **BuildingBlockType** 对象，该对象表示集合中的指定项。



## 语法

express.**Item(Index)**

express   一个代表 **BuildingBlockTypes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdBuildingBlockTypes | 指定集合中的项的生成块类型。 |

## 返回值

BuildingBlockType

## 示例


```JavaScript
/*本示例显示附加到第一个文档的模板中页码编号构建基块的索引。*/
function test() {
    let buildingBlockType = Documents.Item(1).AttachedTemplate.BuildingBlockTypes.Item(wdTypePageNumber)
    alert(buildingBlockType.Index)
}
```


```JavaScript
/*本示例显示数组 arr 中的构建基块类型关联的本地化名称。*/
function test() {
    let arr = [wdTypeEquations, wdTypeFooters, wdTypeHeaders, wdTypePageNumber]
    let str = ""
    let bdbTypes = Application.Templates.Item(1).BuildingBlockTypes
    for (let i = 0; i < arr.length; i++) {
        str += bdbTypes.Item(arr[i]).Name + "\n"
    }
    alert(str)
}
```
