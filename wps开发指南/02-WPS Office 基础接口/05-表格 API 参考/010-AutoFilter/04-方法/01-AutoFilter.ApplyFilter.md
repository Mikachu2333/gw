# AutoFilter.ApplyFilter

应用指定的 **Autofilter** 对象。



## 语法

express.**ApplyFilter()**

express   一个代表 **AutoFilter** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例应用活动工作表的 AutoFilter 对象。*/
function test() {
    ActiveSheet.AutoFilter.ApplyFilter()
}
```


```JavaScript
/*本示例应用第一张工作表的 AutoFilter 对象。*/
function test() {
    Worksheets.Item(1).AutoFilter.ApplyFilter()
}
```
