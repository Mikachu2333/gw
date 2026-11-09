# Slide.Select

选择指定的对象。



## 语法

express.**Select()**

express   一个代表 **Slide** 对象的变量。

## 返回值

void

## 说明


如果做出不适用于当前视图的选择，此代码将失败。例如，可以在幻灯片浏览视图中而不能在幻灯片视图中选择幻灯片。



## 示例


```JavaScript
/*本示例新建一篇演示文稿，并选中新建的幻灯片。*/
function test() {
    let slides = Presentations.Add().Slides
    slides.Add(1, ppLayoutBlank).Select()
}
```


```JavaScript
/*本示例选择活动演示文稿中的第一张幻灯片。*/
function test() {
    ActivePresentation.Slides.Item(1).Select()
}
```
