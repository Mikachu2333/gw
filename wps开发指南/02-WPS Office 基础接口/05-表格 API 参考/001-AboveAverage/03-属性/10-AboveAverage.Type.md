# AboveAverage.Type

返回 **[XlFormatConditionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionType)** 枚举的常量之一，该常量指定条件格式的类型。只读。



## 语法

express.**Type**

express   一个代表 **AboveAverage** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性将始终返回 **Long** 值“12”，等价于 **xlAboveAverageCondition** 。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 C1:C10 中第二个条件格式的类型是否为xlAboveAverageCondition。*/
function test() {
    let aboveAverage = ActiveSheet.Range("C1:C10").FormatConditions.Item(2)
    alert(aboveAverage.Type == xlAboveAverageCondition)
}
```


```JavaScript
/*本示例判断活动工作表上区域 C1:C10 中第一个条件格式的类型是否为xlAboveAverageCondition，并通知用户。*/
function test() {
    let formatCondition = ActiveSheet.Range("C1:C10").FormatConditions.Item(1)
    if (formatCondition.Type == xlAboveAverageCondition) {
        alert("类型为xlAboveAverageCondition")
    } else {
        alert("类型不为xlAboveAverageCondition")
    }
}
```
