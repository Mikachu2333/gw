# MailMergeDataSource.Type

返回邮件合并数据源的类型。只读 **[WdMailMergeDataSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdMailMergeDataSource)** 类型。



## 语法

express.**Type**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

WdMailMergeDataSource

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源的类型是否为wdMergeInfoFromWord。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    alert(dataSource.Type == wdMergeInfoFromWord)
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
