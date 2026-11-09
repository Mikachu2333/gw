# SortField.Delete

从 **[SortFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/obj)** 集合中删除指定的 **SortField** 对象。



## 语法

express.**Delete()**

express   一个代表 **SortField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例在活动工作表创建两个新的排序字段，并删除活动工作表第二个SortField对象。*/
function test() {
    let sort = Application.Sheets.Item(1).Sort.SortFields
    sort.Add(Range("A1:A5"), xlSortOnValues, xlAscending)
    sort.Add(Range("B1:B5"), xlSortOnValues, xlAscending)
    sort.Item(2).Delete()
}
```


```JavaScript
/*本示例判断如果第一张工作表SortFields集合中的SortField对象数目大于1，则删除第一个SortField对象。*/
function test() {
    let sort = Application.Sheets.Item(1).Sort.SortFields
    if (sort.Count > 1) {
        sort.Item(1).Delete()
    }
}
```
