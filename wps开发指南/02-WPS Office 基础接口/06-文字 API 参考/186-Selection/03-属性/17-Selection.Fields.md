# Selection.Fields

返回一个只读 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** 集合，该集合代表选定内容中的所有域。



## 语法

express.**Fields**

express   一个代表 **Selection** 对象的变量。

## 类型

Fields

## 示例


```JavaScript
/*本示例在插入点添加一个 Date 域。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.Fields.Add(Selection.Range, wdFieldDate)
}
```


```JavaScript
/*本示例对所选内容中的第一个域设置加粗格式。*/
function test() {
    if (Selection.Fields.Count >= 1) {
        let range = Selection.Fields.Item(1).Result
        range.Bold = msoTrue
    }
}
```
