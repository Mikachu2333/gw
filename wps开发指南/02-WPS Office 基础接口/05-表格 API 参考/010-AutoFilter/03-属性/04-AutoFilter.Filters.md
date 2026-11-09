# AutoFilter.Filters

返回一个 **Filters** 集合，该集合表示自动筛选区域中的所有筛选器。只读。



## 语法

express.**Filters**

express   一个代表 **AutoFilter** 对象的变量。

## 类型

Filters

## 示例


```JavaScript
/*本示例将变量设置为第一张工作表上的筛选区域中第一列的筛选的 Criteria1 属性值。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    if (worksheet.AutoFilterMode) {
        if (worksheet.AutoFilter.Filters.Item(1).On) {
            let c1 = worksheet.AutoFilter.Filters.Item(1).Criteria1
        }
    }
}
```


```JavaScript
/*本示例显示活动工作表上自动筛选中应用的筛选器数量。*/
function test() {
    alert(ActiveSheet.AutoFilter.Filters.Count)
}
```
