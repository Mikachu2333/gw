# Filter.Criteria2

返回已筛选区域中指定列的第二个筛选值。 **Variant** 类型，只读。



## 语法

express.**Criteria2**

express   一个代表 **Filter** 对象的变量。

## 类型

any

## 说明


使用筛选的 **Criteria2** 属性时，如果该筛选没有使用两个条件，则将出现错误。在试图使用 **Criteria2** 属性之前，需保证 **Filter** 对象的 **Operator** 属性不为零 (0)。



## 示例


```JavaScript
/*本示例将一个变量设置为 Criteria2 属性值。该属性是第一张工作表上已筛选区域中的第一列筛选的。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    let c2 = null
    if (worksheet.AutoFilterMode) {
        let filter = worksheet.AutoFilter.Filters.Item(1)
        if (filter.On && filter.Operator) {
            c2 = filter.Criteria2
        } else {
            c2 = "Not set"
        }
    }
}
```


```JavaScript
/*本示例显示活动工作表上筛选区域中第一列的第二个筛选值。*/
function test() {
    alert(ActiveSheet.AutoFilter.Filters.Item(1).Criteria2)
}
```
