# Filters 对象

由多个 **[Filter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/obj)** 对象组成的集合，这些对象代表自动筛选区域内的所有筛选。

## 说明


使用 **Filters** 属性可返回 **Filters** 集合。


## 示例


```JavaScript
/*本示例创建一个列表，其中包含第一张工作表中已自动筛选的区域内所有筛选的条件和运算符。*/
function test() {
    let filter = null
    let op = null
    let c1 = null
    let c2 = null
    let ns = "Not set"

    let worksheet1 = Application.Worksheets.Item("Sheet1")
    let worksheet2 = Application.Worksheets.Item("Sheet2")
    let rw = 1
    for (let i = 1; i <= worksheet1.AutoFilter.Filters.Count; i++) {
        filter = worksheet1.AutoFilter.Filters.Item(i)
        if (filter.On) {
            let c1 = filter.Criteria1.substr(filter.Criteria1.length - 1, 1)
            if (filter.Operator) {
                op = filter.Operator
                c2 = filter.Criteria2.substr(filter.Criteria2.length - 1, 1)
            } else {
                op = ns
                c2 = ns
            }
        } else {
            c1 = ns
            op = ns
            c2 = ns
        }
        worksheet2.Cells.Item(rw, 1).Value2 = c1
        worksheet2.Cells.Item(rw, 2).Value2 = op
        worksheet2.Cells.Item(rw, 3).Value2 = c2
        rw = rw + 1
    }
}
```


```JavaScript
/*本示例将一个变量设置为第一张工作表上的筛选区域中第一列的筛选的 On 属性的值。*/
function test() {
    let worksheet = Worksheets.Item(1)
    if (worksheet.AutoFilterMode) {
        let filterIsOn = worksheet.AutoFilter.Filters.Item(1).On
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filters/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filters/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filters/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filters/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filters/member/Parent) | 返回指定对象的父对象。只读。 |