# Range.Height

返回一个 Double 值，该值代表区域的高度（以磅为单位）。此为只读属性。
若要设置高度，请使用 RowHeight 属性。



## 语法

express.**Height**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例使用 RowHeight 设置 A1 单元格的行高为 15，并显示 A1 单元格的行高*/
function test() {
    Range("A1").RowHeight = 15
    alert(Range("A1").Height)
}
```


```JavaScript
/*本示例显示 A1 单元格 Height 的数据类型*/
function test() {
    alert(typeof Range("A1").Height)
}
```
