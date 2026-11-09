# SparklineGroup.ModifyDateRange

设置迷你图组的日期范围。



## 语法

express.**ModifyDateRange(DateRange)**

express   一个代表 **SparklineGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DateRange | 必选 | string | 迷你图组的日期范围。 |

## 返回值

void

## 示例


```JavaScript
/*此示例先选择一个位于 A2:A5 的迷你图组，然后将日期范围设置为 B1:E1。如果区域 B1:E1 中的单元格不包含日期值，则将不会显示数据。*/
function test() {
    Range("A2:A5").Select()
    ActiveCell.SparklineGroups.Item(1).ModifyDateRange("Sheet1!B1:E1")
}
```


```JavaScript
/*本示例设置活动工作表上单元格 A2 中第一个迷你图组的日期范围。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("A2").SparklineGroups.Item(1)
    sparklineGroup.ModifyDateRange("Sheet1!B1:B5")
}
```
