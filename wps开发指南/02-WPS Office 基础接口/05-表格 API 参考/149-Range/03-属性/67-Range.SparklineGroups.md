# Range.SparklineGroups

返回一个 **[SparklineGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/obj)** 对象，该对象代表指定区域中的一个现有迷你图组。只读



## 语法

express.**SparklineGroups**

express   一个代表 **Range** 对象的变量。

## 类型

**SparklineGroups** 

## 示例


```JavaScript
/*此示例向区域 A1:A4 中添加一个迷你图组。 该组中的迷你图为列迷你图并且绑定到区域 B1:E4 中的数据。*/
function test() {
    Range("A1:A4").SparklineGroups.Add(xlSparkColumn, "B1:E4")
}
```


```JavaScript
/*本示例在 E1:E4 单元格区域中添加一个迷你图组，图组为折线图并关联 B1:C4 单元格区域的数据，显示 E1 单元格中迷你图组的数量；清除 E1 单元格中的迷你图组，再显示 E1 单元格中的迷你图组的数量*/
function test() {
    Range("E1:E4").SparklineGroups.Add(xlSparkLine, "B1:C4")
    alert(Range("E1").SparklineGroups.Count)
    Range("E1").SparklineGroups.Clear()
    alert(Range("E1").SparklineGroups.Count)
}
```
