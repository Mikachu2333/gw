# Paragraph.Outdent

为一个或多个段落删除一个级别的缩进。



## 语法

express.**Outdent()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 说明


此方法等效于单击 **“开始”** 选项卡上的 **“减少缩进量”** 按钮。



## 示例


```JavaScript
/*本示例为活动文档中的所有段落增加两个级别的缩进，然后为第一段删除一个级别的缩进。*/
function test() {
    ActiveDocument.Paragraphs.Indent()
    ActiveDocument.Paragraphs.Indent()
    ActiveDocument.Paragraphs.Item(1).Outdent()
}
```


```JavaScript
/*本示例为活动文档中所有段落增加两个级别的缩进，再为偶数段删除一个级别的缩进。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    paragraphs.Indent()
    paragraphs.Indent()
    for (let i = 1; i <= paragraphs.Count; i++) {
        if (i % 2 === 0) {
            paragraphs.Item(i).Outdent()
        }
    }
}
```
