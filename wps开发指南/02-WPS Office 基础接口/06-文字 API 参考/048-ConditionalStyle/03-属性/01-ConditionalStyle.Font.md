# ConditionalStyle.Font

返回或设置一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。可读写。



## 语法

express.**Font**

express   一个代表 **ConditionalStyle** 对象的变量。

## 类型

Font

## 说明


要设置 **Font** 属性，请指定一个返回 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象的表达式。



## 示例


```JavaScript
/*本示例显示活动文档上名为“普通表格”的表格样式的最后一行表格的字体的名称。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("普通表格").Table
    alert(tableStyle.Condition(wdLastRow).Font.Name)
}
```


```JavaScript
/*本示例将第一个文档上名为“网格型”的表格样式的第一列表格的字体设置为加粗。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("网格型").Table
    tableStyle.Condition(wdFirstColumn).Font.Bold = true
}
```
