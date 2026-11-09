# Hyperlink.Delete

删除指定的超链接。



## 语法

express.**Delete()**

express   一个代表 **Hyperlink** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中的第一个超链接。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Item(1).Delete()
}
```


```JavaScript
/*本示例删除活动文档的最后一个超链接。*/
function test() {
    let num = Application.ActiveDocument.Hyperlinks.Count
    Application.ActiveDocument.Hyperlinks.Item(num).Delete()
}
```
