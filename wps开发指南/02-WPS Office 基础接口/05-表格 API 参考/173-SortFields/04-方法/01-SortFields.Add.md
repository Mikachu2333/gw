# SortFields.Add

创建新的排序字段，并返回一个 **SortFields** 对象。



## 语法

express.**Add(Key, SortOn, Order, CustomOrder, DataOption)**

express   一个代表 **SortFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Key | 必选 | Range | 指定用于排序的键值。 |
| SortOn | 可选 | any | 要进行排序的字段。 |
| Order | 可选 | any | 指定排序次序。 |
| CustomOrder | 可选 | any | 指定是否应使用自定义排序次序。 |
| DataOption | 可选 | any | 指定数据选项。 |

## 返回值

SortField

## 示例


```JavaScript
/*本示例在活动工作表创建新的排序字段，并显示排序字段的键值地址。*/
function test() {
    let sort = Application.ActiveSheet.Sort.SortFields.Add(Range("A1:D1"), xlSortOnCellColor)
    alert(sort.Key.Address())
}
```


```JavaScript
/*本示例在第一张工作表创建新的排序字段*/
function test() {
    Application.Sheets.Item(1).Sort.SortFields.Add(Range("A1:A11"), xlSortOnValues, xlAscending, null, xlSortNormal)
}
```
