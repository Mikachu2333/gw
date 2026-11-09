# Hyperlink.ScreenTip

返回或设置当鼠标指针置于指定超链接之上时显示的“屏幕提示”文字。 **String** 类型，可读写。



## 语法

express.**ScreenTip**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动文档中第一个超链接的“屏幕提示”文字。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Item(1).ScreenTip = "Home"
}
```


```JavaScript
/*本示例显示活动文档中第二个超链接的“屏幕提示”文字。*/
function test() {
    alert(Application.ActiveDocument.Hyperlinks.Item(2).ScreenTip)
}
```
