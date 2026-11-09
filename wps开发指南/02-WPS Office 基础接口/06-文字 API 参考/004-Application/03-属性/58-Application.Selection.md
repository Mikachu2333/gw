# Application.Selection

返回 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象，该对象代表一选定的范围或插入点。只读。



## 语法

express.**Selection**

express   一个代表 **Application** 对象的变量。

## 类型

Selection

## 示例


```JavaScript
/*本示例判断如果所选内容类型为wdSelectionNormal，则显示所选文本。*/
function test() {
    if (Application.Selection.Type == wdSelectionNormal) {
        alert(Application.Selection.Text)
    }
}
```


```JavaScript
/*本示例对选定内容应用粗体和Arial字体*/
function test() {
    Selection.Font.Bold = true
    Selection.Font.Italic = false
    Selection.Font.Name = "Arial"
}
```


```JavaScript
/*如果插入点不在表格中，则将选定内容（插入点）移至下一张表格。*/
function test() {
    if (Selection.Information(wdWithInTable) == false) {
        Selection.GoToNext = wdGoToTable
    }
}
```
