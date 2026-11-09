# MailMergeDataFields.Item

返回集合中的单个 **MailMergeDataField** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **MailMergeDataFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

MailMergeDataField

## 示例


```JavaScript
/*本示例将所选内容的文本替换为附加到活动文档的邮件合并数据源中最后一个域的名称。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.DataFields
    Selection.Range.Text = dataFields.Item(dataFields.Count).Name
}
```


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中第一个域的名称和内容。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.DataFields
    alert(`域的名称：${dataFields.Item(1).Name}\n域的内容：${dataFields.Item(1).Value}`)
}
```
