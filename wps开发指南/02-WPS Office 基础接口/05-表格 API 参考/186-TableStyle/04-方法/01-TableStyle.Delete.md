# TableStyle.Delete

删除 **TableStyle** 对象。



## 语法

express.**Delete()**

express   一个代表 **TableStyle** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动工作簿上的表格样式中的最后一个样式。*/
function test() {
    let tableStyles = ActiveWorkbook.TableStyles
    tableStyles.Item(tableStyles.Count).Delete()
}
```


```JavaScript
/*本示例删除第一张工作簿中指定索引的表格样式。*/
function test() {
    Workbooks.Item(1).TableStyles.Item(285).Delete()
}
```
