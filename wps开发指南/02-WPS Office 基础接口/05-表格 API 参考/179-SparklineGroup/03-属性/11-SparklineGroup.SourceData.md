# SparklineGroup.SourceData

返回或设置包含迷你图组的源数据的区域。可读/写。



## 语法

express.**SourceData**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

string

## 说明


源数据区域中的行数或列数必须与 **[Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Location)** 属性区域中的单元格数相等。

迷你图组内单个迷你图的数据源区域必须是连续的。



## 示例


```JavaScript
/*本示例显示包含活动工作表上单元格 J1 中第一个迷你图组的源数据的区域。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("J1").SparklineGroups.Item(1)
    alert(sparklineGroup.SourceData)
}
```


```JavaScript
/*本示例设置包含活动工作表上单元格 J1 中第一个迷你图组的源数据的区域。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("J1").SparklineGroups.Item(1)
    sparklineGroup.SourceData = "A1:C1"
}
```
