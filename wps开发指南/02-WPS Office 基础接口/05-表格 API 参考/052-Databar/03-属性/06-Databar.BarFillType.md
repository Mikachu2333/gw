# Databar.BarFillType

返回或设置数据条如何填充颜色。可读/写。



## 语法

express.**BarFillType**

express   一个代表 **Databar** 对象的变量。

## 类型

**[XlDataBarFillType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlDataBarFillType)** 

## 说明


 **BarFillType** 属性的默认值为 **xlDataBarFillGradient** 。



## 示例


```JavaScript
/*本示例选择一个单元格区域，将数据条条件格式规则添加到该区域，然后将数据条的填充色设置为纯色。*/
function test() {
    Range("A1:A10").Select()
    Range("A1:A10").Activate()
    let databar = Selection.FormatConditions.AddDatabar()
    databar.BarFillType = xlDataBarFillSolid
}
```


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个为数据条的条件格式的填充色是否为渐变色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(databar.BarFillType == xlDataBarFillGradient)
}
```
