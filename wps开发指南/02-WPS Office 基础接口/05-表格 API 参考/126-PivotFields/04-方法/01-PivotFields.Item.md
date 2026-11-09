# PivotFields.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **PivotFields** 对象的变量。

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
/*本示例使 Sheet1 上第一张数据透视表中的字段“id”成为行字段。*/
function test() {
    Application.Worksheets.Item("Sheet1").PivotTables(1).PivotFields().Item("id").Orientation = xlRowField
}
```


```JavaScript
/*本示例在活动工作表的第一个数据透视表的“name”字段之后添加一个分页符。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields().Item("name").LayoutPageBreak = true
}
```
