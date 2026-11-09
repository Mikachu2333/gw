# Paragraphs.Indent

为一个或多个段落增加一个级别的缩进。



## 语法

express.**Indent()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 说明


此方法等效于单击 **“开始”** 选项卡上的 **“增加缩进量”** 按钮。



## 示例


```JavaScript
/*本示例为活动文档中的所有段落增加两个级别的缩进，然后为第一段删除一个级别的缩进。*/
function test() {
    Application.ActiveDocument.Paragraphs.Indent()
    Application.ActiveDocument.Paragraphs.Indent()
    Application.ActiveDocument.Paragraphs.Item(1).Outdent()
}
```


```JavaScript
/*本示例为所选段落添加一个级别的缩进。*/
function test() {
    Selection.Paragraphs.Indent()
}
```
