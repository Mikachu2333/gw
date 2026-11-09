# Databar.MaxPoint

返回一个 **[ConditionValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConditionValue/obj)** 对象，该对象指定如何针对数据条条件格式对最长的数据条进行求值。



## 语法

express.**MaxPoint**

express   一个代表 **Databar** 对象的变量。

## 类型

ConditionValue

## 说明


通过使用 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConditionValue/member/Type)** 和 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConditionValue/member/Value)** 属性，您可以指定求值的类型和值。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个为数据条的条件格式的最长数据条的值。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(databar.MaxPoint.Value)
}
```


```JavaScript
/*本示例显示活动单元格上第一个为数据条的条件格式的最长数据条的类型是否为xlConditionValueNumber。*/
function test() {
    let databar = ActiveCell.FormatConditions.Item(1)
    alert(databar.MaxPoint.Type == xlConditionValueNumber)
}
```
