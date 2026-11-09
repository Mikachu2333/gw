# SparklineGroup.Modify

设置迷你图组的位置和源数据。



## 语法

express.**Modify(Location, SourceData)**

express   一个代表 **SparklineGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Location | 必选 | Range | 代表迷你图组所在位置的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。 |
| SourceData | 必选 | string | 代表迷你图组的源数据的区域。 |

## 返回值

void

## 示例


```JavaScript
/*此示例先选择一个位于 A1:A4 的迷你图组，然后通过将迷你图组的位置更改为 A1:A3 来删除一行数据。还必须对数据源进行修改，以使之仅包括前三行数据。*/
function test() {
    Range("A1:A4").Select()
    ActiveCell.SparklineGroups.Item(1).Modify(Range("A1:A3"), "Sheet1!B1:D3")
}
```


```JavaScript
/*本示例设置活动工作表上单元格 A1 中第一个迷你图组的位置和源数据。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("A1").SparklineGroups.Item(1)
    sparklineGroup.Modify(Range("A6"), "Sheet1!B1:D1")
}
```
