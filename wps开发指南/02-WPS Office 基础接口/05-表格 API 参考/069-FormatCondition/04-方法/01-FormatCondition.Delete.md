# FormatCondition.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **FormatCondition** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除工作表 Sheet1 上区域 B1:B10 中第一个条件格式。*/
function test() {
    let formatCondition = Application.Worksheets.Item("Sheet1").Range("B1:B10").FormatConditions.Item(1)
    formatCondition.Delete()
}
```


```JavaScript
/*本示例判断如果活动工作表上区域 B1:B10 中第一个条件格式的类型为xlColorScale，则删除该条件格式。*/
function test() {
    let formatCondition = ActiveSheet.Range("B1:B10").FormatConditions.Item(1)
    if (formatCondition.Type == xlColorScale) {
        formatCondition.Delete()
    }
}
```
