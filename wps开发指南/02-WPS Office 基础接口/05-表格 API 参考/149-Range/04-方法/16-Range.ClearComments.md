# Range.ClearComments

清除指定区域的所有单元格批注。



## 语法

express.**ClearComments()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除 E5 单元格的所有批注。*/
function test() {
    Application.Worksheets.Item(1).Range("E5").ClearComments()
}
```


```JavaScript
/*本示例设置 A1 单元格的批注为 a1，A2 单元格的批注为 a2，再清除 A1 单元格的批注*/
function test() {
    Range("A1").AddComment("a1")
    Range("A2").AddComment("a2")
    Range("A1").ClearComments()
}
```
