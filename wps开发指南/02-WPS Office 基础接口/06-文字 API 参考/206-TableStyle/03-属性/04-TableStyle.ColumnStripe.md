# TableStyle.ColumnStripe

返回或设置一个 **Long** 类型的值，当样式指定奇数或偶数列成组时，该属性代表组中的列数。可读写。



## 语法

express.**ColumnStripe**

express   一个代表 **TableStyle** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **[Condition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/Condition)** 方法可设置用于表格样式的奇数或偶数列组。



## 示例


```JavaScript
/*本示例新建一个表格样式并设置其格式。该样式的结果使每隔三列的三列和每隔两行的两行具有 20% 的底纹。*/
function test() {
    ActiveDocument.Styles.Add("TableStyle 1", wdStyleTypeTable)
    let tableStyle = ActiveDocument.Styles.Item("TableStyle 1").Table
    tableStyle.Condition(wdEvenColumnBanding).Shading.Texture = wdTexture20Percent
    tableStyle.ColumnStripe = 3
    tableStyle.Condition(wdEvenRowBanding).Shading.Texture = wdTexture20Percent
    tableStyle.RowStripe = 2
}
```


```JavaScript
/*本示例显示活动文档上名为“网格型”的表格样式的 ColumnStripe 属性值。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("网格型").Table
    alert(tableStyle.ColumnStripe)
}
```
