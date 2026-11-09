# PivotItems.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **PivotItems** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

一个 Object 值，它代表集合包含的某个对象。

## 说明


对象的文本名称就是 **Name** 和 **Value** 属性的值。



## 示例


```JavaScript
/*此示例隐藏工作表 Sheet1 中第一个数据透视表的字段“name”的数据项“张三”。*/
function test() {
    let pvtItems = Worksheets.Item("sheet1").PivotTables(1).PivotFields("name").PivotItems()
    pvtItems.Item("张三").Visible = false
}
```


```JavaScript
/*本示例显示活动工作表中数据透视表的字段“name”的第一个数据项是否展示明细数据。*/
function test() {
    let pvtItem = ActiveSheet.Range("I1").PivotTable.PivotFields("name").PivotItems().Item(1)
    alert(pvtItem.ShowDetail)
}
```
