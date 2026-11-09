# Range.ShrinkToFit

返回或设置一个 **Variant** 值。



## 语法

express.**ShrinkToFit**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


如果文本自动收缩以适应可用列宽，此属性将返回 **True** ；如果没有将指定区域中所有单元格的这一属性设为相同的值，则返回 **Null** 。



## 示例


```JavaScript
/*此示例使第一行中的文本自动收缩为适当尺寸以适应可用列宽。*/
function test() {
    Rows.Item(1).ShrinkToFit = true
}
```


```JavaScript
/*本示例显示 A1:B3 单元格区域的文本是否自动收缩，然后将 A1 单元格设置文本自动收缩，再显示*/
function test() {
    let range = Range("A1:B3")
    alert(range.ShrinkToFit) // false
    Range("A1").ShrinkToFit = true
    alert(range.ShrinkToFit) // null
}
```
