# ContentControl.DateDisplayFormat

返回或设置 **String** 值，该值表示日期的显示格式。可读/写。



## 语法

express.**DateDisplayFormat**

express   一个代表 **ContentControl** 对象的变量。

## 类型

string

## 说明


默认格式是在用户的系统上在 WPS 中指定的格式设置，通常取决于 Windows 中的位置设置。例如，英语（美国）的默认日期格式为“mm/dd/yyyy”。使用 **DateDisplayFormat** 属性可以指定另一种日期格式。



## 示例


```JavaScript
/*本示例将日期内容控件添加到活动文档中，并设置日期、日期显示格式和日期存储格式。*/
function test() {
    let control = Application.ActiveDocument.ContentControls.Add(wdContentControlDate)
    control.Title = "Review Period End Date"
    control.DateDisplayFormat = "MMMM d, yyyy"
    control.DateStorageFormat = wdContentControlDateStorageDate
    control.Range.Text = "January 1, 2007"
}
```


```JavaScript
/*本示例显示活动文档中第二个（日历）内容控件展示日期的格式。*/
function test() {
    alert(ActiveDocument.ContentControls.Item(2).DateDisplayFormat)
}
```
