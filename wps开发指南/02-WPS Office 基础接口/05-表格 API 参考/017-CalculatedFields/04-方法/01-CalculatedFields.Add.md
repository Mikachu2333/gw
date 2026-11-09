# CalculatedFields.Add

创建新的计算字段。返回 **PivotField** 对象。



## 语法

express.**Add(Name, Formula, UseStandardFormula)**

express   一个代表 **CalculatedFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 字段的名称。 |
| Formula | 必选 | string | 字段的公式。 |
| UseStandardFormula | 可选 | any | 为实现向上兼容，该值默认为 False。对于作为字段名称的任何参数中所含的字符串来说，该值为 True，并将被解释为已按标准美国英语进行了格式设置，而非本地设置。 |

## 返回值

一个代表新计算字段的 **PivotField** 。

## 示例


```JavaScript
/*此示例向第一张工作表上的第一张数据透视表添加计算字段。*/
function test() {
    Application.Worksheets.Item(1).PivotTables(1).CalculatedFields().Add("期末成绩", "= score * 0.9")
}
```


```JavaScript
/*此示例向活动工作表上的数据透视表添加计算字段。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.CalculatedFields().Add("Student ID", "= id + 100", true)
}
```
