# SlideRange.SlideIndex

返回 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 集合内指定幻灯片的索引号。只读。



## 语法

express.**SlideIndex**

express   一个代表 **SlideRange** 对象的变量。

## 类型

number（int 精度）

## 说明


与 **SlideID** 属性不同，在演示文稿中添加或重新排列幻灯片时， **Slide** 对象的 **SlideIndex** 属性会改变。因此，与使用具有幻灯片索引号的 **Item** 方法相比，使用具有幻灯片 ID 号的 **[FindBySlideID](#TODO)** 方法是从 **Slides** 集合返回特定 **Slide** 对象的更可靠方法。



## 示例


```JavaScript
/*本示例显示第一篇演示文稿中第一张幻灯片的索引号。*/
function test() {
    let slides = Presentations.Item(1).Slides
    alert(slides.Range(1).SlideIndex)
}
```


```JavaScript
/*本示例显示活动演示文稿第一个窗口中所选的第一张幻灯片的索引号。*/
function test() {
    let slide = ActivePresentation.Windows.Item(1).Selection.SlideRange.Item(1)
    alert(slide.SlideIndex)
}
```
