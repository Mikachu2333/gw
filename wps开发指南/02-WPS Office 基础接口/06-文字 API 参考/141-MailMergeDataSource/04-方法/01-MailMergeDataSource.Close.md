# MailMergeDataSource.Close

关闭指定的邮件合并数据源。



## 语法

express.**Close()**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例关闭附加到活动文档的邮件合并数据源。*/
function test() {
    ActiveDocument.MailMerge.DataSource.Close()
}
```


```JavaScript
/*本示例判断如果附加到第一个文档的邮件合并数据源的类型为wdMergeInfoFromODBC，则关闭该数据源。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    if (dataSource.Type == wdMergeInfoFromODBC) {
        dataSource.Close()
    }
}
```
