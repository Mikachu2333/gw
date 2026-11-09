# Hyperlink.TextToDisplay

返回或设置要为指定超链接显示的文本。默认值为超链接的地址。 **String** 类型，可读写。



## 语法

express.**TextToDisplay**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例为活动工作表上第一个超链接设置要显示的文本*/
function test() {
    Application.ActiveSheet.Hyperlinks.Item(1).TextToDisplay = "Company Home Page"
}
```


```JavaScript
/*本示例修改B5单元格中第一个超链接要显示的文本*/
function test() {
    let hl = Range("B5").Hyperlinks.Item(1)
    hl.TextToDisplay = "点击跳转"
}
```
