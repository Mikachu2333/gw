# BuildingBlock.Name

返回或设置一个 **String** ，代表构建基块的名称。可读写。



## 语法

express.**Name**

express   一个代表 **BuildingBlock** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置第一个模板的第一个构建基块的名称。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    buildingBlock.Name = "example_4"
}
```


```JavaScript
/*本示例显示附加到第一个文档的模板的第二个构建基块的名称。*/
function test() {
    let buildingBlock = Documents.Item(1).AttachedTemplate.BuildingBlockEntries.Item(2)
    alert(`构建基块的名称：${buildingBlock.Name}`)
}
```
