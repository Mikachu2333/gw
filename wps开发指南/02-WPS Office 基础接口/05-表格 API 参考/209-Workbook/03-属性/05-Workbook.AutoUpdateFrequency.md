# Workbook.AutoUpdateFrequency

以分钟为单位返回或设置对共享工作簿进行自动更新的时间间隔。 **Long** 类型，可读写。



## 语法

express.**AutoUpdateFrequency**

express   一个代表 **Workbook** 对象的变量。

## 类型

number（int4 精度）

## 说明


必须将 **AutoUpdateFrequency** 属性设置为从 5 至 1440 的值，才能使该属性起作用。
必须启用工作簿共享，否则可能会看到以下错误：对象 "\_Workbook" 的方法 "AutoUpdateFrequency" 失败。



## 示例


```JavaScript
/*本示例演示如果是共享工作簿则设置每五分钟自动更新一次。*/
function test() {
    if (ActiveWorkbook.MultiUserEditing) {
        ActiveWorkbook.AutoUpdateFrequency = 5
    }
}
```


```JavaScript
/*本示例演示将活动工作簿另存为共享工作簿，并设置每十分钟自动更新一次。*/
function test() {
    ActiveWorkbook.SaveAs(ActiveWorkbook.FullName, undefined, undefined, undefined, undefined, undefined, xlShared)
    ActiveWorkbook.AutoUpdateFrequency = 10
}
```
