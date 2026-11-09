# Databar.NegativeBarFormat

返回与数据条条件格式规则关联的 **[NegativeBarFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/NegativeBarFormat/obj)** 对象。只读。



## 语法

express.**NegativeBarFormat**

express   一个代表 **Databar** 对象的变量。

## 类型

**NegativeBarFormat** 

## 示例


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个条件格式（数据条）的负数据条的填充颜色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.NegativeBarFormat.Color.Color = RGB(255, 255, 0)
}
```


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个条件格式（数据条）的负数据条的填充颜色和边框颜色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.NegativeBarFormat.Color.ColorIndex = 6
    databar.NegativeBarFormat.BorderColor.ColorIndex = 6
}
```
