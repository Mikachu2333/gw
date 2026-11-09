# AutoFilter 对象

代表对指定工作表的自动筛选。

## 说明


使用 **[AutoFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/AutoFilter)** 属性可返回 **AutoFilter** 对象。使用 **Filters** 属性可返回由各个列筛选组成的集合。使用 **Range** 属性可返回代表整个筛选区域的 **Range** 对象。

要为工作表创建 **AutoFilter** 对象，必须手动打开或使用 **Range** 对象的 **AutoFilter** 方法打开工作表上某个区域上的自动筛选功能。


## 示例


```JavaScript
/*本示例存储当前筛选的地址和筛选条件，然后应用新筛选器。*/
function test() {
    let w = Worksheets.Item(1)
    let autoFilter = w.AutoFilter
    let currentFiltRange = autoFilter.Range.Address()
    let filters = autoFilter.Filters
    let filterArray = new Array(w.AutoFilter.Filters.Count)
    for (let i = 0; i < filterArray.length; i++) {
        filterArray[i] = new Array(3)
    }
    for (let f = 1; f <= filters.Count; f++) {
        let filter = filters.Item(f)
        if (filter.On) {
            filterArray[f][1] = filter.Criteria1
            if (filter.Operator) {
                filterArray[f][2] = filter.Operator
                filterArray[f][3] = filter.Criteria2
            }
        }
    }
    w.AutoFilterMode = false
    w.Range("A1").AutoFilter(1, "apple")
}
```


```JavaScript
/*本示例使用filterArray数组来为第一张工作表恢复最初的自动筛选。*/
function test() {
    let w = Worksheets.Item(1)
    let currentFiltRange = w.AutoFilter.Range.Address()
    let filters = w.AutoFilter.Filters
    let filterArray = new Array(w.AutoFilter.Filters.Count)
    for (let i = 0; i < filterArray.length; i++) {
        filterArray[i] = new Array(3)
    }
    for (let f = 1; f <= filters.Count; f++) {
        let filter = filters.Item(f)
        if (filter.On) {
            filterArray[f][1] = filter.Criteria1
            if (filter.Operator) {
                filterArray[f][2] = filter.Operator
                filterArray[f][3] = filter.Criteria2
            }
        }
    }
    w.AutoFilterMode = false

    for (let col = 1; col < filterArray.length; col++) {
        if (filterArray[col][1] !== null) {
            if (filterArray[col][2]) {
                w.Range(currentFiltRange).AutoFilter(col, filterArray[col][1], filterArray[col][2], filterArray[col][3])
            } else {
                w.Range(currentFiltRange).AutoFilter(col, filterArray[col][1])
            }
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/ApplyFilter) | 应用指定的 **Autofilter** 对象。 |
| [ShowAllData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/ShowAllData) | 显示 **AutoFilter** 对象返回的所有数据。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [FilterMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/FilterMode) | 如果工作表的筛选模式为自动筛选，则返回 **True** 。只读 **Boolean** 类型。 |
| [Filters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/Filters) | 返回一个 **Filters** 集合，该集合表示自动筛选区域中的所有筛选器。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/Parent) | 返回指定对象的父对象。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/Range) | 返回一个 **Range** 对象，它代表应用指定的“自动筛选”的区域。 |
| [Sort](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoFilter/member/Sort) | 获取 **AutoFilter** 集合的排序列和排序次序。 |