# Template.BuildingBlockTypes

返回一个 **BuildingBlockTypes** 集合，该集合代表模板中包含的构建基块类型的集合。只读。



## 语法

express.**BuildingBlockTypes**

express   一个代表 **Template** 对象的变量。

## 类型

BuildingBlockTypes

## 示例


```JavaScript
/*本示例显示第一个模板上构建基块类别的数量。*/
function test() {
    let bdbTypes = Application.Templates.Item(1).BuildingBlockTypes
    alert(bdbTypes.Count)
}
```


```JavaScript
/*本示例显示附加到第一个文档的模板中页码编号构建基块类别的索引。*/
function test() {
    let buildingBlockType = Documents.Item(1).AttachedTemplate.BuildingBlockTypes.Item(wdTypePageNumber)
    alert(buildingBlockType.Index)
}
```
