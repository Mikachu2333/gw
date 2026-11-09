# Characters.Font

返回一个 **Font** 对象，它代表指定对象的字体。



## 语法

express.**Font**

express   一个代表 **Characters** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*此示例将 A1 单元格所有字符字体大小设为 20 磅。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Characters(1).Font.Size = 20
}
```


```JavaScript
/*本示例将单元格 B1 中所有字符设置为加粗。*/
function test() {
    let n = Application.Worksheets.Item("Sheet1").Range("B1").Characters().Count
    Application.Worksheets.Item("Sheet1").Range("B1").Characters(1, n).Font.Bold = true
}
```
