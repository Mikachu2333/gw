# TextRange.Length

返回指定文本区域的长度（以字符数为单位）。只读。



## 语法

express.**Length**

express   一个代表 **TextRange** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例根据活动演示文稿第二张幻灯片的标题所含字符数来设置标题字号，如果所含字符数大于 5，则将标题字号设置为 48 磅；如果所含字符数等于或小于 5，则将标题字号设置为 72 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Title
    let textRange = shape.TextFrame.TextRange
    if (textRange.Length > 5) {
        textRange.Font.Size = 48
    } else {
        textRange.Font.Size = 72
    }
}
```


```JavaScript
/*本示例显示活动演示文稿第二张幻灯片的第一个形状的文本长度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange
    alert(textRange.Length)
}
```
