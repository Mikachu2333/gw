# Selection.InsertRowsAbove

在当前选定内容上方插入行。



## 语法

express.**InsertRowsAbove(NumRows)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumRows | 可选 | any | 需要添加的行数。 |

## 返回值

void

## 说明


WPS 可在当前选定内容中插入任意数量的行。  

要使用此方法，当前所选内容必须处于表格中。



## 示例


```JavaScript
/*本示例选定活动文档中第一个表格的第二行，并在其上方插入一新行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(2).Select()
    Selection.InsertRowsAbove()
}
```


```JavaScript
/*本示例在选定内容的上方插入两个新行，然后删除新行的边框。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.InsertRowsAbove(2)
        Selection.Borders.Enable = msoFalse
    }
}
```
