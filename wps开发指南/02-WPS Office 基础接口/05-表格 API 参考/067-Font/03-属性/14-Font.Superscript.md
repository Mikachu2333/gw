# Font.Superscript

如果字体格式设置为上标字符，则该属性值为 **True** ；默认值为 **False** 。 **Variant** 类型，可读写。



## 语法

express.**Superscript**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将工作表Sheet1中 A1 单元格的最后一个字符设置为上标字符*/
function test() {
    let n = Application.Worksheets.Item("Sheet1").Range("A1").Characters().Count
    Application.Worksheets.Item("Sheet1").Range("A1").Characters(n, 1).Font.Superscript = true
}
```


```JavaScript
/*本示例判断第一个工作表中单元格B3的字体格式是否为上标字符，如果不是则将字体格式设置为上标字符。*/
function test() {
    let font = Application.Worksheets.Item(1).Range("B3").Font
    if (font.Superscript) {
        alert("字体格式为上标字符")
    } else {
        font.Superscript = true
        alert("字体格式已设置为上标字符")
    }
}
```
