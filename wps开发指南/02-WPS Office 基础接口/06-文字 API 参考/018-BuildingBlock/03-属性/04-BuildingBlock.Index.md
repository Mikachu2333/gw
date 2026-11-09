# BuildingBlock.Index

返回 **Long** 值，该值表示项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **BuildingBlock** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个模板的第三个构建基块的索引。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(3)
    alert(buildingBlock.Index)
}
```


```JavaScript
/*本示例显示附加到第一个文档的模板的第一个构建基块的索引。*/
function test() {
    let buildingBlock = Documents.Item(1).AttachedTemplate.BuildingBlockEntries.Item(1)
    alert(`构建基块的索引：${buildingBlock.Index}`)
}
```
