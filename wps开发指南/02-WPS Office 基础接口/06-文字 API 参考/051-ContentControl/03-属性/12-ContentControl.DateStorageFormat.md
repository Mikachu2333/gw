# ContentControl.DateStorageFormat

返回或设置 **WdContentControlDateStorageFormat** 值，该值表示在将日期内容控件绑定到活动文档的 XML 数据存储时的日期存储和检索格式。可读/写。



## 语法

express.**DateStorageFormat**

express   一个代表 **ContentControl** 对象的变量。

## 类型

WdContentControlDateStorageFormat

## 说明


 **DateStorageFormat** 属性用于以日期格式、日期/时间格式或文本格式存储日期。



## 示例


```JavaScript
/*本示例将日期内容控件添加到活动文档中，并指定日期、日期显示格式和日期存储格式。*/
function test() {
    let control = Application.ActiveDocument.ContentControls.Add(wdContentControlDate)
    control.Title = "Review Period End Date"
    control.DateDisplayFormat = "MMMM d, yyyy"
    control.DateStorageFormat = wdContentControlDateStorageDate
    control.Range.Text = "January 1, 2007"
}
```


```JavaScript
/*本示例显示所选内容中第二个（日历）内容控件的 DateStorageFormat 属性值是否为wdContentControlDateStorageDateTime。*/
function test() {
    let control = Selection.ContentControls.Item(2)
    alert(control.DateStorageFormat == wdContentControlDateStorageDateTime)
}
```
