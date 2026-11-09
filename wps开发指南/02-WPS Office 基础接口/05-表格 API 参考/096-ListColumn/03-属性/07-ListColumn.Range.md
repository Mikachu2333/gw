# ListColumn.Range

返回一个 **Range** 对象，它代表在以上列表中的指定列表对象所应用的区域。



## 语法

express.**Range**

express   一个代表 **ListColumn** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第三列单元格的宽度。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListColumns.Item(3).Range.Width)
}
```


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第一列单元格边框的粗细设置为粗线。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.ListColumns.Item(1).Range.Borders.Weight = xlThick
}
```
