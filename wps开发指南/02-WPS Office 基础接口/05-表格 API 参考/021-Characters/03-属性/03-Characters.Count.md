# Characters.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Characters** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例将 A1 单元格的最后一个字符设为上标字符。*/
function test() {
    let n = Application.Worksheets.Item("Sheet1").Range("A1").Characters().Count
    Application.Worksheets.Item("Sheet1").Range("A1").Characters(n, 1).Font.Superscript = true
}
```
