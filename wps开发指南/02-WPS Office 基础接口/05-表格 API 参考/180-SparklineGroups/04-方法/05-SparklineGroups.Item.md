# SparklineGroups.Item

从集合中返回一个 **[SparklineGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **SparklineGroups** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定元素在集合中的位置。 |

## 返回值

SparklineGroup

## 示例


```JavaScript
/*本示例删除活动工作表上单元格 H1 中第一个迷你图组，并显示单元格 H1 中迷你图组的数量。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("H1").SparklineGroups.Item(1)
    sparklineGroup.Delete()
    alert(ActiveSheet.Range("H1").SparklineGroups.Count)
}
```


```JavaScript
/*本示例设置活动工作表上单元格 H1 中第一个迷你图组的主系列颜色。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("H1").SparklineGroups.Item(1)
    sparklineGroup.SeriesColor.Color = RGB(255, 255, 0)
}
```
