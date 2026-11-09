# Shapes.AddOLEControl

创建一个 ActiveX 控件（以前称为 OLE 控件）。返回代表新 ActiveX 控件的 **Shape** 对象。



## 语法

express.**AddOLEControl(ClassType, Left, Top, Width, Height, Anchor)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ClassType | 可选 | any | 用于要创建的 ActiveX 控件的编程标识符。 |
| Left | 可选 | any | 从页面左边缘到 ActiveX 控件左边缘之间的距离（以磅为单位）。 |
| Top | 可选 | any | 从页面上边缘到 ActiveX 控件上边缘之间的距离（以磅为单位）。 |
| Width | 可选 | any | ActiveX 控件的宽度。 |
| Height | 可选 | any | ActiveX 控件的高度。 |
| Anchor | 可选 | any | 代表 ActiveX 控件所绑定的文本的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。如果指定 Anchor，则锁定标记将出现在锁定区域第一段的开头。如果省略该参数，将自动选定锁定区域，而 ActiveX 控件将相对于页面的上边缘和左边缘进行定位。 |

## 返回值

Shape

## 说明


在 WPS 中，将 ActiveX 控件表示为 **Shape** 对象或 **InlineShape** 对象。要修改 ActiveX 控件的属性，可以对指定的形状或内嵌形状使用 **OLEFormat** 对象的 **Object** 属性。  

有关可用的 ActiveX 控件类类型的信息，请参阅 OLE 编程标识符。



## 示例


```JavaScript
/*本示例在第一个文档上创建一个 ActiveX 控件。*/
function test() {
    Documents.Item(1).Shapes.AddOLEControl("Forms.ComboBox.1")
}
```


```JavaScript
/*本示例在活动文档上所选位置创建一个复选框控件，并设置该控件的阴影格式。*/
function test() {
    let shape = ActiveDocument.Shapes.AddOLEControl("Forms.CheckBox.1", 10, 10, 60, 20, Selection.Range)
    shape.Shadow.Visible = msoTrue
    shape.Shadow.Style = msoShadow12
}
```
