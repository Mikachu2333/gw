# Paragraph.Indent

为一个或多个段落增加一个级别的缩进。



## 语法

express.**Indent()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 说明


此方法等效于单击 **“格式”** 工具栏上的 **“增加缩进量”** 按钮。



## 示例


```JavaScript
/*本示例为活动文档中的第一段增加一个级别的缩进。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Indent()
}
```


```JavaScript
/*本示例为第一个文档的第二个段落增加一个级别的缩进。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).Indent()
}
```
