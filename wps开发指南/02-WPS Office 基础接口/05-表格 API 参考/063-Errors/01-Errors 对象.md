# Errors 对象

代表区域内的各种电子表格错误。

## 说明


使用 **Range** 对象的 **Errors** 属性可返回 **Errors** 对象。

返回 **Errors** 对象后，可使用 **Error** 对象的 **Value** 属性检查特定的错误检查条件。


## 示例


```JavaScript
/*下例将一个数字作为文本放在单元格 A1 中，然后当单元格 A1 的值包含文本格式的数字时通知用户。*/
function test() {
    //Place a number written as text in cell A1.
    Range("A1").Formula = "'1"

    if (Range("A1").Errors.Item(xlNumberAsText).Value) {
        alert("Cell A1 has a number as text.")
    } else {
        alert("Cell A1 is a number.")
    }
}
```


```JavaScript
/*本示例禁用单元格 B1 的错误检查选项。*/
function test() {
    Range("B1").Select()
    Application.Range("B1").Errors.Item(xlEmptyCellReferences).Ignore = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Errors/member/Item) | 返回 **Error** 对象的单个成员。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Errors/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Errors/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Errors/member/Parent) | 返回指定对象的父对象。只读。 |