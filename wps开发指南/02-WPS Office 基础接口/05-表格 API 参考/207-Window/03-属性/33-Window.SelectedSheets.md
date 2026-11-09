# Window.SelectedSheets

返回一个 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合，该集合表示指定窗口中所有选定工作表。只读。



## 语法

express.**SelectedSheets**

express   一个代表 **Window** 对象的变量。

## 类型

Sheets

## 示例


```JavaScript
/*本示例删除第一个窗口中被选中的工作表。*/
function test() {
    Windows.Item(1).SelectedSheets.Delete()
}
```


```JavaScript
/*本示例显示活动窗口中被选中的所有工作表的名称。*/
function test() {
    let sheets = ActiveWindow.SelectedSheets
    for (let i = 1; i <= sheets.Count; i++) {
        alert(sheets.Item(i).Name)
    }
}
```
