# FormatCondition.Type

返回一个包含 **[xlFormatConditionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionType)** 值的 **Long** 值，它代表对象类型。



## 语法

express.**Type**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第二个条件格式的类型是否为xlColorScale。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(2)
    alert(formatCondition.Type == xlColorScale)
}
```


```JavaScript
/*本示例判断活动工作表上区域 A1:A10 中第一个条件格式的类型是否为DataBar，并通知用户。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    if (formatCondition.Type == xlDatabar) {
        alert("类型为 DataBar")
    } else {
        alert("类型不为 DataBar")
    }
}
```
