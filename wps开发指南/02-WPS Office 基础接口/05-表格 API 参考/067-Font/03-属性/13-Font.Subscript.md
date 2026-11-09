# Font.Subscript

如果字体格式设置为下标，则该属性值为 **True** 。默认值为 **False** 。 **Variant** 类型，可读写。



## 语法

express.**Subscript**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将工作表Sheet1中 A1 单元格的第二个字符设置为下标字符*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Characters(2, 1).Font.Subscript = true
}
```


```JavaScript
/*本示例显示第一个工作表中单元格D1的字体格式是否设置为下标字体*/
function test() {
    let font = Application.Worksheets.Item(1).Range("D1").Font
    alert(font.Subscript)
}
```
