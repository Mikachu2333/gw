# Endnotes.Convert

将尾注转换为脚注。



## 语法

express.**Convert()**

express   一个代表 **Endnotes** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中所有的尾注转换为脚注。*/
function test() {
    let endnotes = Application.ActiveDocument.Endnotes
    if (endnotes.Count > 0) {
        endnotes.Convert()
    }
}
```


```JavaScript
/*本示例将活动文档的第一节中的所有尾注转换为脚注。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    range.Endnotes.Convert()
}
```
