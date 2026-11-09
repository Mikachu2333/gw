# SlideRange.SlideID

返回指定幻灯片的唯一 ID 号。只读。 **Long** 类型。



## 语法

express.**SlideID**

express   一个代表 **SlideRange** 对象的变量。

## 类型

number（int4 精度）

## 说明


与 **SlideIndex** 属性不同，在演示文稿中添加或重新排列幻灯片时， **Slide** 对象的 **SlideID** 属性不会改变。因此，与使用具有幻灯片索引号的 **Item** 方法相比，使用具有幻灯片 ID 号的 **[FindBySlideID](#TODO)** 方法是从 **Slides** 集合返回特定 **Slide** 对象的更可靠方法。



## 示例


```JavaScript
/*此示例演示如何检索 Slide 对象的唯一 ID 号，然后使用此数字从 Slides 集合中返回该 Slide 对象。*/
function test() {
    let slides = Application.ActivePresentation.Slides
    // Get slide ID
    let sideId = slides.Range(1).SlideID
    // Use ID to return specific slide
    slides.FindBySlideID(sideId).SlideShowTransition.EntryEffect = ppEffectCoverLeft
}
```


```JavaScript
/*本示例显示活动演示文稿第一个窗口中所选的第一张幻灯片的唯一 ID 号。*/
function test() {
    let slide = ActivePresentation.Windows.Item(1).Selection.SlideRange.Item(1)
    alert(slide.SlideID)
}
```
