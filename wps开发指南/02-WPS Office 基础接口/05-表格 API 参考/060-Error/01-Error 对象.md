# Error 对象

代表区域的电子表格错误。

## 说明


使用 **Errors** 对象的 **Item** 属性可返回 **Error** 对象。

返回 **Error** 对象后，可结合使用 **Value** 和 **Errors** 属性检查某个特定错误检查选项是否已启用。

不要将 **Error** 对象与 JavaScript 的错误处理功能混淆。


## 示例


```JavaScript
/*下例中，在引用空单元格的单元格 A1 中创建一个公式，然后使用 Item(index)（其中 index 用于标识错误类型）显示描述错误情况的消息。*/
function test() {
    let rngFormula = Application.Range("A1")

    //Place a formula referencing empty cells.
    Range("A1").Formula = "=A2+A3"
    Application.ErrorCheckingOptions.EmptyCellReferences = true

    //Perform check to see if EmptyCellReferences check is on.
    if (rngFormula.Errors.Item(xlEmptyCellReferences).Value) {
        alert("The empty cell references error checking feature is enabled.")
    } else {
        alert("The empty cell references error checking feature is not on.")
    }
}
```


```JavaScript
/*本示例禁用单元格 C1 的错误检查选项。*/
function test() {
    Range("C1").Select()
    Application.Range("C1").Errors.Item(xlTextDate).Ignore = true
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Error/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Error/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Ignore](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Error/member/Ignore) | 允许用户设置或返回某一区域的错误检查选项的状态。如果该值为 **False** ，则某一区域的错误检查选项可用。如果该值为 **True** ，则禁用某一区域的错误检查选项。 **Boolean** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Error/member/Parent) | 返回指定对象的父对象。只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Error/member/Value) | 返回一个 **Boolean** 值，它指明是否符合所有的有效性验证条件（即，该区域是否包含有效数据）。 |