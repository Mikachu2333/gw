# PivotItemList.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **PivotItemList** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 PivotItem 对象。

## 说明


对象的文本名称就是 **Name** 和 **Value** 属性的值。



## 示例


```JavaScript
/*本示例将包含单元格 L4 的数据透视项行轴上第一个数据项设置为不可见。*/
function test() {
    Application.Range("L4").PivotCell.RowItems.Item(1).Visible = false
}
```


```JavaScript
/*本示例显示包含活动单元格的数据透视项行轴上第二个数据项的值。*/
function test() {
    alert(ActiveCell.PivotCell.RowItems.Item(2).Value)
}
```
