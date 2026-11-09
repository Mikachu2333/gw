# MailMergeDataSource.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源的名称。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    alert(dataSource.Name)
}
```


```JavaScript
/*本示例判断如果附加到第一个文档的邮件合并数据源的类型为wdMergeInfoFromODBC，则显示该数据源的名称。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    if (dataSource.Type == wdMergeInfoFromODBC) {
        alert(dataSource.Name)
    }
}
```
