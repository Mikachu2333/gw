# Shape.LayoutInCell

返回一个 **Long** 类型的值，该值表示表格中的形状显示在表格内部还是表格外部。



## 语法

express.**LayoutInCell**

express   一个代表 **Shape** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果该属性为 **msoTrue** ，则表示指定的图片显示在表格内部；如果该属性为 **msoFalse** ，则表示指定的图片显示在表格外部。

 **LayoutInCell** 属性对应于图片格式的 **“高级版式”** 对话框中的 **“表格单元格中的版式”** 选项。

仅当 **WrapFormat** 对象的 **Type** 属性设置为除 **wdWrapTypeInline** 或 **wdWrapTypeNone** 之外的值时，对 **LayoutInCell** 属性的设置才会生效。



## 示例


```JavaScript
/*本示例对活动文档中的第一个形状禁用“表格单元格中的版式”选项。本示例假设指定的形状在表格内并且不是嵌入形状。*/
function test() {
    ActiveDocument.Shapes.Item(1).LayoutInCell = msoFalse
}
```


```JavaScript
/*本示例显示第一个文档中第一个形状是否展示在表格内部。*/
function test() {
    alert(Documents.Item(1).Shapes.Item(1).LayoutInCell === msoTrue)
}
```
