# BuildingBlock.Delete

删除指定的构建基块。



## 语法

express.**Delete()**

express   一个代表 **BuildingBlock** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一个模板的第一个构建基块。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    buildingBlock.Delete()
}
```


```JavaScript
/*本示例删除附加到活动文档的模板的第二个构建基块，并通知用户。*/
function test() {
    let buildingBlock = ActiveDocument.AttachedTemplate.BuildingBlockEntries.Item(2)
    buildingBlock.Delete()
    alert("已删除第二个构建基块")
}
```
