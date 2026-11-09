# ErrorCheckingOptions 对象

代表应用程序的错误检查选项。

## 说明


使用 **Application** 对象的 **ErrorCheckingOptions** 属性可返回 **ErrorCheckingOptions** 对象。

引用 **Errors** 对象的 **Item** 属性可查看与错误检查选项关联的索引值列表。

返回 **ErrorCheckingOptions** 对象后，可使用以下属性设置或返回错误检查选项。这些属性都是 **ErrorCheckingOptions** 对象的成员。

* **BackgroundChecking** 
* **EmptyCellReferences** 
* **EvaluateToError** 
* **InconsistentFormula** 
* **IndicatorColorIndex** 
* **NumberAsText** 
* **OmittedCells** 
* **TextDate** 
* **UnlockedFormulaCells** 


## 示例


```JavaScript
/*下例使用 TextDate 属性启用对两位数年份文本日期的错误检查，并通知用户。*/
function test() {
    let range = Application.Range("A1")

    Range("A1").Formula = "'00/4/23"
    Application.ErrorCheckingOptions.TextDate = true

    //Perform check to see if 2 digit year TextDate check is on.
    if (range.Errors.Item(xlTextDate).Value) {
        alert("The text date error checking feature is enabled.")
    } else {
        alert("The text date error checking feature is not on.")
    }
}
```


```JavaScript
/*本示例显示 ET 查看错误检查的指示器颜色是否为默认系统颜色。*/
function test() {
    alert(Application.ErrorCheckingOptions.IndicatorColorIndex == xlColorIndexAutomatic)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [BackgroundChecking](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/BackgroundChecking) | 警告用户并指出违背可用错误检查规则的所有单元格。如果该属性设置为 **True** （默认值），则在违背启用错误的所有单元格旁边将出现 **“自动更正选项”** 按钮。如果为 **False** ，则禁用后台错误检查。 **Boolean** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [EmptyCellReferences](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/EmptyCellReferences) | 如果该属性设置为 **True** （默认值），则 ET 使用 **“自动更正选项”** 按钮识别被选取的单元格，这些单元格中包括引用了空单元格的公式。如果该值为 **False** ，则禁用空单元格引用检查。 **Boolean** 类型，可读写。 |
| [EvaluateToError](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/EvaluateToError) | 如果该属性设置为 **True** （默认值），则 ET 将使用 **“自动更正选项”** 按钮识别被选中的单元格，这些单元格中包含计算结果错误的公式。如果该值为 **False** ，则禁用对计算结果为错误值的单元格的错误检查。 **Boolean** 类型，可读写。 |
| [InconsistentFormula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/InconsistentFormula) | 如果该值为 **True** （默认值），则 ET 将识别包含不一致公式的单元格区域。如果该值为 **False** ，则禁用不一致公式的检查。 **Boolean** 类型，可读写。 |
| [IndicatorColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/IndicatorColorIndex) | 返回或设置错误检查选项的指示器的颜色。 **XlColorIndex** 类型，可读写。 |
| [NumberAsText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/NumberAsText) | 如果该值为 **True** （默认值），则 ET 将用 **“自动更正选项”** 按钮识别被选定的单元格，这些单元格包含文本格式的数字。如果该值为 **False** ，则禁用对文本格式数字的错误检查。 **Boolean** 类型，可读写。 |
| [OmittedCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/OmittedCells) | 如果该值为 **True** （默认值），则 ET 将用“自动更正选项”按钮识别包含公式的选定单元格，其中该公式引用的区域应包括相邻单元格，但这些单元格却被遗漏掉了。如果该值为 **False** ，则禁用对被遗漏单元格的错误检查。 **Boolean** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/Parent) | 返回指定对象的父对象。只读。 |
| [TextDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/TextDate) | 如果设置为 **True** （默认值），则 ET 将使用 **“自动更正选项”** 按钮识别包含用两位数字表示年份的文本日期的单元格。如果该属性值为 **False** ，则禁用此类单元格的错误检查。 **Boolean** 类型，可读写。 |
| [UnlockedFormulaCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/member/UnlockedFormulaCells) | 如果该值为 **True** （默认值），则 ET 将识别未锁定并包含一个公式的选定单元格。如果该值为 **False** ，则禁用包含公式的未锁定单元格的错误检查。 **Boolean** 类型，可读写。 |