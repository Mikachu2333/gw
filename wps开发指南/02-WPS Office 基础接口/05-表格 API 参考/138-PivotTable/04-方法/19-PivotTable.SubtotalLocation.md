# PivotTable.SubtotalLocation

此方法可更改所有现有透视字段的分类汇总位置。更改分类汇总位置仅对大纲形式的字段产生直接的视觉效果，但是也会对表格形式的字段设置该方法。



## 语法

express.**SubtotalLocation(Location)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Location | 必选 | XlSubtototalLocationType | xlSubtotalLocationType 既可以是 **xlAtTop** ，也可以是 **xlAtBottom** 。 |

## 返回值

void

## 说明


 **SubtotalLocation** 方法会自动设置所有现有透视字段的 **LayoutSubtotalLocation** 属性。



## 示例


```JavaScript
/*本示例将数据透视表的分类汇总显示在顶部*/
function test() {
    Worksheets.Item(1).PivotTables(1).SubtotalLocation(xlAtTop)
}
```


```JavaScript
/*本示例将活动工作表中所有数据透视表的分类汇总显示在底部*/
function test() {
    for (let i = 1; i <= ActiveSheet.PivotTables().Count; i++) {
        ActiveSheet.PivotTables(i).SubtotalLocation(xlAtBottom)
        alert(`第${i}张数据透视表的分类汇总已显示在底部`)
    }
}
```
