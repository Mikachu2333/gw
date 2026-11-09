# SortFields.Clear

清除所有 **SortField** 对象。



## 语法

express.**Clear()**

express   一个代表 **SortFields** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除活动工作表上所有 SortField 对象。*/
function test() {
    Application.ActiveSheet.Sort.SortFields.Clear()
}
```


```JavaScript
/*本示例清除活动工作簿上每一张工作表上所有 SortField 对象。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        Application.Sheets.Item(i).Sort.SortFields.Clear()
    }
}
```
