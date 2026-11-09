# Name.RefersToRange

返回由 **Name** 对象引用的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。只读。



## 语法

express.**RefersToRange**

express   一个代表 **Name** 对象的变量。

## 类型

Range

## 说明


如果 **Name** 对象并不引用区域（例如，如果该对象引用的是一个常量或公式），则该属性无效。

要更改名称所引用的区域，请使用 **[RefersTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/RefersTo)** 属性。



## 示例


```JavaScript
/*本示例显示当前工作表打印区域中的行数和列数，确保在当前工作簿的活动工作表上建立打印区域。*/
function test() {
    let p = Application.Sheets.Item(Application.ActiveSheet.Name).Names.Item("Print_Area").RefersToRange.Value2
    alert("Print_Area: " + p.length + " rows, " + p[0].length + " columns")
}
```


```JavaScript
/*本示例显示索引号为3的名称所引用单元格的宽度。*/
function test() {
    alert(ActiveWorkbook.Names.Item(3).RefersToRange.Width)
}
```
