# Range.ClearOutline

清除指定区域的分级显示。



## 语法

express.**ClearOutline()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例清除工作表 Sheet1 上单元格区域 A1:G37 的分级显示。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1:G37").ClearOutline()
}
```


```JavaScript
/*本示例清除 A1 单元格所在区域的分级显示，并重新创建分级显示*/
function test() {
    Range("A1").ClearOutline()
    alert("已清除分级显示，关闭弹框后重建分级显示。")
    Range("A1").AutoOutline()
}
```
