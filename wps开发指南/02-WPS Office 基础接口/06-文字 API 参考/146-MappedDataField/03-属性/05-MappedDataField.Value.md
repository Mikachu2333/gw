# MappedDataField.Value

返回当前记录的邮件合并数据域或映射数据域的内容。 **String** 类型，只读。



## 语法

express.**Value**

express   一个代表 **MappedDataField** 对象的变量。

## 类型

string

## 说明


使用 **ActiveRecord** 属性可设置邮件合并数据源中的活动记录。



## 示例


```JavaScript
/*本示例显示附加到“example.docx”的数据源中活动记录的内容。*/
function test() {
    let dataFields = Documents.Item("example.docx").MailMerge.DataSource.MappedDataFields
    let str = ""
    for (let i = 1; i <= dataFields.Count; i++) {
        if (dataFields.Item(i).Value !== "") {
            str = str + dataFields.Item(i).Value + "\n"
        }
    }
    alert(str)
}
```


```JavaScript
/*本示例显示WPS包含的 wdFirstName 映射数据字段的内容。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    alert(dataSource.MappedDataFields.Item(wdFirstName).Value)
}
```
