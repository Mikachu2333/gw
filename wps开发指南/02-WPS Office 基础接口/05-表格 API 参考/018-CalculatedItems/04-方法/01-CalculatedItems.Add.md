# CalculatedItems.Add

新建计算项。返回 **PivotItem** 对象。



## 语法

express.**Add(Name, Formula, UseStandardFormula)**

express   一个代表 **CalculatedItems** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 项的名称。 |
| Formula | 必选 | string | 项的公式。 |
| UseStandardFormula | 可选 | any | 为实现向上兼容，该值默认为 False。对于作为项名称的任何参数中所含的字符串来说，该值为 True，并将被解释为已按标准美国英语进行了格式设置，而非本地设置。 |

## 返回值

一个代表新计算项的 **PivotItem** 对象。

## 示例


```JavaScript
/*本示例为工作表 Sheet1 上数据透视表的字段“id”添加计算项。*/
function test() {
    let pvtField = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("id")
    pvtField.CalculatedItems().Add("示例数据", "='4'+10")
}
```


```JavaScript
/*本示例为活动工作表上第一张数据透视表的字段“name”添加计算项。*/
function test() {
    let pvtField = ActiveSheet.PivotTables(1).PivotFields("name")
    pvtField.CalculatedItems().Add("公式1", "='张三'*1.2")
}
```
