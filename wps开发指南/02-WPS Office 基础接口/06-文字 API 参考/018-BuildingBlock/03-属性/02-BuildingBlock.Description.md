# BuildingBlock.Description

返回或设置一个 **String** ，代表构建基块的说明。可读写。



## 语法

express.**Description**

express   一个代表 **BuildingBlock** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个模板的第一个构建基块的说明。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    alert(buildingBlock.Description)
}
```


```JavaScript
/*本示例设置附加到活动文档的模板的第二个构建基块的说明。*/
function test() {
    let buildingBlock = ActiveDocument.AttachedTemplate.BuildingBlockEntries.Item(2)
    buildingBlock.Description = "example"
}
```
