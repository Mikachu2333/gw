# AutoFilter.FilterMode

如果工作表的筛选模式为自动筛选，则返回 **True** 。只读 **Boolean** 类型。



## 语法

express.**FilterMode**

express   一个代表 **AutoFilter** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表的筛选模式是否为自动筛选。*/
function test() {
    alert(ActiveSheet.AutoFilter.FilterMode)
}
```


```JavaScript
/*本示判断第一张工作表的筛选模式是否为自动筛选，并通知用户。*/
function test() {
    if (Worksheets.Item(1).AutoFilter.FilterMode) {
        alert("工作表的筛选模式是自动筛选")
    } else {
        alert("工作表的筛选模式不是自动筛选")
    }
}
```
