# Selection.InsertRows

在所选内容的上方插入指定数量的新行。如果选定内容不在表格中，则会导致出错。



## 语法

express.**InsertRows(NumRows)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumRows | 可选 | any | 需要添加的行数。 |

## 返回值

void

## 说明


还可以通过使用 **Rows** 对象的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Add)** 方法插入行。



## 示例


```JavaScript
/*本示例在选定内容的上方插入两个新行，然后删除新行的边框。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.InsertRows(2)
        Selection.Borders.Enable = msoFalse
    }
}
```


```JavaScript
/*本示例在活动文档第一个表格的第二行上方插入三个新行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(2).Select()
    Selection.InsertRows(3)
}
```
