# IconSetCondition.IconSet

返回或设置一个 **[IconSets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSets/obj)** 集合，该集合指定用于条件格式的图标集。



## 语法

express.**IconSet**

express   一个代表 **IconSetCondition** 对象的变量。

## 类型

any

## 说明


通过使用 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象的 **[IconSets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/IconSets)** 属性，您可以指定图标集。例如，`Selection.FormatConditions(1).IconSet = ActiveWorkbook.IconSets(xl3TrafficLights1)` 将对条件格式应用由三个交通信号灯图标组成的图标集。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 B1:B10 中第二个图标集条件格式使用的图标集的数量。*/
function test() {
    let iconSet = ActiveSheet.Range("B1:B10").FormatConditions.Item(2)
    alert(iconSet.IconSet.Count)
}
```


```JavaScript
/*本示例显示第一张工作表上区域 B1:B10 中第一个图标集条件格式使用的图标集的名称是否为xl3Flags。*/
function test() {
    let iconSet = Worksheets.Item(1).Range("B1:B10").FormatConditions.Item(1)
    alert(iconSet.IconSet.ID == xl3Flags)
}
```
