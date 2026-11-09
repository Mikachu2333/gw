# SortField.Key

指定排序字段，该字段确定要排序的值。只读。



## 语法

express.**Key**

express   一个代表 **SortField** 对象的变量。

## 类型

Range

## 说明


关键字可以是区域名称（字符串）或 **Range** 对象。



## 示例


```JavaScript
/*本示例在第一张工作表创建新的排序字段，并显示第一张工作表排序字段的键值地址。*/
function test() {
    Application.Sheets.Item(1).Sort.SortFields.Add(Range("A1:A20"), xlSortOnValues)
    alert(Application.Sheets.Item(1).Sort.SortFields.Item(1).Key.Address())
}
```


```JavaScript
/*本示例在活动工作表创建两个新的排序字段，并显示所有排序字段的键值地址。*/
function test() {
    let sort = Application.ActiveSheet.Sort.SortFields
    sort.Add(Range("A1:A20"))
    sort.Add(Range("B1"), xlSortOnValues)
    for (let i = 1; i <= sort.Count; i++) {
        alert(sort.Item(i).Key.Address())
    }
}
```
