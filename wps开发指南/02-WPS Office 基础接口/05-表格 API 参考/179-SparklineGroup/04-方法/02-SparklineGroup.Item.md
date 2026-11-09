# SparklineGroup.Item

返回一个 **[Sparkline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/obj)** 对象。只读



## 语法

express.**Item(Index)**

express   一个代表 **SparklineGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 迷你图的索引值。 |

## 返回值

Sparkline

## 示例


```JavaScript
/*本示例显示单元格 I1 中第一个迷你图组的第一个迷你图的位置的地址。*/
function test() {
    alert(Range("I1").SparklineGroups.Item(1).Item(1).Location.Address())
}
```


```JavaScript
/*本示例设置活动工作表上单元格 I1 中第一个迷你图组的第一个迷你图的源数据的范围。*/
function test() {
    let sparkline = ActiveSheet.Range("I1").SparklineGroups.Item(1).Item(1)
    sparkline.SourceData = "A1:C1"
}
```
