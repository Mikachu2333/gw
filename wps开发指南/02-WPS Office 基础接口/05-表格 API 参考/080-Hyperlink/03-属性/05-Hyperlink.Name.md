# Hyperlink.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示工作表Sheet1中第一项超链接的名称*/
function test() {
    let hl = Application.Worksheets.Item("Sheet1").Hyperlinks.Item(1)
    MsgBox(`超链接的名称是 ${hl.Name}`)
}
```


```JavaScript
/*本示例显示单元格B2中第一项超链接的名称*/
function test() {
    let hl = Range("B2").Hyperlinks.Item(1)
    MsgBox(`超链接的名称是 ${hl.Name}`)
}
```
