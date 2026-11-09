# MailMerge.State

返回邮件合并操作的当前状态。 **WdMailMergeState** 类型，只读。



## 语法

express.**State**

express   一个代表 **MailMerge** 对象的变量。

## 类型

WdMailMergeState

## 示例


```JavaScript
/*本示例判断如果活动文档是一个带有附加数据源的主文档，则执行邮件合并。*/
function test() {
    let mailMerge = ActiveDocument.MailMerge
    if (mailMerge.State == wdMainAndDataSource) {
        mailMerge.Execute()
    }
}
```


```JavaScript
/*本示例遍历当前打开的所有文档，判断如果文档是带附加域名源的主文档，则通知用户。*/
function test() {
    for (let i = 1; i <= Application.Documents.Count; i++) {
        let state = Application.Documents.Item(i).MailMerge.State
        if (state == wdMainAndHeader) {
            alert(`第${i}个文档是带附加域名源的主文档。`)
        }
    }
}
```
