# Row.Height

返回或设置指定对象的高度（以磅为单位）。可读/写。



## 语法

express.**Height**

express   一个代表 **Row** 对象的变量。

## 类型

number（float 精度）

## 说明


一个 **Shape** 对象的 **Height** 属性返回或设置指定形状向前的表面的高度。该尺寸不包括阴影或三维效果。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格第二行的高度设置为 100 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let row = shape.Table.Rows.Item(2)
    row.Height = 100
}
```


```JavaScript
/*本示例显示第一个窗口所选表格的最后一行的高度。*/
function test() {
    let table = Windows.Item(1).Selection.ShapeRange.Table
    let row = table.Rows.Item(table.Rows.Count)
    alert(row.Height + " 磅")
}
```
