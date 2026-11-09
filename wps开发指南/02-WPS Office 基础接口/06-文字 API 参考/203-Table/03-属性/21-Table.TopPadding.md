# Table.TopPadding

返回或设置表格中所有单元格的内容上方要增加的间距（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**TopPadding**

express   一个代表 **Table** 对象的变量。

## 类型

number（float 精度）

## 说明


单个单元格的 **TopPadding** 属性设置将覆盖整个表格的 **TopPadding** 属性设置。



## 示例


```JavaScript
/*本示例将活动文档中第一个表格的上边距设置为 40 像素。*/
function test() {
    ActiveDocument.Tables.Item(1).TopPadding = PixelsToPoints(40, true)
}
```


```JavaScript
/*本示例显示选中的第一个表格的上边距。*/
function test() {
    alert(Selection.Tables.Item(1).TopPadding + "磅")
}
```
