# WrapFormat.AllowOverlap

返回或设置一个值，该值指定是否允许给定图形与其他图形重叠。 **Long** 类型，可读写。



## 语法

express.**AllowOverlap**

express   一个代表 **WrapFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性可设置为 **msoCTrue** 或 **msoFalse** 。因为 HTML 不支持表格或图形的重叠，所以在 Web 版式视图中将忽略 **AllowOverlap** 。



## 示例


```JavaScript
/*本示例指定活动文档中的第一个图形可与其他图形重叠。*/
function test() {
    ActiveDocument.Shapes.Item(1).WrapFormat.AllowOverlap = msoCTrue
}
```


```JavaScript
/*本示例设置选中的一组形状不可与其他图形重叠。*/
function test() {
    Selection.ShapeRange.WrapFormat.AllowOverlap = msoFalse
}
```
