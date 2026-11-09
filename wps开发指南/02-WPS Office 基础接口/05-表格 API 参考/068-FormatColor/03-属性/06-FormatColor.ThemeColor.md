# FormatColor.ThemeColor

返回或设置一个 **[XlThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlThemeColor)** 枚举常量，该值指定数据条或色阶条件格式阈值中所用的主题颜色。



## 语法

express.**ThemeColor**

express   一个代表 **FormatColor** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示指定单元格区域的第一个色阶条件格式中第一个条件的最小阈值的主题颜色是否为xlThemeColorAccent2。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(formatCondition.ColorScaleCriteria.Item(1).FormatColor.ThemeColor == xlThemeColorAccent2)
}
```


```JavaScript
/*本示例选中指定单元格区域，设置第一个色阶条件格式中第二个条件，将最大阈值的主题颜色设置为xlThemeColorDark1。*/
function test() {
    Range("C1:C10").Select()
    Selection.FormatConditions.Item(1).ColorScaleCriteria.Item(2).FormatColor.ThemeColor = xlThemeColorDark1
}
```
