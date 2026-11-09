# SparklineGroup.ModifySourceData

设置代表迷你图组源数据的区域。



## 语法

express.**ModifySourceData(SourceData)**

express   一个代表 **SparklineGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SourceData | 必选 | string | 代表源数据的区域。 |

## 返回值

void

## 示例


```JavaScript
/*此示例先选择一个位于 A1:A4 的迷你图组，然后使用区域 B1:D4 中的数据修改源数据，以使之增加一列。*/
function test() {
    Range("A1:A4").Select()
    ActiveCell.SparklineGroups.Item(1).ModifySourceData("B1:D4")
}
```


```JavaScript
/*本示例设置活动工作表上单元格 A1 中第一个迷你图组的源数据区域。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("A1").SparklineGroups.Item(1)
    sparklineGroup.ModifySourceData("B1:C4")
}
```
