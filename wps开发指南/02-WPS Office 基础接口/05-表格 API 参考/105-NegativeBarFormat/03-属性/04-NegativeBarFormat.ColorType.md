# NegativeBarFormat.ColorType

指定是否使用与正数据条相同的填充色。可读/写。



## 语法

express.**ColorType**

express   一个代表 **NegativeBarFormat** 对象的变量。

## 类型

**[XlDataBarNegativeColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlDataBarNegativeColorType)** 

## 说明


如果将 **ColorType** 属性设置为 **xlDataBarColor** , 那么使用 **NegativeBarFormat** 对象的 **[Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/NegativeBarFormat/member/Color)** 可返回 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象，可使用该对象来指定填充色。



## 示例


```JavaScript
/*本示例显示第一张工作表上区域 A1:A10 中第二个条件格式（数据条）的负数据条的填充色是否使用在“负值和轴设置”对话框中指定的颜色。*/
function test() {
    let databar = Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(2)
    alert(databar.NegativeBarFormat.ColorType == xlDataBarColor)
}
```


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第一个条件格式（数据条）的负数据条设置为与正数据条相同的填充颜色和边框颜色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.NegativeBarFormat.ColorType = xlDataBarSameAsPositive
    databar.NegativeBarFormat.BorderColorType = xlDataBarSameAsPositive
}
```
