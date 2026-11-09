# Databar.Delete

删除指定的条件格式规则对象。



## 语法

express.**Delete()**

express   一个代表 **Databar** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除工作表 Sheet1 上区域 A1:A10 中第一个为数据条的条件格式。*/
function test() {
    let databar = Application.Worksheets.Item("Sheet1").Range("A1:A10").FormatConditions.Item(1)
    databar.Delete()
}
```


```JavaScript
/*本示例判断如果活动工作表上区域 A1:A10 中第一个为数据条的条件格式的填充色为纯色，则删除该数据条。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    if (databar.BarFillType == xlDataBarFillSolid) {
        databar.Delete()
    }
}
```
