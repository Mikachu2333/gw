# Shape.ControlFormat

返回一个 **[ControlFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/obj)** 对象，该对象包含 ET 控件 （ET 控件：ET 本身具有的控件，而不是 ActiveX 控件。）属性。只读。



## 语法

express.**ControlFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

ControlFormat

## 示例


```JavaScript
/*本示例删除第一张工作表中列表框中选定的数据项。如果 Shapes(2) 代表的不是列表框，则本示例将无效。*/
function test() {
    let controlFormat = Worksheets.Item(1).Shapes.Item(2).ControlFormat
    controlFormat.RemoveItem(controlFormat.ListIndex)
}
```


```JavaScript
/*本示例判断如果活动工作表中第三个形状是复选框，则不勾选复选框。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(3).Type == msoFormControl && shapes.Item(3).FormControlType == xlCheckBox) {
        shapes.Item(3).ControlFormat.Value = false
    }
}
```
