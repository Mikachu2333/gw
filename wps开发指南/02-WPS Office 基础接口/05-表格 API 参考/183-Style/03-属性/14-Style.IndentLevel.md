# Style.IndentLevel

返回或设置一个 **Long** 值，它代表样式的缩进量。



## 语法

express.**IndentLevel**

express   一个代表 **Style** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用此属性将缩进量设为小于 0 或者大于 15 的数字，将导致发生错误。



## 示例


```JavaScript
/*本示例显示A1单元格的缩进量。*/
function test() {
    let range = Application.Worksheets.Item(1).Range("A1")
    range.Value2 = "这是示例文本"
    alert(range.Style.IndentLevel)
}
```


```JavaScript
/*本示例将B2单元格的缩进量设置为5。*/
function test() {
    let range = ActiveSheet.Range("B2")
    range.Style.IndentLevel = 5
}
```
