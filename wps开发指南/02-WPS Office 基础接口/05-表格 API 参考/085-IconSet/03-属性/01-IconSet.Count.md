# IconSet.Count

返回一个 **Long** 值，它指定图标集中图标的数目。只读。



## 语法

express.**Count**

express   一个代表 **IconSet** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表上区域 B1:B10 中第一个图标集条件格式的图标集中图标的数量。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("B1:B10").FormatConditions.Item(1).IconSet
    alert(iconSet.Count)
}
```
