# Hyperlink.ScreenTip

返回或设置指定超链接的屏幕提示文字。 **String** 类型，可读写。



## 语法

express.**ScreenTip**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 说明


在将文档保存到网页中之后，如果在 Web 浏览器中查看该文档，则当鼠标移动到超链接上时，“屏幕提示”文字就会显示。某些浏览器可能不支持“屏幕提示”。



## 示例


```JavaScript
/*本示例修改活动工作表上第一个超链接的屏幕提示*/
function test() {
    Application.ActiveSheet.Hyperlinks.Item(1).ScreenTip = "Return to the home page"
}
```


```JavaScript
/*本示例修改C7单元格的第一个超链接的屏幕提示并显示出来*/
function test() {
    let hl = Range("C7").Hyperlinks.Item(1)
    hl.ScreenTip = "BACKHOME"
    MsgBox(`屏幕提示为 ${hl.ScreenTip}`)
}
```
