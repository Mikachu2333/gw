# NamedSlideShow.Delete

删除指定的 **NamedSlideShow** 对象。



## 语法

express.**Delete()**

express   一个代表 **NamedSlideShow** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一个自定义幻灯片放映。*/
function test() {
    let namedSlideShows = ActivePresentation.SlideShowSettings.NamedSlideShows
    namedSlideShows.Item(1).Delete()
}
```


```JavaScript
/*本示例删除第一篇演示文稿中名为“test”的自定义幻灯片放映。*/
function test() {
    let namedSlideShows = Presentations.Item(1).SlideShowSettings.NamedSlideShows
    namedSlideShows.Item("test").Delete()
}
```
