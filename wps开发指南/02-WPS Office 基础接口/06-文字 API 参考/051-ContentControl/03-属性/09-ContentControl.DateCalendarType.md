# ContentControl.DateCalendarType

返回或设置一个 **WdCalendarType** 常量，该常量表示日历内容控件的日历类型。可读写。



## 语法

express.**DateCalendarType**

express   一个代表 **ContentControl** 对象的变量。

## 类型

WdCalendarType

## 示例


```JavaScript
/*本示例显示活动文档中第二个（日历）内容控件的日历类型是否为wdCalendarHebrew。*/
function test() {
    alert(ActiveDocument.ContentControls.Item(2).DateCalendarType == wdCalendarHebrew)
}
```


```JavaScript
/*本示例设置所选内容中第二个（日历）内容控件的日历类型。*/
function test() {
    let control = Selection.ContentControls.Item(2)
    control.DateCalendarType = wdCalendarWestern
}
```
