# Databar.Type

返回 **[XlFormatConditionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionType)** 枚举的常量之一，该常量指定条件格式的类型。只读。



## 语法

express.**Type**

express   一个代表 **Databar** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性将始终返回 **Long** 值“4”，等价于 **xlDatabar** 。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个条件格式（数据条）的类型是否为xlColorScale。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(databar.Type == xlColorScale)
}
```


```JavaScript
/*本示例判断活动工作表上区域 A1:A10 中第一个条件格式（数据条）的类型是否为DataBar，并通知用户。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    if (databar.Type == xlDatabar) {
        alert("类型为 DataBar")
    } else {
        alert("类型不为 DataBar")
    }
}
```
