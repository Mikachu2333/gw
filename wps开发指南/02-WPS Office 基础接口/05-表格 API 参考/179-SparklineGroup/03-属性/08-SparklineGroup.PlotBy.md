# SparklineGroup.PlotBy

返回或设置当迷你图所基于的数据处于方形区域中时，如何绘制迷你图。可读/写。



## 语法

express.**PlotBy**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

**[XlSparklineRowCol](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSparklineRowCol)** 

## 说明


只有在迷你图所基于的数据处于方形区域中时，才可以设置此属性，例如，数据位于区域 A1:B2。

方形区域中数据的默认值为按行绘制数据 ( **xlSparklineRowsSquare** )。



## 示例


```JavaScript
/*本示例显示活动工作表上单元格 I1 中第一个迷你图组的PlotBy属性是否为xlSparklineNonSquare。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    alert(sparklineGroup.PlotBy == xlSparklineNonSquare)
}
```


```JavaScript
/*本示例设置活动工作表上单元格区域 I1:J1 中第一个迷你图组的PlotBy属性。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1:J1").SparklineGroups.Item(1)
    sparklineGroup.PlotBy = xlSparklineRowsSquare
}
```
