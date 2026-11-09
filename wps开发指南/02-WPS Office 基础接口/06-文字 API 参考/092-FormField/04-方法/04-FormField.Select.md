# FormField.Select

选择指定的对象。



## 语法

express.**Select()**

express   一个代表 **FormField** 对象的变量。

## 返回值

void

## 说明


使用此方法后，可使用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象处理所选项目。有关详细信息，请参阅处理 **Selection** 对象。



## 示例


```JavaScript
/*本示例选中活动文档中最后一个窗体域。*/
function test() {
    let formFields = ActiveDocument.FormFields
    if (formFields.Count > 0) {
        formFields.Item(formFields.Count).Select()
    }
}
```


```JavaScript
/*本示例选中所选内容中名为“CheckBox2”的窗体域。*/
function test() {
    Selection.FormFields.Item("CheckBox2").Select()
}
```
