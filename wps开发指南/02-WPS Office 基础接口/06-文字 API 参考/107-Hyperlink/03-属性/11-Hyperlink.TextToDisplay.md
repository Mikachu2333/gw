# Hyperlink.TextToDisplay

返回或设置文档中指定超链接的可视文本。 **String** 类型，可读写。



## 语法

express.**TextToDisplay**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动文档中第一个超链接的显示文本。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Item(1).TextToDisplay = "Follow this link for more information..."
}
```


```JavaScript
/*本示例显示活动文档中最后一个超链接的可视文本。*/
function test() {
    let num = Application.ActiveDocument.Hyperlinks.Count
    alert(Application.ActiveDocument.Hyperlinks.Item(num).TextToDisplay)
}
```
