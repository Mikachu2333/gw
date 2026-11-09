# Slide.SlideIndex

返回 **Slides** 集合中指定幻灯片的索引号。只读。



## 语法

express.**SlideIndex**

express   一个代表 **Slide** 对象的变量。

## 类型

number（int 精度）

## 说明


与 **SlideID** 属性不同，当您将幻灯片添加到演示文稿中或在演示文稿中重新排列幻灯片时， **Slide** 对象的 **SlideIndex** 属性可能会更改。因此，将 **FindBySlideID** 方法与幻灯片的 ID 号一起使用可能是从 **Slides** 集合返回特定 Slide 对象的更可靠的方法，而不是将 **Item** 方法与幻灯片的索引号一起使用。



## 示例


```JavaScript
/*以下示例显示第一个幻灯片放映窗口中当前放映幻灯片的索引号。*/
function test() {
    alert(SlideShowWindows.Item(1).View.Slide.SlideIndex)
}
```


```JavaScript
/*本示例显示活动演示文稿最后一张幻灯片的索引号。*/
function test() {
    let slides = ActivePresentation.Slides
    alert(slides.Item(slides.Count).SlideIndex)
}
```
