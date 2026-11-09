# Hyperlink.Target

返回或设置在其中加载超链接的图文框或窗口的名称。可读写 **String** 类型。



## 语法

express.**Target**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置在一个新的浏览器窗口中打开指定的超链接。*/
function test() {
    ActiveDocument.Hyperlinks.Item(1).Target = "_blank"
}
```


```JavaScript
/*本示例设置在名为“left”的图文框中打开指定的超链接。*/
function test() {
    ActiveDocument.Hyperlinks.Item(1).Target = "left"
}
```
