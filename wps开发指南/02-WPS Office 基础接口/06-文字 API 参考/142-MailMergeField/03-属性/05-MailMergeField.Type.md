# MailMergeField.Type

返回域的类型。只读 **[WdFieldType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFieldType)** 类型。



## 语法

express.**Type**

express   一个代表 **MailMergeField** 对象的变量。

## 类型

WdFieldType

## 示例


```JavaScript
/*本示例显示活动文档上第一个域的类型是否为邮件合并域。*/
function test() {
    let field = ActiveDocument.MailMerge.Fields.Item(1)
    alert(field.Type == wdFieldMergeField)
}
```


```JavaScript
/*本示例判断如果第一个文档上第二个域为邮件合并域，则通知用户。*/
function test() {
    let field = Application.Documents.Item(1).MailMerge.Fields.Item(2)
    if (field.Type == wdFieldMergeField) {
        alert("域为邮件合并域")
    }
}
```
