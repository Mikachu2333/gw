# Slide.SlideID

返回指定幻灯片的唯一 ID 号。只读。



## 语法

express.**SlideID**

express   一个代表 **Slide** 对象的变量。

## 类型

number（int4 精度）

## 说明


与 **SlideIndex** 属性不同，当您将幻灯片添加到演示文稿中或在演示文稿中重新排列幻灯片时， **Slide** 对象的 **SlideID** 属性不会更改。因此，将 **FindBySlideID** 方法与幻灯片的 ID 号一起使用可能是从 **Slides** 集合返回特定 **Slide** 对象的更可靠的方法，而不是将 **Item** 方法与幻灯片的索引号一起使用。



## 示例


```JavaScript
/*本示例在活动演示文稿中新建一张幻灯片，并显示其 ID 号。*/
function test() {
    let slides = ActivePresentation.Slides
    let slideID = slides.Add(2, ppLayoutChart).SlideID
    alert(slideID)
}
```


```JavaScript
/*本示例判断如果活动演示文稿中幻灯片的 ID 号为“351”，则将其选中。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = slides.Count; i > 0; i--) {
        if (slides.Item(i).SlideID == 351) {
            slides.Item(i).Select()
        }
    }
}
```
