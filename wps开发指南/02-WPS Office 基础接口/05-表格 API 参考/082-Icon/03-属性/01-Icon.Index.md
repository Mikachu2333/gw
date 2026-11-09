# Icon.Index

返回一个 **Long** 值，该值指明 **[IconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSet/obj)** 对象中 **Icon** 对象的索引号。只读。



## 语法

express.**Index**

express   一个代表 **Icon** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上区域 B1:B10 中第一个图标集条件格式的图标集中第一个图标的索引。*/
function test() {
    let icon = ActiveSheet.Range("B1:B10").FormatConditions.Item(1).IconSet.Item(1)
    alert(icon.Index)
}
```


```JavaScript
/*本示例将第一张工作表上区域 B1:B10 中第二个图标集条件格式的图标集中第二个图标的索引赋值给 D1 单元格。*/
function test() {
    let icon = Worksheets.Item(1).Range("B1:B10").FormatConditions.Item(2).IconSet.Item(2)
    Range("D1").Value2 = icon.Index
}
```
