# MailMergeDataSource.HeaderSourceType

返回一个值，该值表明为邮件合并操作提供域名源的方式。 **WdMailMergeDataSource** 类型，只读。



## 语法

express.**HeaderSourceType**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

WdMailMergeDataSource

## 示例


```JavaScript
/*本示例判断如果附加到活动文档的域名源为wdMergeInfoFromWord，则打开该文档。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    if (dataSource.HeaderSourceType == wdMergeInfoFromWord) {
        Documents.Open(dataSource.HeaderSourceName)
    }
}
```


```JavaScript
/*本示例显示为第一个文档的邮件合并操作提供域名源的方式是否为wdMergeInfoFromODBC。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    alert(dataSource.HeaderSourceType == wdMergeInfoFromODBC)
}
```
