# Range.ApplyOutlineStyles

对指定区域应用分级显示样式。



## 语法

express.**ApplyOutlineStyles()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*下例对选定区域应用自动分级显示样式。该选定区域必须包括工作表上的整个分级显示区域。*/
function test() {
    Selection.ApplyOutlineStyles()
}
```


```JavaScript
/*本示例将 A1:C20 单元格区域应用分级显示样式*/
function test() {
    Range("A1:C20").ApplyOutlineStyles()
}
```
