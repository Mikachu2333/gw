# Slide.Cut

删除指定对象并将其放到剪贴板中。



## 语法

express.**Cut()**

express   一个代表 **Slide** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例从活动演示文稿中删除第一张幻灯片并将它的一个副本放到剪贴板中。*/
function test() {
    ActivePresentation.Slides.Item(1).Cut()
}
```


```JavaScript
/*本示例剪切第一个演示文稿的最后一张幻灯片。*/
function test() {
    let slides = Presentations.Item(1).Slides
    slides.Item(slides.Count).Cut()
}
```
