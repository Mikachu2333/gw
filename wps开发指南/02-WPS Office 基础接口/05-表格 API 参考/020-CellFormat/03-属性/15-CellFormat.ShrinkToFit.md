# CellFormat.ShrinkToFit

返回或设置一个 **Variant** 值。该值表示文本是否自动缩小以适应可用列宽



## 语法

express.**ShrinkToFit**

express   一个代表 **CellFormat** 对象的变量。

## 类型

any

## 说明


如果文本自动收缩以适应可用列宽，此属性将返回 **True** ；如果没有将指定区域中所有单元格的这一属性设为相同的值，则返回 **Null** 。



## 示例


```JavaScript
/*此示例显示查找条件中文本是否自动收缩以适应可用的列宽。*/
function test() {
    alert(Application.FindFormat.ShrinkToFit)
}
```


```JavaScript
/*此示例设置替换条件中文本为自动收缩以适应可用的列宽。*/
function test() {
    Application.ReplaceFormat.ShrinkToFit = true
}
```
