# Databar.Direction

返回或设置数据条的显示方向。可读/写。



## 语法

express.**Direction**

express   一个代表 **Databar** 对象的变量。

## 类型

number（int4 精度）

## 说明


可以是以下 **[XlReadingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlReadingOrder)** 之一： **xlContext** 、 **xlLTR** （左至右）或 **xlRTL** （右至左）。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个为数据条的条件格式的展示方向是否为xlContext。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(databar.Direction == xlContext)
}
```


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 上第一个为数据条的条件格式的展示方向。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.Direction = xlRTL
}
```
