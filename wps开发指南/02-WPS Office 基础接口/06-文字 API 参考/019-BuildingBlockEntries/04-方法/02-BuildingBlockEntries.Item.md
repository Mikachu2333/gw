# BuildingBlockEntries.Item

返回 **BuildingBlock** 对象，该对象表示集合中的指定项。



## 语法

express.**Item(Index)**

express   一个代表 **BuildingBlockEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定 **String** 或 **Integer** 类型的值，该值表示对象在集合中的名称或序号位置。 |

## 返回值

BuildingBlock

## 示例


```JavaScript
/*本示例显示第一个模板的第一个构建基块的名称。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    alert(buildingBlock.Name)
}
```


```JavaScript
/*本示例设置活动文档所附加的模板中第二个构建基块的说明。*/
function test() {
    let buildingBlock = ActiveDocument.AttachedTemplate.BuildingBlockEntries.Item(2)
    buildingBlock.Description = "example"
}
```
