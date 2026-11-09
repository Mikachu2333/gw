# Row.Borders

返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **Row** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例设置选中区域第一行的外部边框的颜色。*/
function test() {
    Selection.Rows.Item(1).Borders.OutsideColor = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动文档的第一个表格中第一行内部边框的线条宽度。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Rows.Item(1).Borders.InsideLineWidth)
}
```
