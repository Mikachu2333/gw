# Sort 对象

代表数据区域的排序方式。


## 示例


```JavaScript
/*此示例为活动工作表区域A1:A11赋值，并对这些数据排序。*/
function test() {
    //Building data to sort on the active sheet.
    Range("A1").Value2 = "Name"
    Range("A2").Value2 = "Bill"
    Range("A3").Value2 = "Rod"
    Range("A4").Value2 = "John"
    Range("A5").Value2 = "Paddy"
    Range("A6").Value2 = "Kelly"
    Range("A7").Value2 = "William"
    Range("A8").Value2 = "Janet"
    Range("A9").Value2 = "Florence"
    Range("A10").Value2 = "Albert"
    Range("A11").Value2 = "Mary"
    alert("The list is out of order.  Hit Ok to continue...")

    //Selecting a cell within the range.
    Range("A2").Select()

    //Applying sort.
    let sort = Application.ActiveWorkbook.Worksheets.Item(ActiveSheet.Name).Sort
    sort.SortFields.Clear()
    sort.SortFields.Add(Range("A2:A11"), xlSortOnValues, xlAscending, xlSortNormal)
    sort.SetRange(Range("A1:A11"))
    sort.Header = xlYes
    sort.MatchCase = false
    sort.Orientation = xlTopToBottom
    sort.SortMethod = xlPinYin
    sort.Apply()
    alert("Sort complete.")
}
```


```JavaScript
/*此示例对第一张工作表区域A1:C1按字符的汉语拼音顺序排序。*/
function test() {
    let sort = Application.Sheets.Item(1).Sort
    sort.SortFields.Clear()
    sort.SortFields.Add(Range("A1:C1"))
    sort.SetRange(Range("A1:C1"))
    sort.Header = xlYes
    sort.MatchCase = false
    sort.Orientation = xlSortRows
    sort.SortMethod = xlPinYin
    sort.Apply()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/Apply) | 根据当前应用的排序状态对区域进行排序。 |
| [SetRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/SetRange) | 设置 **Sort** 对象的起始字符和结束字符的位置。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Header](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/Header) | 指定第一行是否包含标题信息。可读/写 **[XlYesNoGuess](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlYesNoGuess)** 类型。 |
| [MatchCase](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/MatchCase) | 如果设置为 **True** ，则执行区分大小写的排序，如果设置为 **False** ，则执行不区分大小写的排序。可读/写。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/Orientation) | 指定排序方向。可读/写 **[XlSortOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortOrientation)** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/Parent) | 返回指定对象的父对象。只读。 |
| [Rng](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/Rng) | 返回要执行排序的值的区域。只读。 |
| [SortFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/SortFields) | 可用来在工作簿、列表和自动筛选上存储排序状态。只读 **[SortFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/obj)** 类型。 |
| [SortMethod](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sort/member/SortMethod) | 指定中文排序方法。可读/写 **[XlSortMethod](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortMethod)** 类型。 |