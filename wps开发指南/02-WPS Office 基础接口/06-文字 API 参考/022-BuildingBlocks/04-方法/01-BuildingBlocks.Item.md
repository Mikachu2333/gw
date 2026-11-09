# BuildingBlocks.Item

返回 **BuildingBlock** 对象，该对象表示集合中的指定项。



## 语法

express.**Item(Index)**

express   一个代表 **BuildingBlocks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定 **String** 或 **Integer** 类型的值，该值表示对象在集合中的名称或序号位置。 |

## 返回值

BuildingBlock

## 示例


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中第一个类别的第一个构建基块的名称。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item(1).BuildingBlocks.Item(1)
    alert(buildingBlock.Name)
}
```


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中第一个类别的第二个构建基块的内容插入到文档的方式是否为wdInsertPage。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item(1).BuildingBlocks.Item(2)
    alert(buildingBlock.InsertOptions == wdInsertPage)
}
```
