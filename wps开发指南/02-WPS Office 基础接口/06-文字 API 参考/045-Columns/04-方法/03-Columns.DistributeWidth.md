# Columns.DistributeWidth

将指定列调整为等宽。



## 语法

express.**DistributeWidth()**

express   一个代表 **Columns** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中第一个表格的各列调整为等宽。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.DistributeWidth()
}
```


```JavaScript
/*本示例将第一个窗口上所选内容中表格的列调整为等宽。*/
function test() {
    Windows.Item(1).Selection.Columns.DistributeWidth()
}
```
