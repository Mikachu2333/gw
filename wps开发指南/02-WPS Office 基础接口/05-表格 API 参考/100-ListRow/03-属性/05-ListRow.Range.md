# ListRow.Range

返回一个 **Range** 对象，它代表在以上列表中的指定列表对象所应用的区域。



## 语法

express.**Range**

express   一个代表 **ListRow** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第四行单元格的高度。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListRows.Item(4).Range.Height)
}
```


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第一行单元格字体大小设为 25 磅。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.ListRows.Item(1).Range.Font.Size = 25
}
```
