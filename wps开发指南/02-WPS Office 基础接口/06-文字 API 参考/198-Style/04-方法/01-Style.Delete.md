# Style.Delete

删除指定的样式。



## 语法

express.**Delete()**

express   一个代表 **Style** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除选中内容中第一段所使用的样式。*/
function test() {
    Application.Selection.Paragraphs.Item(1).Style.Delete()
}
```


```JavaScript
/*本示例删除活动文档中名为“样式2”的样式。*/
function test() {
    ActiveDocument.Styles.Item("样式2").Delete()
}
```
