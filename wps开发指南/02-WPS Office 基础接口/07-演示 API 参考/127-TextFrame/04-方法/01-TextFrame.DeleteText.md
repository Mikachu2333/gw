# TextFrame.DeleteText

删除与指定形状相关联的文本。



## 语法

express.**DeleteText()**

express   一个代表 **TextFrame** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片中的第二个形状包含的文本。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(2).TextFrame.DeleteText()
}
```


```JavaScript
/*本示例删除第一篇演示文稿的第一张幻灯片中的标题文本。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Title
    shape.TextFrame.DeleteText()
}
```
