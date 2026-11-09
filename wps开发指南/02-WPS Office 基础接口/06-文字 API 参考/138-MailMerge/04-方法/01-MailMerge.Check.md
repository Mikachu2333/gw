# MailMerge.Check

模拟邮件合并操作，在出错时停止合并操作并报告每个错误。



## 语法

express.**Check()**

express   一个代表 **MailMerge** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例检查活动文档是否有邮件合并错误。*/
function test() {
    let state = ActiveDocument.MailMerge.State
    if (state == wdMainAndDataSource || state == wdMainAndSourceAndHeader) {
        ActiveDocument.MailMerge.Check()
    }
}
```


```JavaScript
/*本示例模拟第一个文档上邮件合并操作，每次出现错误时暂停报告。*/
function test() {
    Documents.Item(1).MailMerge.Check()
}
```
