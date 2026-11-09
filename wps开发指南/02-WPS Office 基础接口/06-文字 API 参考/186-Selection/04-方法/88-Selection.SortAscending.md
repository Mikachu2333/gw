# Selection.SortAscending

按字母数字升序对段落或表格行进行排序。



## 语法

express.**SortAscending()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


此方法提供针对包含数据列的邮件合并数据源进行排序的一种简化形式。对于大多数排序任务，请使用 **[Sort](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Sort)** 方法。



## 示例


```JavaScript
/*本示例按照字母数字升序对所选段落进行排序。*/
function test() {
    Application.Selection.SortAscending()
}
```


```JavaScript
/*本示例按照字母数字升序对活动文档第一个表格行进行排序。*/
function test() {
    ActiveDocument.Tables.Item(1).Select()
    Selection.SortAscending()
}
```
