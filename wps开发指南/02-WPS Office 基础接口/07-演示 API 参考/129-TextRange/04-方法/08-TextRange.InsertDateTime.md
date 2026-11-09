# TextRange.InsertDateTime

在指定的文本范围中插入日期和时间。返回一个代表所插入文本的 **TextRange** 对象。



## 语法

express.**InsertDateTime(DateTimeFormat, InsertAsField)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DateTimeFormat | 必选 | PpDateTimeFormat | 日期和时间的格式。 |
| InsertAsField | 可选 | MsoTriState | 决定是否每次打开演示文稿时都更新插入的日期和时间。 |

## 返回值

TextRange

## 说明


*DateTimeFormat* 参数值可以是 **PpDateTimeFormat** 常量之一。

*InsertAsField* 参数值可以是下列 **MsoTriState** 常量之一。

| 常量 | 说明 |
| --------------|--------------------- |
| **msoFalse** | 默认值。 |
| **msoTrue** | 每次打开演示文稿时，更新插入的日期和时间。 |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片第二个形状的第一段文本设置为时间和日期。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange.Paragraphs(1)
    textRange.InsertDateTime(ppDateTimeMdyy)
}
```


```JavaScript
/*本示例将第一篇演示文稿第一张幻灯片的第一个形状的文本设置为时间和日期，并且每次打开演示文稿时都更新插入的日期和时间。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange
    textRange.InsertDateTime(ppDateTimedMMMyy, msoTrue)
}
```
