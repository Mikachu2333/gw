# Range.Hidden

返回或设置一个 **Variant** 值，它指明是否隐藏行或列。



## 语法

express.**Hidden**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


将此属性设置为 **True** 以隐藏行或列。指定的区域必须占据整个行或整个列。

请不要将此属性与 **[FormulaHidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/FormulaHidden)** 属性混淆。



## 示例


```JavaScript
/*此示例隐藏 Sheet1 的 C 列。*/
function test() {
    Application.Worksheets.Item("Sheet1").Columns.Item("C").Hidden = true
}
```


```JavaScript
/*本示例隐藏 A1 单元格所在的行*/
function test() {
    Range("A1").Rows.Hidden = true
}
```
