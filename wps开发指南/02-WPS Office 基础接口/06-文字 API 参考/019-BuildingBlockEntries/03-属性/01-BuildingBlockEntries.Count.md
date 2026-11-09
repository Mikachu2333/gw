# BuildingBlockEntries.Count

返回 **BuildingBlockEntries** 集合中的项目数。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **BuildingBlockEntries** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档所附加的模板中构建基块条目的数量。*/
function test() {
    alert(ActiveDocument.AttachedTemplate.BuildingBlockEntries.Count)
}
```
