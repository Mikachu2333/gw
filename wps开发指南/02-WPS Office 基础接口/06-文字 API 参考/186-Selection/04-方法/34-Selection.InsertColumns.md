# Selection.InsertColumns

在选定内容的左侧插入新列。



## 语法

express.**InsertColumns()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


插入的列数与选定列数相等。还可以使用 **Columns** 对象的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Add)** 方法插入列。  

如果选定内容不在表格中，则会导致出错。



## 示例


```JavaScript
/*本示例在所选内容的左侧插入新列。插入的列数与选定列数相等。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.InsertColumns()
        Selection.Shading.Texture = wdTexture10Percent
    }
}
```


```JavaScript
/*本示例在所选内容的左侧插入新列，然后为选定第一个表格的第一个单元格设置文本。*/
function test() {
    Selection.InsertColumns()
    Selection.Tables.Item(1).Cell(1, 1).Range.Text = "table"
}
```
