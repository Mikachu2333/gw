# Selection.FormFields

返回一个 **[FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/obj)** 集合，该集合代表选定内容中所有窗体域。只读。



## 语法

express.**FormFields**

express   一个代表 **Selection** 对象的变量。

## 类型

FormFields

## 示例


```JavaScript
/*本示例显示选定内容中第一个窗体域的名称。*/
function test() {
    if (Selection.FormFields.Count > 0) {
        alert(Selection.FormFields.Item(1).Name)
    }
}
```


```JavaScript
/*本示例在选定区域添加一个下拉型窗体域。*/
function test() {
    Selection.FormFields.Add(Selection.Range, wdFieldFormDropDown)
}
```
