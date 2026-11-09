# IconCriteria.Count

返回一个用于指定图标集条件格式规则的条件数目的 **Long** 值。只读。



## 语法

express.**Count**

express   一个代表 **IconCriteria** 对象的变量。

## 类型

number（int4 精度）

## 说明


条件数目等于为图标集分配的阈值的数目。



## 示例


```JavaScript
/*本示例显示第一张工作表上区域 A1:A10 中第一个图标集条件格式的条件数量。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    alert(iconSet.IconCriteria.Count)
}
```
