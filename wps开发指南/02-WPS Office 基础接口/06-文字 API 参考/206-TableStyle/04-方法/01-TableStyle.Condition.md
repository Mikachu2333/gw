# TableStyle.Condition

返回表示表格某个部分的特殊样式格式设置的 **[ConditionalStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ConditionalStyle/obj)** 对象。



## 语法

express.**Condition(ConditionCode)**

express   一个代表 **TableStyle** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ConditionCode | 必选 | WdConditionCode | 应用格式的部分表格。 |

## 返回值

ConditionalStyle

## 示例


```JavaScript
/*本示例选定活动文档中的第一个表格，并为名为“彩色型 2”的表格样式的奇数列添加百分之二十的底纹。*/
function test() {
    // Select the table to which the conditional formatting will apply
    ActiveDocument.Tables.Item(1).Select()

    // Specify the conditional formatting
    let tableStyle = ActiveDocument.Styles.Item("彩色型 2").Table
    tableStyle.Condition(wdOddColumnBanding).Shading.BackgroundPatternColor = wdColorGray20
}
```


```JavaScript
/*本示例将活动文档上名为“网格型”的表格样式中表格的偶数列的字体设置加粗格式。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("网格型").Table
    tableStyle.Condition(wdEvenColumnBanding).Font.Bold = true
}
```
