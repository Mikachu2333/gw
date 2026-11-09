# SparklineGroup.DateRange

获取或设置迷你图组的日期范围。可读/写。



## 语法

express.**DateRange**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

string

## 说明


若要清除日期范围，请将此属性设置为空字符串。

日期范围必须是连续的一维范围。

日期范围可以在不同于 **[Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Location)** 和 **[SourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/SourceData)** 属性的工作表上。

日期范围中的空单元格和非日期值不显示。



## 示例


```JavaScript
/*本示例显示单元格 I1 中第一个迷你图组的日期范围。*/
function test() {
    let sparklineGroup = Range("I1").SparklineGroups.Item(1)
    alert(sparklineGroup.DateRange)
}
```


```JavaScript
/*本示例设置活动工作表上单元格 I1 中第一个迷你图组的日期范围。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    sparklineGroup.DateRange = "A1:F1"
}
```
