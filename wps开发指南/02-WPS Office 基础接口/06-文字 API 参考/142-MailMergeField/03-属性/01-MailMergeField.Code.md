# MailMergeField.Code

返回一个代表域代码的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。可读写。



## 语法

express.**Code**

express   一个代表 **MailMergeField** 对象的变量。

## 类型

Range

## 说明


域代码包括用域字符 ( **{ }** ) 括起来的所有内容，包括开头和结尾处的空格。无需更改域结果的显示方式即可访问域代码。



## 示例


```JavaScript
/*本示例显示活动文档中每一个邮件合并域的域代码。*/
function test() {
    let fields = ActiveDocument.MailMerge.Fields
    for (let i = 1; i <= fields.Count; i++) {
        alert(`\"${fields.Item(i).Code.Text}\"`)
    }
}
```


```JavaScript
/*本示例将活动文档中第一个邮件合并域的域代码改为“CREATEDATE”。*/
function test() {
    let field = ActiveDocument.MailMerge.Fields.Item(1)
    field.Code.Text = "MERGEFIELD CREATEDATE"
    ActiveDocument.Fields.Item(1).Update()
}
```


```JavaScript
/*本示例判断如果活动文档中包含一个名为“Title”的邮件合并域，则通知用户。*/
function test() {
    let fields = ActiveDocument.MailMerge.Fields
    for (let i = 1; i <= fields.Count; i++) {
        if (fields.Item(i).Code.Text.includes("Title", 0)) {
            alert('A Title merge field is in this document')
        }
    }
}
```
