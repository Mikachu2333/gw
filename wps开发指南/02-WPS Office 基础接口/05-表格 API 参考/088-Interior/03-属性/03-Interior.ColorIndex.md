# Interior.ColorIndex

返回或设置一个 **Variant** 值，它代表内部颜色。



## 语法

express.**ColorIndex**

express   一个代表 **Interior** 对象的变量。

## 类型

any

## 说明


颜色可指定为当前调色板中颜色的索引值，也可指定为下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量之一：

* **xlColorIndexAutomatic** 
* **xlColorIndexNone** 



## 示例


```JavaScript
/*此示例将 Sheet1 中 C2 单元格内部设置为红色。*/
function test() {
    Application.Worksheets("Sheet1").Range("C2").Interior.ColorIndex = 3
}
```


```JavaScript
/*此示例将活动工作表中 A1:D5 区域单元格内部设置为无颜色。*/
function test() {
    ActiveSheet.Range("A1:D5").Interior.ColorIndex = xlColorIndexNone
}
```
