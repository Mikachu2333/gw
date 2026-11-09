# Window.SetFocus

将指定文档窗口的焦点设置为电子邮件正文。



## 语法

express.**SetFocus()**

express   一个代表 **Window** 对象的变量。

## 返回值

void

## 说明


如果该文档不是电子邮件，则此方法将不起作用。



## 示例


```JavaScript
/*本示例使电子邮件的标头可见，并将焦点设置为邮件正文。*/
function test() {
    ActiveWindow.EnvelopeVisible = true
    ActiveWindow.SetFocus()
}
```


```JavaScript
/*本示例将焦点设置为第一个窗口的邮件正文。*/
function test() {
    Windows.Item(1).SetFocus()
}
```
