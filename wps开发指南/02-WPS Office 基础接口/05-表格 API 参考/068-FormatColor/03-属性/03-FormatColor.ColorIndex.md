# FormatColor.ColorIndex

返回或设置 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 枚举的常量之一，指定是否以当前调色板中颜色的索引值形式表示填充色。



## 语法

express.**ColorIndex**

express   一个代表 **FormatColor** 对象的变量。

## 类型

XlColorIndex

## 说明


此属性用于色阶或数据条条件格式规则中的每个阈值。



## 示例


```JavaScript
/*本示例选中指定单元格区域，设置第二个色阶条件格式中第一个条件，将最小阈值的颜色索引设置为自动配色。*/
function test() {
    Range("C1:C10").Select()
    Selection.FormatConditions.Item(2).ColorScaleCriteria.Item(1).FormatColor.ColorIndex = xlColorIndexAutomatic
}
```


```JavaScript
/*本示例显示指定单元格区域的第一个色阶条件格式中第二个条件最大阈值的颜色索引是否为无颜色。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(formatCondition.ColorScaleCriteria.Item(2).FormatColor.ColorIndex == xlColorIndexNone)
}
```
