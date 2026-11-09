# SparklineGroups.Add

创建一个新的迷你图组并返回一个 **[SparklineGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/obj)** 对象。



## 语法

express.**Add(Type, SourceData)**

express   一个代表 **SparklineGroups** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlSparkType | 迷你图的类型。 |
| SourceData | 必选 | string | 代表要用于创建迷你图的区域。 |

## 返回值

SparklineGroup

## 示例


```JavaScript
/*此示例向区域 A1:A4 中添加一个迷你图组。该组中的迷你图为列迷你图并且绑定到区域 B1:E4 中的数据。*/
function test() {
    Range("A1:A4").SparklineGroups.Add(xlSparkColumn, "Sheet1!B1:E4")
}
```


```JavaScript
/*此示例向活动工作表上区域 A1:A2 中添加一个迷你图组，并显示该工作表上单元格 A1 中迷你图组的数量。*/
function test() {
    ActiveSheet.Range("A1:A2").SparklineGroups.Add(xlSparkLine, "B1:D2")
    alert(ActiveSheet.Range("A1").SparklineGroups.Count)
}
```
