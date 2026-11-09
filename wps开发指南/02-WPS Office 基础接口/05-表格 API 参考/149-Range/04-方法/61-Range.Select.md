# Range.Select

选择对象。

返回值类型为Variant。



## 语法

express.**Select()**

express   一个代表 **Range** 对象的变量。

## 返回值

any

## 说明


要选择单元格或单元格区域，请使用 **Select** 方法。要使单个单元格成为活动单元格，请使用 **[Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Activate)** 方法。



## 示例


```JavaScript
/*本示例将 A3 单元格选中*/
function test() {
    Range("A3").Select()
}
```


```JavaScript
/*本示例将 B1 单元格的值设置为 b1，选中 A1:C3 单元格区域，并清除选中区域的内容*/
function test() {
    Range("B1").Value2 = 'b1'
    Range("A1:C3").Select()
    Selection.Clear()
}
```
