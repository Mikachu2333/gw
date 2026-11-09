# Application.Cells

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表活动工作表中的所有单元格。如果活动文档不是工作表，则此属性无效。



## 语法

express.**Cells**

express   一个代表 **Application** 对象的变量。

## 类型

Range

## 说明


因为 **Item** 属性是 [ **Range** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象的默认属性，所以可以在 **Cells** 关键字后面紧接着指定行和列索引。有关详细信息，请参阅 **Item** 属性和本主题的示例。

在不使用对象识别符的情况下，使用此属性将返回一个 [ **Range** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象，它代表活动工作表中所有的单元格。



## 示例


```JavaScript
/*本示例演示给活动工作表的A1单元格设置值。*/
function test() {
    Application.ActiveSheet.Cells.Item(1, 1).Value2 = 10
}
```


```JavaScript
/*本示例演示选择单元格区域A4:B5。*/
function test() {
    Application.Cells.Range("A4:B5").Select()
}
```
