# Font.Bold

如果字体格式为加粗，则该属性值为 **True** 。 **Variant** 类型，可读写。



## 语法

express.**Bold**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将工作表 Sheet1中单元格 A1:A5 区域中的字体设为加粗*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:A5").Font.Bold = true
}
```


```JavaScript
/*本示例显示第一个工作表中的单元格A1字体是否为加粗。*/
function test() {
    let bold = Application.Worksheets.Item(1).Range("A1").Font.Bold
    alert(bold)
}
```
