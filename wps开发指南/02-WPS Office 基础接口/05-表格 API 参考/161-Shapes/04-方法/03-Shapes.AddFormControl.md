# Shapes.AddFormControl

创建一个 ET 控件 （ET 控件：ET 本身具有的控件，而不是 ActiveX 控件。）。将返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象代表新建的控件。



## 语法

express.**AddFormControl(Type, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlFormControl | ET 控件 （ET 控件：ET 本身具有的控件，而不是 ActiveX 控件。）类型。无法在工作表上创建编辑框。 |
| Left | 必选 | number（int4 精度） | 新对象相对于工作表 A1 单元格左上角或图表左上角的初始坐标（以磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位）。 |
| Top | 必选 | number（int4 精度） | 新对象相对于工作表 A1 单元格左上角或图表左上角的初始坐标（以磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位）。 |
| Width | 必选 | number（int4 精度） | 新对象的初始大小（以磅为单位）。 |
| Height | 必选 | number（int4 精度） | 新对象的初始大小（以磅为单位）。 |

## 返回值

Shape

## 说明


对 **[OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/obj)** 集合使用 **[AddOLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddOLEObject)** 方法或者 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Add)** 方法可创建一个 ActiveX 控件（ActiveX 控件：一种控件，如复选框或按钮，向用户提供选项或运行使任务自动化的宏或脚本。）。



## 示例


```JavaScript
/*本示例将列表框添加到第一张工作表中，并为该列表框设置填充区域。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    let lb = shapes.AddFormControl(xlListBox, 100, 10, 100, 100)
    lb.ControlFormat.ListFillRange = "A1:A10"
}
```


```JavaScript
/*本示例将单选按钮控件添加到活动工作表中。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let lb = shapes.AddFormControl(xlOptionButton, 100, 150, 100, 20)
}
```
