# Hyperlink.SubAddress

返回或设置文档中与指定超链接相关联的位置。 **String** 类型，可读写。



## 语法

express.**SubAddress**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将一个区域位置添加到第一个形状的超链接中*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).Hyperlink.SubAddress = "A1:B10"
}
```


```JavaScript
/*本示例将单元格G12的第一个超链接的子地址设置为"/home/"。*/
function test() {
    let hl = Range("G12").Hyperlinks.Item(1)
    hl.SubAddress = "/home/"
}
```
