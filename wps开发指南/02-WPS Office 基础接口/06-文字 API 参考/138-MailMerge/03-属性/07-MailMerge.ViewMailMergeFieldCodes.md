# MailMerge.ViewMailMergeFieldCodes

如果在邮件合并主文档中显示合并域的名称，则为 **msoCTrue** 。如果显示当前记录的信息，则为 **msoFalse** 。 **Long** 类型，可读写。



## 语法

express.**ViewMailMergeFieldCodes**

express   一个代表 **MailMerge** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果活动文档不是邮件合并主文档，则该属性会出错。要查看合并域的名称或其结果，可将 **[ShowFieldCodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowFieldCodes)** 属性设为 **False** 。



## 示例


```JavaScript
/*本示例显示第一个文档中的邮件合并域。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = false
    let document = Documents.Item(1)
    document.Activate()
    document.MailMerge.ViewMailMergeFieldCodes = msoCTrue
}
```


```JavaScript
/*本示判断如果活动文档的邮件合并操作的当前状态为wdMainAndSourceAndHeader或wdMainAndDataSource，则不显示合并域的名称。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = false
    let mailMerge = ActiveDocument.MailMerge
    if (mailMerge.State == wdMainAndSourceAndHeader || mailMerge.State == wdMainAndDataSource) {
        mailMerge.ViewMailMergeFieldCodes = msoFalse
    }
}
```
