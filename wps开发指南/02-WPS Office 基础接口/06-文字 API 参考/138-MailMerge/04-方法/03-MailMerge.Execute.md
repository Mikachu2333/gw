# MailMerge.Execute

执行指定的邮件合并操作。



## 语法

express.**Execute(Pause)**

express   一个代表 **MailMerge** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Pause | 可选 | any | 如果该属性值为 **True** ，则会在找到一个邮件合并错误时，暂停 WPS 的运行并显示一个疑难解答对话框；如果该属性值为 **False** ，则会报告新文档中的错误。 |

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果活动文档是一个带有附加数据源的主文档，则执行邮件合并。*/
function test() {
    if (ActiveDocument.MailMerge.State == wdMainAndDataSource) {
        ActiveDocument.MailMerge.Execute()
    }
}
```


```JavaScript
/*本示例将第一个文档上邮件合并执行合并。*/
function test() {
    Documents.Item(1).MailMerge.Execute(false)
}
```
