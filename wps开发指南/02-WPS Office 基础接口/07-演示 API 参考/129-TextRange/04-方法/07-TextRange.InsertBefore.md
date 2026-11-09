# TextRange.InsertBefore

在指定文本范围的开头添加一个字符串。返回一个代表添加文本的 **TextRange** 对象。省略参数时，该方法返回一个在指定范围开头的长度为零的字符串。



## 语法

express.**InsertBefore(NewText)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NewText | 可选 | string | 要添加的文本。默认值为一个空字符串。 |

## 返回值

TextRange

## 示例


```JavaScript
/*本示例将字符串“Test version:”追加到活动演示文稿第一张幻灯片第一个形状的文本开头。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.TextFrame.TextRange.InsertBefore("Test version:")
}
```


```JavaScript
/*本示例将字符串“test”追加到第一篇演示文稿中第一张幻灯片的第一个形状的第二段的文本开头。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange.Paragraphs(2).InsertBefore("test")
}
```
