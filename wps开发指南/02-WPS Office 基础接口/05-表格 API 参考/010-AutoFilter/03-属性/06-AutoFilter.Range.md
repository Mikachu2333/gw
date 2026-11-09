# AutoFilter.Range

返回一个 **Range** 对象，它代表应用指定的“自动筛选”的区域。



## 语法

express.**Range**

express   一个代表 **AutoFilter** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*下例将应用第一张工作表的“自动筛选”的地址保存在变量中。*/
function test() {
    let address = Application.Worksheets.Item(1).AutoFilter.Range.Address()
}
```


```JavaScript
/*此示例滚动工作簿窗口，直至自动筛选应用到的区域位于活动窗口的左上角。*/
function test() {
    Workbooks.Item(1).Activate()
    let range = ActiveSheet.AutoFilter.Range
    Application.ActiveWindow.ScrollRow = range.Row
    Application.ActiveWindow.ScrollColumn = range.Column
}
```
