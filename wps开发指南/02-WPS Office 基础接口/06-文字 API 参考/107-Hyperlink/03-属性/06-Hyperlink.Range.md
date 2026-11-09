# Hyperlink.Range

返回一个 **Range** 对象，该对象代表超链接中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例更改活动文档上第一个超链接中包含的文档部分的文本。*/
function test() {
    let hyperlink = Application.ActiveDocument.Hyperlinks.Item(1)
    hyperlink.Range.Text = "new Hyperlink text"
}
```


```JavaScript
/*本示例删除活动文档上第二个超链接中包含的文档部分。*/
function test() {
    let hyperlink = Application.ActiveDocument.Hyperlinks.Item(2)
    hyperlink.Range.Delete()
}
```
