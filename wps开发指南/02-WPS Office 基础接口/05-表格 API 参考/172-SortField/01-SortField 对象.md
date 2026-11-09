# SortField 对象

 **SortField** 对象包含 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 、 **Lists** 和 **AutoFilter** 对象的所有排序信息。

## 说明


开发人员可以使用 **BeforeSort** 事件重写 ET 的默认行为，将自己的排序算法写入应用程序中。


## 示例


```JavaScript
/*本示例遍历活动工作表的排序字段，将偶数位的排序字段设置为升序排序。*/
function test() {
    let sortfields = Application.ActiveSheet.Sort.SortFields
    for (let i = 1; i <= sortfields.Count; i++) {
        if (i % 2 == 0) {
            sortfields.Item(i).Order = xlDescending
        }
    }
}
```


```JavaScript
/*本示例在活动工作表新建排序字段，并显示该排序字段是否按字体颜色对数据进行升序排序。*/
function test() {
    let sortfield = Application.ActiveSheet.Sort.SortFields.Add(Range("A1:A3"), xlSortOnFontColor, xlAscending)
    if (sortfield.SortOn == xlSortOnFontColor && sortfield.Order == xlAscending) {
        alert("排序字段按字体颜色对数据进行升序排序")
    } else {
        alert("排序字段未按字体颜色和升序进行排序")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/Delete) | 从 **[SortFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/obj)** 集合中删除指定的 **SortField** 对象。 |
| [ModifyKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/ModifyKey) | 修改字段中按其排序的键值。 |
| [SetIcon](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/SetIcon) | 为 **SortField** 对象设置图标。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [CustomOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/CustomOrder) | 指定对字段进行排序的自定义次序。可读/写 **Variant** 类型。 |
| [DataOption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/DataOption) | 指定 **SortField** 对象所指定的区域中的文本排序方式。可读/写 [ **XlSortDataOption** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortDataOption)类型。 |
| [Key](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/Key) | 指定排序字段，该字段确定要排序的值。只读。 |
| [Order](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/Order) | 确定关键字所指定的值的排序次序。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/Parent) | 返回指定对象的父对象。只读。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/Priority) | 指定排序字段的优先级。可读/写。 |
| [SortOn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/SortOn) | 返回或设置要排序的单元格属性。可读/写 **[XlSortOn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortOn)** 类型。 |
| [SortOnValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/member/SortOnValue) | 返回指定 **SortField** 对象执行排序的值。只读。 |