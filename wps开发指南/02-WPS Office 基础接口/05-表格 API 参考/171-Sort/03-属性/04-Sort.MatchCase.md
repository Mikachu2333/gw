# Sort.MatchCase

如果设置为 **True** ，则执行区分大小写的排序，如果设置为 **False** ，则执行不区分大小写的排序。可读/写。



## 语法

express.**MatchCase**

express   一个代表 **Sort** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表排序时是否区分大小写。*/
function test() {
    alert(Application.ActiveSheet.Sort.MatchCase)
}
```


```JavaScript
/*本示例设置第一张工作表排序区分大小写，并通知用户。*/
function test() {
    Application.Sheets.Item(1).Sort.MatchCase = true
    alert("执行排序区分大小写")
}
```
