# AutoFilter.ShowAllData

显示 **AutoFilter** 对象返回的所有数据。



## 语法

express.**ShowAllData()**

express   一个代表 **AutoFilter** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例展示活动工作表 AutoFilter 对象返回的所有数据。*/
function test() {
    ActiveSheet.AutoFilter.ShowAllData()
}
```


```JavaScript
/*本示判断如果第一张工作表的筛选模式为自动筛选，则显示所有数据，即清除所有筛选条件。*/
function test() {
    if (Worksheets.Item(1).AutoFilter.FilterMode) {
        Worksheets.Item(1).AutoFilter.ShowAllData()
    }
}
```
