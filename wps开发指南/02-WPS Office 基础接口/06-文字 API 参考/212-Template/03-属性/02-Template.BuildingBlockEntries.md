# Template.BuildingBlockEntries

返回一个 **BuildingBlockEntries** 集合，该集合代表模板中构建基块条目的集合。只读。



## 语法

express.**BuildingBlockEntries**

express   一个代表 **Template** 对象的变量。

## 类型

BuildingBlockEntries

## 示例


```JavaScript
/*本示例显示活动文档所附加的模板中构建基块条目的数量。*/
function test() {
    alert(ActiveDocument.AttachedTemplate.BuildingBlockEntries.Count)
}
```


```JavaScript
/*本示例显示第一个模板的第一个构建基块的名称。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    alert(buildingBlock.Name)
}
```
