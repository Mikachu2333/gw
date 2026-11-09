# Range.Worksheet

返回一个 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象，该对象表示包含指定区域的工作表。只读。



## 语法

express.**Worksheet**

express   一个代表 **Range** 对象的变量。

## 类型

Worksheet

## 示例


```JavaScript
/*本示例显示包含活动单元格的工作表的名称。本示例必须在工作表上运行。*/
function test() {
    MsgBox(Application.ActiveCell.Worksheet.Name)
}
```


```JavaScript
/*本示例显示包含名为“testRange”的区域的工作表名称。*/
function test() {
    MsgBox(Application.Range("testRange").Worksheet.Name)
}
```
