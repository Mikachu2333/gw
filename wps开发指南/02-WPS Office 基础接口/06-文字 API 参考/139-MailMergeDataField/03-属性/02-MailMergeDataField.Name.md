# MailMergeDataField.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **MailMergeDataField** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将所选内容的文本替换为附加到活动文档的邮件合并数据源中最后一个域的名称。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.DataFields
    Selection.Range.Text = dataFields.Item(dataFields.Count).Name
}
```


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中每个域的名称。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.DataFields
    for (let i = 1; i <= dataFields.Count; i++) {
        alert(dataFields.Item(i).Name)
    }
}
```
