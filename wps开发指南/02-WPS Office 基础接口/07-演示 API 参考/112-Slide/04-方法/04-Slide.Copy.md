# Slide.Copy

将指定对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **Slide** 对象的变量。

## 返回值

void

## 说明


使用 **Paste** 方法粘贴剪贴板中的内容。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片复制到剪贴板。*/
function test() {
    ActivePresentation.Slides.Item(1).Copy()
}
```


```JavaScript
/*本示例将活动演示文稿中第一张幻灯片的第一个形状中的文本复制到剪贴板。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange.Copy()
}
```
