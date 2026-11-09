# Characters.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Characters** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例将 A1 单元格的最后一个字符删除。*/
function test() {
    let n = Application.Worksheets.Item("Sheet1").Range("A1").Characters().Count
    Application.Worksheets.Item("Sheet1").Range("A1").Characters(n, 1).Delete()
}
```


```JavaScript
/*此示例将 B1 单元格的第一个字符删除。*/
function test() {
    ActiveSheet.Range("B1").Characters(1, 1).Delete()
}
```
