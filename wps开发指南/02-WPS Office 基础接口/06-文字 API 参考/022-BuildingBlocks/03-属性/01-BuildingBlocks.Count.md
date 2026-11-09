# BuildingBlocks.Count

返回 **BuildingBlocks** 集合中的项目数。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **BuildingBlocks** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中名为“General”的类别的构建基块的数量。*/
function test() {
    alert(Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item("General").BuildingBlocks.Count)
}
```
