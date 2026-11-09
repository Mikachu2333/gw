# SparklineGroups.Group

组合选定的迷你图。



## 语法

express.**Group(Location)**

express   一个代表 **SparklineGroups** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Location | 必选 | Range | 组中第一个单元格的位置。 |

## 返回值

void

## 示例


```JavaScript
/*此示例选择区域 A1:A4 并组合该区域中的迷你图。*/
function test() {
    Range("A1:A4").Select()
    Selection.SparklineGroups.Group(Range("A1"))
}
```


```JavaScript
/*此示例组合活动工作表上区域 A1:A4 上迷你图组。*/
function test() {
    let sparklineGroups = ActiveSheet.Range("A1:A4").SparklineGroups
    sparklineGroups.Group(Range("A3:A4"))
}
```
