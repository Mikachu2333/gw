# Hyperlink.Address

返回或设置一个 **String** 型，它代表目标文档的地址。



## 语法

express.**Address**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示单元格B2中第一项超链接的地址*/
function test() {
    let hl = Range("B2").Hyperlinks.Item(1)
    MsgBox(`超链接的目标地址是 ${hl.Address}`)
}
```


```JavaScript
/*本示例修改工作表Sheet1中第一项超链接的地址*/
function test() {
    let hl = Application.Worksheets.Item("Sheet1").Hyperlinks.Item(1)
    hl.Address = "https://wps.cn/"
    MsgBox(`超链接的地址已修改为 ${hl.Address}`)
}
```
