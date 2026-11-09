# SortFields.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **SortFields** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表排序字段集合的数量。*/
function test() {
    alert(Application.ActiveSheet.Sort.SortFields.Count)
}
```


```JavaScript
/*本示例在工作表Sheet1添加两个排序字段，并显示排序字段集合的数量。*/
function test() {
    let sort = Application.Sheets.Item("Sheet1").Sort.SortFields
    sort.Add(Range("A1:D1"))
    sort.Add(Range("A2:D2"))
    alert(sort.Count)
}
```
