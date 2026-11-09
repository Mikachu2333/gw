# Sheets.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Sheets** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例删除活动工作簿中名称为“Sheet1”和“Sheet2”工作表。*/
function test() {
    let names = ["Sheet1", "Sheet2"]
    Application.ActiveWorkbook.Sheets.Item(names).Delete()
}
```


```JavaScript
/*此示例删除索引为2和3的工作表。*/
function test() {
    Sheets.Item([2, 3]).Delete()
}
```
