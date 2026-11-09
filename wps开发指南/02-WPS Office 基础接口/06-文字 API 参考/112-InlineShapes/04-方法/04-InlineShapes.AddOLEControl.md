# InlineShapes.AddOLEControl

创建一个 ActiveX 控件（以前称为 OLE 控件）。返回代表新 ActiveX 控件的 **InlineShape** 对象。



## 语法

express.**AddOLEControl(ClassType, Range)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ClassType | 可选 | any | 用于要创建的 ActiveX 控件的编程标识符。 |
| Range | 可选 | any | 一个区域，ActiveX 控件将放置在该区域的文本中。如果该区域未折叠，则 ActiveX 控件将替换该区域。如果省略该参数，则自动放置 ActiveX 控件。 |

## 返回值

InlineShape

## 说明


在 WPS 中，将 ActiveX 控件表示为 **Shape** 对象或 **InlineShape** 对象。若要修改 ActiveX 控件的属性，可以对指定的图形或嵌入图形使用 **OLEFormat** 对象的 **Object** 属性。

关于 ActiveX 控件类型的可用信息，请参阅 OLE 编程标识符。



## 示例


```JavaScript
/*本示例在活动文档上创建一个复选框控件。*/
function test() {
    ActiveDocument.InlineShapes.AddOLEControl("Forms.CheckBox.1")
}
```


```JavaScript
/*本示例在第一个文档上所选区域中创建一个组合框控件。*/
function test() {
    Documents.Item(1).InlineShapes.AddOLEControl("Forms.ComboBox.1", Selection.Range)
}
```
