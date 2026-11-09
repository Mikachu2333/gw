# MailMergeDataField.Value

返回当前记录的邮件合并数据域或映射数据域的内容。 **String** 类型，只读。



## 语法

express.**Value**

express   一个代表 **MailMergeDataField** 对象的变量。

## 类型

string

## 说明


使用 **[ActiveRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/ActiveRecord)** 属性可设置邮件合并数据源中的活动记录。



## 示例


```JavaScript
/*本示例显示附加到“example.docx”的数据源中活动记录的内容。*/
function test() {
    let str = ""
    let dataFields = Documents.Item("example.docx").MailMerge.DataSource.DataFields
    for (let i = 1; i <= dataFields.Count; i++) {
        if (dataFields.Item(i).Value !== "") {
            str = str + dataFields.Item(i).Value + "\n"
        }
    }
    alert(str)
}
```


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中第一个域的名称和内容。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.DataFields
    alert(`域的名称：${dataFields.Item(1).Name}\n域的内容：${dataFields.Item(1).Value}`)
}
```
