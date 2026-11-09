# Table.BottomPadding

返回或设置在表格中单独的单元格或所有单元格内容的下方添加的间距（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**BottomPadding**

express   一个代表 **Table** 对象的变量。

## 类型

number（float 精度）

## 说明


单独单元格的 **BottomPadding** 属性的设置值会覆盖整个表格的 **BottomPadding** 属性的设置值。



## 示例


```JavaScript
/*本示例将活动文档中第一个表格的底边距设为 40 像素。*/
function test() {
    ActiveDocument.Tables.Item(1).BottomPadding = PixelsToPoints(40, true)
}
```


```JavaScript
/*本示例显示选中的第一个表格的底边距。*/
function test() {
    alert(Selection.Tables.Item(1).BottomPadding + "磅")
}
```
