# Range.Text

返回或设置指定对象中的文本。 **String** 型，只读。



## 语法

express.**Text**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*此示例演示包含格式数字的单元格的 Text 和 Value 属性的区别。*/
function test() {
    let c = Application.Worksheets.Item("Sheet1").Range("B14")
    c.Value2 = 1198.3
    c.NumberFormat = "$#,##0_);($#,##0)"
    MsgBox(c.Value2)
    MsgBox(c.Text)
}
```


```JavaScript
/*本示例将 A1 单元格的值设置为 44958，设置数值格式为日期，并显示 A1 单元格的文本*/
function test() {
    Range("A1").Value2 = 44958
    Range("A1").NumberFormat = "yyyy/mm/dd"
    alert(Range("A1").Text)
}
```
