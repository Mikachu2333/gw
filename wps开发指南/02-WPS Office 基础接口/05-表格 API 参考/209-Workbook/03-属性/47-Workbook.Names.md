# Workbook.Names

返回一个 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** 集合，它代表指定工作簿的所有名称（包括所有指定工作表的名称）。 **Names** 对象，只读。



## 语法

express.**Names**

express   一个代表 **Workbook** 对象的变量。

## 类型

Names

## 说明


在不使用对象识别符的情况下使用此属性等效于使用 `ActiveWorkbook.Names`。



## 示例


```JavaScript
/*本示例是将 Sheet1 中的 A1 单元格的名称定义为“myName”。*/
function test() {
    Application.ActiveWorkbook.Names.Add("myName", null, null, null, null, null, null, null, null, "=Sheet1!R1C1")
}
```


```JavaScript
/*本示例是将 Sheet1 中的 C1 单元格的名称定义为“myCell”。*/
function test() {
    Application.ActiveWorkbook.Names.Add("myCell", "=Sheet1!$C$1")
}
```
