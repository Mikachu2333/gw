# NegativeBarFormat.Color

返回一个 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象，可使用该对象来指定负数据条的填充色。只读



## 语法

express.**Color**

express   一个代表 **NegativeBarFormat** 对象的变量。

## 类型

**[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 

## 示例


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个条件格式（数据条）的负数据条的填充颜色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.NegativeBarFormat.Color.Color = RGB(255, 255, 0)
}
```


```JavaScript
/*本示例设置第一张工作表上区域 A1:A10 中第二个条件格式（数据条）的负数据条的填充颜色。*/
function test() {
    let databar = Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(2)
    databar.NegativeBarFormat.Color.ColorIndex = 10
}
```
