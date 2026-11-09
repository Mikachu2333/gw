# MailMergeDataSource.HeaderSourceName

返回附加到指定的邮件合并主文档的域名源的路径和文件名。 **String** 类型，只读。



## 语法

express.**HeaderSourceName**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例判断如果附加到活动文档的域名源的路径和文件名称不为空字符串，则显示该域名源的路径和文件名称。*/
function test() {
    let sourceName = ActiveDocument.MailMerge.DataSource.HeaderSourceName
    if (sourceName !== "") {
        alert(sourceName)
    }
}
```


```JavaScript
/*本示例判断如果附加到活动文档的域名源为wdMergeInfoFromWord，则打开该文档。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    if (dataSource.HeaderSourceType == wdMergeInfoFromWord) {
        Documents.Open(dataSource.HeaderSourceName)
    }
}
```
