# OMath.Type

返回或设置一个 **WdOMathType** 常量，该常量表示是以内嵌方式显示公式（使文本围绕在公式的周围），还是在单独的行上显示公式。可读写。



## 语法

express.**Type**

express   一个代表 **OMath** 对象的变量。

## 类型

WdOMathType

## 示例


```JavaScript
/*本示例创建了一个新公式，并且将其设置为内嵌在文本中。*/
function test() {
    let range = Selection.Range
    range.Text = "Celsius = (5/9)(Fahrenheit - 32)"
    range.Select()
    Selection.OMaths.Add(range)
    range.OMaths.Item(1).Type = wdOMathInline
}
```


```JavaScript
/*本示例判断如果第一个文档上的公式是在单独的行上显示，则通知用户。*/
function test() {
    let oMaths = Documents.Item(1).OMaths
    for (let i = 1; i <= oMaths.Count; i++) {
        if (oMaths.Item(i).Type == wdOMathDisplay) {
            alert(`第${i}个公式是在单独的行上显示`)
        }
    }
}
```
