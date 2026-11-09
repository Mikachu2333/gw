# Paragraph.Style

返回或设置指定对象的样式。可读写 **Variant** 类型。



## 语法

express.**Style**

express   一个代表 **Paragraph** 对象的变量。

## 类型

any

## 说明


要设置该属性，请指定样式的本地名称、一个整数、一个 **WdBuiltinStyle** 常量或一个代表样式的对象。



## 示例


```JavaScript
/*本示例将活动文档中所有段落设置为“标题 4”样式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    for (let i = 1; i <= paragraphs.Count; i++) {
        paragraphs.Item(i).Style = wdStyleHeading4
    }
}
```


```JavaScript
/*本示例将活动文档中所有段落交替设置为“标题 3”和“正文”样式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    for (let i = 1; i <= paragraphs.Count; i++) {
        if (i % 2 == 0) {
            paragraphs.Item(i).Style = wdStyleNormal
        } else {
            paragraphs.Item(i).Style = wdStyleHeading3
        }
    }
}
```
