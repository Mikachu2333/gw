# Worksheet.Paste

将“剪贴板”中的内容粘贴到工作表上。



## 语法

express.**Paste(Destination, Link)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Destination | 可选 | any | 一个 **Range** 对象，指定用于粘贴剪贴板中内容的目标区域。如果省略此参数，就使用当前的选定区域。仅当剪贴板中的内容能被粘贴到某区域时，才能指定此参数。如果指定了此参数，则不能使用 _Link_ 参数。 |
| Link | 可选 | any | 如果为 **True** ，则链接到被粘贴数据的源。如果指定此参数，则不能使用 _Destination_ 参数。默认值是 **False** 。 |

## 返回值

void

## 说明


如果不指定 _Destination_ 参数，则在使用该方法之前必须选择目标区域。

该方法可能会修改工作表的选定区域，这取决于剪贴板中的内容。



## 示例


```JavaScript
/*此示例将工作表 Sheet1 上单元格区域 C1:C5 中的数据复制到单元格区域 D1:D5 中。*/
function test() {
    Worksheets.Item("Sheet1").Range("C1:C5").Copy()
    Worksheets.Item("Sheet1").Paste(Worksheets.Item("Sheet1").Range("D1:D5"))
}
```


```JavaScript
/*本示例复制 A1 单元格后，选中 B1 单元格再粘贴，并指定链接到被粘贴数据的源。*/
function test() {
    ActiveSheet.Range("A1").Copy()
    ActiveSheet.Range("B1").Select()
    ActiveSheet.Paste(null, true)
}
```
