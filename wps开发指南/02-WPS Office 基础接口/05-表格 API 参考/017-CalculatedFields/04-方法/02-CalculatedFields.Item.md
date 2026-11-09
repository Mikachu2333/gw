# CalculatedFields.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **CalculatedFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

集合包含的 **PivotField** 对象。

## 说明


对象的文本名称是 **Name** 和 **Value** 属性的值。



## 示例


```JavaScript
/*此示例为第一张工作表中第一张数据透视表的第一个计算字段设置公式。*/
function test() {
    Application.Worksheets.Item(1).PivotTables(1).CalculatedFields().Item(1).Formula = "=score*0.6"
}
```


```JavaScript
/*此示例删除活动工作表中数据透视表的第一个计算字段。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.CalculatedFields().Item(1).Delete()
}
```
