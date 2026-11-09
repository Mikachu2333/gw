# HeadersFooters.Clear

清除指定幻灯片的页眉和页脚。



## 语法

express.**Clear()**

express   一个代表 **HeadersFooters** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除活动演示文稿的幻灯片母版的页眉和页脚。*/
function test() {
    let headerFooters = ActivePresentation.SlideMaster.HeadersFooters
    headerFooters.Clear()
}
```


```JavaScript
/*本示例清除活动演示文稿所有幻灯片的页眉和页脚。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = slides.Count; i >= 1; i--) {
        slides.Item(i).HeadersFooters.Clear()
    }
}
```
