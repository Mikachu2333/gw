# Style.Delete

删除对象样式。



## 语法

express.**Delete()**

express   一个代表 **Style** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例将B1单元格的样式删除。*/
function test() {
    Range("B1").Style.Delete()
}
```


```JavaScript
/*如果工作表 Sheet1 中的单元格 C1 当前应用的是“百分比”样式，则删除样式。*/
function test() {
    if (Worksheets.Item("Sheet1").Range("C1").Style == "Percent") {
        Worksheets.Item("Sheet1").Range("C1").Style.Delete()
    }
}
```
