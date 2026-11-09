# FormFields.Add

返回一个 **FormField** 对象，该对象代表添加到区域中的新的窗体域。



## 语法

express.**Add(Range, Type)**

express   一个代表 **FormFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 要添加窗体域的区域。如果该区域未折叠，那么窗体域将替换此区域。 |
| Type | 必选 | WdFieldType | 要添加的窗体域的类型。 |

## 返回值

FormField

## 说明


 **安全性:** 动态数据交换（DDE）是一种不安全的陈旧技术。如果可能，请使用比 DDE 更加安全的技术，如对象链接和嵌入（OLE）。



## 示例


```JavaScript
/*本示例在选定内容的末尾处添加一个复选框，然后命名并选定该复选框。*/
function test() {
    Application.Selection.Collapse(wdCollapseEnd)
    let formField = ActiveDocument.FormFields.Add(Selection.Range, wdFieldFormCheckBox)
    formField.Name = "Check_Box_1"
    formField.CheckBox.Value = true
}
```


```JavaScript
/*本示例在第一个文档的第一段上添加一个下拉型窗体域。*/
function test() {
    let range = Documents.Item(1).Paragraphs.Item(1).Range
    Documents.Item(1).FormFields.Add(range, wdFieldFormDropDown)
}
```
