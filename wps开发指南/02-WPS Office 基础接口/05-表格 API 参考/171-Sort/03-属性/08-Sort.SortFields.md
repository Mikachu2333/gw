# Sort.SortFields

可用来在工作簿、列表和自动筛选上存储排序状态。只读 **[SortFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/obj)** 类型。



## 语法

express.**SortFields**

express   一个代表 **Sort** 对象的变量。

## 类型

SortFields

## 示例


```JavaScript
/*本示例在活动工作表创建新的排序字段。*/
function test() {
    Application.ActiveSheet.Sort.SortFields.Add(Range("B1:B10"))
}
```


```JavaScript
/*本示例在第一张工作表添加两个排序字段，并显示排序字段集合的数量。*/
function test() {
    let sortfields = Application.Sheets.Item(1).Sort.SortFields
    sortfields.Add(Range("A1:A5"))
    sortfields.Add(Range("B1:B5"))
    alert(sortfields.Count)
}
```
