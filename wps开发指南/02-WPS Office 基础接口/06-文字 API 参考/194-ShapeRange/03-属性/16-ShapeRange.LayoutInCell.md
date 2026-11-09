# ShapeRange.LayoutInCell

返回一个 **Long** 类型的值，该值代表表格中的形状是显示在表格内部还是表格外部。



## 语法

express.**LayoutInCell**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **LayoutInCell** 属性对应于图片格式的 **“高级版式”** 对话框中的 **“表格单元格中的版式”** 选项。如果为 **msoTrue** ，则表示指定的图片显示在表格内部。如果为 **msoFalse** ，则表示指定的图片显示在表格外部。

仅当 **WrapFormat** 对象的 **Type** 属性设置为除 **wdWrapTypeInline** 或 **wdWrapTypeNone** 之外的值时，对 **LayoutInCell** 属性的设置才会生效。



## 示例


```JavaScript
/*本示例设置活动文档上第一个和第二个形状显示在表格的外部。*/
function test() {
    ActiveDocument.Shapes.Range([1, 2]).LayoutInCell = msoFalse
}
```


```JavaScript
/*本示例显示选中的形状是否展示在表格内部。*/
function test() {
    alert(Selection.ShapeRange.LayoutInCell == msoTrue)
}
```
