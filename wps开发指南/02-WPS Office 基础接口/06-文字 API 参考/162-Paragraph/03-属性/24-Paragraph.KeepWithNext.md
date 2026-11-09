# Paragraph.KeepWithNext

在 WPS 对文档重新分页时，如果指定段落与它的下一段位于同一页上，则该属性值为 **True** 。可读写 **Long** 类型。



## 语法

express.**KeepWithNext**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **True** 、 **False** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例将活动文档中的第三段至第六段保持在同一页上。*/
function test() {
    for (let i = 3; i <= 5; i++) {
        ActiveDocument.Paragraphs.Item(i).KeepWithNext = true
    }
}
```


```JavaScript
/*本示例将选定的内容保持在同一页上。*/
function test() {
    for (let i = 1; i <= Selection.Paragraphs.Count; i++) {
        Selection.Paragraphs.Item(i).KeepWithNext = true
    }
}
```
