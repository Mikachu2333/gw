# Window.Selection

返回一个指定窗口的Selection对象。



## 语法

express.**Selection**

express   一个代表 **Window** 对象的变量。

## 类型

Object

## 说明


返回的对象类型取决于当前所选内容（例如，如果选择了单元格，此属性将返回 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象）。如果未选择任何内容， **Selection** 属性将返回 **null** 。

在不使用对象识别符的情况下，使用此属性等效于使用 `Application.Selection`。



## 示例


```JavaScript
/*本示例清空 Sheet1 的选定对象（假定选定对象为单元格区域）。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    ActiveWindow.Selection.Clear()
}
```


```JavaScript
/*本示例显示选定对象的 JSAPI 对象类型。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    alert("The selection object type is " + ActiveWindow.Selection.constructor.name)
}
```
