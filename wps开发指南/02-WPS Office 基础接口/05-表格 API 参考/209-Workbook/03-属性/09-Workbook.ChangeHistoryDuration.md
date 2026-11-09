# Workbook.ChangeHistoryDuration

返回或者设置共享工作簿的修订记录中所要显示修订信息的天数。 **Long** 类型，可读写。



## 语法

express.**ChangeHistoryDuration**

express   一个代表 **Workbook** 对象的变量。

## 类型

number（int4 精度）

## 说明


关闭工作簿时，将删除修订记录中任何比该属性设置日期早的修订。



## 示例


```JavaScript
/*本示例用于设置追踪天数：当共享工作簿修订记录功能处于打开状态时，为活动工作簿的修订记录功能设置跟踪天数。关闭工作簿时，将删除修订记录中任何比该属性设置日期早的修订。*/
function test() {
    if (ActiveWorkbook.MultiUserEditing && ActiveWorkbook.KeepChangeHistory) {
        ActiveWorkbook.ChangeHistoryDuration = 7
    }
}
```


```JavaScript
/*本示例演示将活动工作簿另存为共享工作簿，当工作簿修订记录功能处于打开状态时，为活动工作簿的修订记录功能设置跟踪天数为五天。*/
function test() {
    ActiveWorkbook.SaveAs(ActiveWorkbook.FullName, undefined, undefined, undefined, undefined, undefined, xlShared)
    if (ActiveWorkbook.KeepChangeHistory) {
        ActiveWorkbook.ChangeHistoryDuration = 5
    }
}
```
