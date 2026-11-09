# Validation 对象

代表工作表区域的数据有效性规则。

## 说明


使用 **Validation** 属性可返回 **Validation** 对象。


## 示例


```JavaScript
/*本示例更改单元格 E5 的数据有效性验证。*/
function test() {
    Application.Range("E5").Validation.Modify(xlValidateList, xlValidAlertStop, null, "=$A$1:$A$10")
}
```
使用 **Add** 方法可将数据有效性添加到某个区域并创建一个新的 **Validation** 对象。



```JavaScript
/*本示例为 E5 单元格添加数据有效性验证*/
function test() {
    let validation = Application.Range("E5").Validation
    validation.Add(xlValidateWholeNumber, xlValidAlertStop, xlBetween, "5", "10")
    validation.InputTitle = "Integers"
    validation.ErrorTitle = "Integers"
    validation.InputMessage = "Enter an integer from five to ten"
    validation.ErrorMessage = "You must enter a number from five to ten"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Add) | 向指定区域内添加数据有效性验证。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Delete) | 删除对象。 |
| [Modify](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Modify) | 修改指定区域的数据有效性验证。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlertStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/AlertStyle) | 返回有效性检验警告样式。 **XlDVAlertStyle** 类型，只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [ErrorMessage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/ErrorMessage) | 返回或设置数据有效性检验错误消息。 **String** 类型，可读写。 |
| [ErrorTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/ErrorTitle) | 返回或设置数据有效性错误对话框的标题。 **String** 类型，可读写。 |
| [Formula1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Formula1) | 返回与条件格式或者数据有效性相关联的值或表达式。可为常量值、字符串值、单元格引用或公式。 **String** 型，只读。 |
| [Formula2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Formula2) | 返回与条件格式或数据有效性验证第二部分相关联的值或表达式。仅用于数据有效性条件格式 **Operator** 属性为 **xlBetween** 或 **xlNotBetween** 的情况。可为常量值、字符串值、单元格引用或公式。 **String** 类型，只读。 |
| [IMEMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/IMEMode) | 返回或设置日文输入规则的说明。可以是下表列出的 **XlIMEMode** 常量之一。 **Long** 类型，可读写。 |
| [IgnoreBlank](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/IgnoreBlank) | 如果指定区域内的数据有效性检验允许空值，则该值为 **True** 。 **Boolean** 类型，可读写。 |
| [InCellDropdown](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/InCellDropdown) | 如果数据有效性显示含有有效取值的下拉列表，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [InputMessage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/InputMessage) | 返回或设置数据有效性检验输入信息。 **String** 类型，可读写。 |
| [InputTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/InputTitle) | 返回或设置数据有效性输入对话框的标题。 **String** 类型，可读写。 |
| [Operator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Operator) | 返回一个 **Long** 值，它代表数据有效性的运算符。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Parent) | 返回指定对象的父对象。只读。 |
| [ShowError](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/ShowError) | 如果用户输入无效数据时显示数据有效性检查错误消息，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowInput](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/ShowInput) | 如果用户在数据有效性检查区域内选定了某一单元格时，显示数据有效性检查输入消息，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Type) | 返回一个包含 **XlDVType** 常量的 **Long** 值，它代表区域的数据类型有效性验证。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/member/Value) | 返回一个 **Boolean** 值，它指明是否符合所有的有效性验证条件（即，该区域是否包含有效数据）。 |