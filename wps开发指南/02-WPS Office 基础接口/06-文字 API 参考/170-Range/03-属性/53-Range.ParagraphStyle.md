# Range.ParagraphStyle

返回一个 **Variant** 类型的值，该值代表用于设置段落格式的样式。只读。



## 语法

express.**ParagraphStyle**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示所选区域的段落样式。*/
function test() {
    alert(Selection.Range.ParagraphStyle.toString())
}
```


```JavaScript
/*本示例遍历活动文档上所有段落，然后显示所有段落的段落样式。*/
function test() {
    let str = ""
    for (let i = 1; i <= ActiveDocument.Paragraphs.Count; i++) {
        let range = ActiveDocument.Paragraphs.Item(i).Range
        str += `段落 ${i} 的样式为： ${range.ParagraphStyle.toString()}\n`
    }
    alert(str)
}
```
