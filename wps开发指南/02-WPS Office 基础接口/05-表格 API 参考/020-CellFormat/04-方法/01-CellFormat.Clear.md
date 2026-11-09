# CellFormat.Clear

清除 **FindFormat** 和 **ReplaceFormat** 属性中的条件集。



## 语法

express.**Clear()**

express   一个代表 **CellFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除 FindFormat 中设置的条件。*/
function test() {
    Application.FindFormat.Clear()
}
```


```JavaScript
/*本示例清除 ReplaceFormat 中设置的条件。*/
function test() {
    Application.ReplaceFormat.Clear()
}
```
