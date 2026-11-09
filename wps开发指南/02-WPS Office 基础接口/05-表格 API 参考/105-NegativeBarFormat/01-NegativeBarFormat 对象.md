# NegativeBarFormat 对象

表示由数据条条件格式规则定义的负值的数据条颜色设置。

## 说明


 **NegativeBarFormat** 对象的属性可用来指定负值数据条的填充色和边框。使用 **[Databar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/obj)** 对象的表示数据条条件格式规则的 **[NegativeBarFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/NegativeBarFormat)** 可访问与该规则关联的 **NegativeBarFormat** 对象。


## 示例


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个条件格式（数据条）的负数据条的主题颜色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.NegativeBarFormat.Color.ThemeColor = xlThemeColorAccent2
    databar.NegativeBarFormat.BorderColor.ThemeColor = xlThemeColorAccent2
}
```


```JavaScript
/*本示例判断如果第一张工作表上区域 A1:A10 中第二个条件格式（数据条）的负数据条与正数据条相同的填充颜色，则将该负数据条设置为与正数据条相同的边框颜色。*/
function test() {
    let databar = Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(2)
    if (databar.NegativeBarFormat.ColorType == xlDataBarSameAsPositive) {
        databar.NegativeBarFormat.BorderColorType = xlDataBarSameAsPositive
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BorderColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/NegativeBarFormat/member/BorderColor) | 返回一个 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象，可使用该对象指定负数据条的边框色。只读。 |
| [BorderColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/NegativeBarFormat/member/BorderColorType) | 指定是否使用与正数据条相同的边框色。可读/写。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/NegativeBarFormat/member/Color) | 返回一个 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象，可使用该对象来指定负数据条的填充色。只读 |
| [ColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/NegativeBarFormat/member/ColorType) | 指定是否使用与正数据条相同的填充色。可读/写。 |