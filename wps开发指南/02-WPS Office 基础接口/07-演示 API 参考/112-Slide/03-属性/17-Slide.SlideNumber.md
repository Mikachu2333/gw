# Slide.SlideNumber

返回幻灯片编号。只读。



## 语法

express.**SlideNumber**

express   一个代表 **Slide** 对象的变量。

## 类型

number（int 精度）

## 说明


 **Slide** 对象的 **SlideNumber** 属性是显示幻灯片编号时在幻灯片右下角出现的实际编号。此编号由幻灯片在演示文稿中的编号（ **SlideIndex** 属性值）以及演示文稿的起始幻灯片编号（ **FirstSlideNumber** 属性值）决定。幻灯片编号始终等于起始幻灯片编号 + 幻灯片索引号 - 1。



## 示例


```JavaScript
/*本示例显示第一张幻灯片编号的变化对某特定幻灯片编号的影响。*/
function test() {
    let presentation = Application.ActivePresentation
    presentation.PageSetup.FirstSlideNumber = 1        //starts slide numbering at 1
    alert(presentation.Slides.Item(2).SlideNumber)    //returns 2

    presentation.PageSetup.FirstSlideNumber = 10       //starts slide numbering at 10
    alert(presentation.Slides.Item(2).SlideNumber)    //returns 11
}
```


```JavaScript
/*本示例显示第一个演示文稿的最后一张幻灯片的编号。*/
function test() {
    let slides = Presentations.Item(1).Slides
    alert(slides.Item(slides.Count).SlideNumber)
}
```
