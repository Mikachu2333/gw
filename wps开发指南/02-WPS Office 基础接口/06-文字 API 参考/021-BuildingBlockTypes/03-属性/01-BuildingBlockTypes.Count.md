# BuildingBlockTypes.Count

返回 **BuildingBlockTypes** 集合中的项目数。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **BuildingBlockTypes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个模板上构建基块类别的数量。*/
function test() {
    let bdbTypes = Application.Templates.Item(1).BuildingBlockTypes
    alert(bdbTypes.Count)
}
```
