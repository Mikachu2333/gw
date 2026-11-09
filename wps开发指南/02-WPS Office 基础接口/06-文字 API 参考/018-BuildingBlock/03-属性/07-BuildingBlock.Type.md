# BuildingBlock.Type

返回一个 **BuildingBlockType** 对象，该对象代表构建基块的类型。只读。



## 语法

express.**Type**

express   一个代表 **BuildingBlock** 对象的变量。

## 类型

BuildingBlockType

## 示例


```JavaScript
/*本示例显示第一个模板的第二个构建基块类型的本地化名称。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(2)
    alert(buildingBlock.Type.Name)
}
```


```JavaScript
/*本示例显示附加到第一个文档的模板的第一个构建基块的类型的索引。*/
function test() {
    let buildingBlock = Documents.Item(1).AttachedTemplate.BuildingBlockEntries.Item(1)
    alert(buildingBlock.Type.Index)
}
```
