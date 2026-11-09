# Font.Italic

如果字体样式为倾斜，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Italic**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将 Sheet1 中 A1:A5 区域的字形设置为倾斜*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:A5").Font.Italic = true
}
```


```JavaScript
/*本示例显示第一个工作表中单元格D2的字形是否为倾斜。*/
function test() {
    let font = Application.Worksheets.Item(1).Range("D2").Font
    alert(font.Italic)
}
```
