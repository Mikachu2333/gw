# Filter.On

如果打开指定的筛选，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**On**

express   一个代表 **Filter** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将变量设置为第一张工作表上的筛选区域中第一列的筛选的 Criteria1 属性值。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    if (worksheet.AutoFilterMode) {
        let filter = worksheet.AutoFilter.Filters.Item(1)
        if (filter.On) {
            let c1 = filter.Criteria1
        }
    }
}
```


```JavaScript
/*本示例显示活动工作表上筛选区域中第一列的筛选的 On 属性值。*/
function test() {
    alert(ActiveSheet.AutoFilter.Filters.Item(1).On)
}
```
