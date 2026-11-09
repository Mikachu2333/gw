# ColorScale.Type

返回 **[XlFormatConditionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionType)** 枚举的常量之一，该常量指定条件格式的类型。只读。



## 语法

express.**Type**

express   一个代表 **ColorScale** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性将始终返回 **Long** 值“3”，这相当于 **xlColorScale** 。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 C1:C10 中第一个条件格式的类型是否为色阶条件格式。*/
function test() {
    let colorScale = ActiveSheet.Range("C1:C10").FormatConditions.Item(1)
    alert(colorScale.Type == xlColorScale)
}
```


```JavaScript
/*本示例判断第一张工作表上区域 C1:C10 中第二个条件格式的类型是否为色阶条件格式，并通知用户。*/
function test() {
    let colorScale = Worksheets.Item(1).Range("C1:C10").FormatConditions.Item(2)
    if (colorScale.Type == xlColorScale) {
        alert("类型为色阶条件格式")
    } else {
        alert("类型不为色阶条件格式")
    }
}
```
