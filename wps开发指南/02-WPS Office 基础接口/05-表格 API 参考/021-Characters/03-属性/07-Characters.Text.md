# Characters.Text

返回或设置指定对象中的文本。 **String** 型，可读写。



## 语法

express.**Text**

express   一个代表 **Characters** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示 B1 单元格的第一个字符的文本。*/
function test() {
    alert(Worksheets.Item("Sheet1").Range("B1").Characters(1, 1).Text)
}
```


```JavaScript
/*此示例设置 A1 单元格前五个字符的文本。*/
function test() {
    ActiveSheet.Range("A1").Characters(1, 5).Text = "Hello"
}
```
