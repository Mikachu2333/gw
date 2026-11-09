# Field.Select

选择指定的域。



## 语法

express.**Select()**

express   一个代表 **Field** 对象的变量。

## 返回值

void

## 说明


使用此方法后，可使用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象处理所选项目。有关详细信息，请参阅处理 Selection 对象。



## 示例


```JavaScript
/*本示例更新并选定活动文档中的第一个域。*/
function test() {
    ActiveDocument.ActiveWindow.View.FieldShading = wdFieldShadingWhenSelected
    let fields = ActiveDocument.Fields
    if (fields.Count >= 1) {
        fields.Item(1).Update()
        fields.Item(1).Select()
    }
}
```


```JavaScript
/*本示例选中第一个文档上第一个域，并将所选内容中的文本设置为加粗格式。*/
function test() {
    let field = Documents.Item(1).Fields.Item(1)
    field.Select()
    Selection.Range.Bold = true
}
```
