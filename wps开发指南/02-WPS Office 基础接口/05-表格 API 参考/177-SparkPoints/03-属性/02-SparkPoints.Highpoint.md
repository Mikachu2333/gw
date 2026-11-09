# SparkPoints.Highpoint

返回一个 **[SparkColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkColor/obj)** 对象，该对象代表迷你图上最高数据点的标记的颜色和可见性。只读



## 语法

express.**Highpoint**

express   一个代表 **SparkPoints** 对象的变量。

## 类型

SparkColor

## 说明


 **Highpoint** 属性对应于 **“显示”** 部分中 **“高点”** 复选框的设置，以及功能区 **“迷你图工具设计”** 选项卡上 **“样式”** 部分中 **“标记颜色”** 下拉列表中 **“高点”** 项的设置。



## 示例


```JavaScript
/*本示例将活动工作表上区域 A1:A4 中第一个迷你图组的迷你图的最高数据点设置为可见。*/
function test() {
    let sparkColor = ActiveSheet.Range("A1:A4").SparklineGroups.Item(1).Points.Highpoint
    sparkColor.Visible = true
}
```


```JavaScript
/*本示例显示区域 A1:A4 上第一个迷你图组的迷你图的最高数据点的ThemeColor属性是否为xlThemeColorAccent4。*/
function test() {
    let sparkColor = Range("A1:A4").SparklineGroups.Item(1).Points.Highpoint
    alert(sparkColor.Color.ThemeColor == xlThemeColorAccent4)
}
```
