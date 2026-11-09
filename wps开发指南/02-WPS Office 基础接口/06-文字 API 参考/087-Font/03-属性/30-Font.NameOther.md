# Font.NameOther

返回或设置字符代码从 128 到 255 的字符所用的字体。 **String** 类型，可读写。



## 语法

express.**NameOther**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 说明


在 WPS 美国英语版中，该属性的默认值是 Times New Roman。使用 **Name** 属性可以更改应用于所有文本的字体和 **“格式”** 工具栏 **“字体”** 框中显示的字体。



## 示例


```JavaScript
/*本示例设置字符代码从 128 到 255 的字符所用的字体。*/
function test() {
    Selection.Font.NameOther = "Century"
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的字符代码从 128 到 255 的字符所用的字体。*/
function test() {
    alert(ActiveDocument.Content.Font.NameOther)
}
```
