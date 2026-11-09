# Slide.Delete

删除指定的 **Slide** 对象。



## 语法

express.**Delete()**

express   一个代表 **Slide** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片。*/
function test() {
    ActivePresentation.Slides.Item(1).Delete()
}
```


```JavaScript
/*本示例删除第一个演示文稿的所有幻灯片。*/
function test() {
    let slides = Presentations.Item(1).Slides
    for (let i = slides.Count; i > 0; i--) {
        slides.Item(i).Delete()
    }
}
```
