# SlideRange.Delete

删除指定的 **SlideRange** 对象。



## 语法

express.**Delete()**

express   一个代表 **SlideRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿第一个窗口中选定的幻灯片。*/
function test() {
    ActivePresentation.Windows.Item(1).Selection.SlideRange.Delete()
}
```


```JavaScript
/*本示例删除第一篇演示文稿中第一张和第二张幻灯片。*/
function test() {
    let slides = Presentations.Item(1).Slides
    slides.Range([1, 2]).Delete()
}
```
