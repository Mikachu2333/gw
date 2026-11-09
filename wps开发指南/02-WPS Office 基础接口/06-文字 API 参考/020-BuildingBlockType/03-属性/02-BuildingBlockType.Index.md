# BuildingBlockType.Index

返回 **Long** 值，该值表示项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **BuildingBlockType** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示附加到第一个文档的模板中页码编号构建基块的索引。*/
function test() {
    let buildingBlockType = Documents.Item(1).AttachedTemplate.BuildingBlockTypes.Item(wdTypePageNumber)
    alert(buildingBlockType.Index)
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个模板中文本框构建基块的索引。*/
function test() {
    let bdbTypes = Application.Templates.Item(1).BuildingBlockTypes
    Selection.Range.Text = bdbTypes.Item(wdTypeTextBox).Index
}
```
