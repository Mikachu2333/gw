# ListColumn.DataBodyRange

返回一个 **Range** 对象，该对象为列的数据部分的大小。只读。



## 语法

express.**DataBodyRange**

express   一个代表 **ListColumn** 对象的变量。

## 类型

Range

## 说明


返回的对象不包含标题单元格和总计单元格。



## 示例


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第二列数据单元格的数量，不包含标题单元格和总计单元格。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListColumns.Item(2).DataBodyRange.Count)
}
```


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第四列单元格字体大小设为 20 磅，不包含标题单元格和总计单元格。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.ListColumns.Item(4).DataBodyRange.Font.Size = 20
}
```
