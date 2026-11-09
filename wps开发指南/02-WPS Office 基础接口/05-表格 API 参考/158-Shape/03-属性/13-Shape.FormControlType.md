# Shape.FormControlType

返回 ET 控件 （ET 控件：ET 本身具有的控件，而不是 ActiveX 控件。） **[XlFormControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormControl)** 类型，只读。



## 语法

express.**FormControlType**

express   一个代表 **Shape** 对象的变量。

## 类型

XlFormControl

## 说明


不能对 ActiveX 控件使用该属性（ **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Type)** 属性必须返回 **msoFormControl** ）。



## 示例


```JavaScript
/*本示例清除第一张工作表中的所有ET复选框。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Type == msoFormControl) {
            if (shapes.Item(i).FormControlType == xlCheckBox) {
                shapes.Item(i).ControlFormat.Value = false
            }
        }
    }
}
```


```JavaScript
/*本示例判断活动工作表中第二个形状是否为ET复选框。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    if (shapes.Item(2).FormControlType == xlCheckBox) {
        alert("第二个形状是复选框")
    } else {
        alert("第二个形状不是复选框")
    }
}
```
