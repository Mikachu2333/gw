# FormatConditions.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **FormatConditions** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动工作表上单元格区域 A1:A10 中所有条件格式。*/
function test() {
    ActiveSheet.Range("A1:A10").FormatConditions.Delete()
}
```


```JavaScript
/*本示例删除活动工作表上单元格区域 A1:A10 中所有条件格式，并显示删除前后的条件格式的数量。*/
function test() {
    let formatConditions = ActiveSheet.Range("A1:A10").FormatConditions
    alert(`删除前条件格式的数量：${formatConditions.Count}`)
    formatConditions.Delete()
    alert(`删除后条件格式的数量：${formatConditions.Count}`)
}
```
