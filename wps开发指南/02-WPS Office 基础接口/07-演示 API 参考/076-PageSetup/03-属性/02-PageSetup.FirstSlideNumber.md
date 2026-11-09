# PageSetup.FirstSlideNumber

返回或设置演示文稿中第一张幻灯片的编号。可读/写。



## 语法

express.**FirstSlideNumber**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（int 精度）

## 说明


幻灯片编号是在显示幻灯片编号时出现在幻灯片右下角的实际编号。此编号是由演示文稿中幻灯片编号（顺序，即 **[SlideIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/SlideIndex)** 属性值）和演示文稿的起始幻灯片编号（ **[FirstSlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/FirstSlideNumber)** 属性值）所决定的。幻灯片编号始终等于起始幻灯片编号加上幻灯片索引号再减去一。 **[SlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/SlideNumber)** 属性返回幻灯片编号。



## 示例


```JavaScript
/*本示例更改活动演示文稿中第一张幻灯片的编号，然后显示第二张幻灯片的编号。*/
function test() {
    ActivePresentation.PageSetup.FirstSlideNumber = 1         //starts slide numbering at 1
    alert(ActivePresentation.Slides.Item(2).SlideNumber)      //returns 2
    ActivePresentation.PageSetup.FirstSlideNumber = 10        //starts slide numbering at 10
    alert(ActivePresentation.Slides.Item(2).SlideNumber)      //returns 11
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的编号。*/
function test() {
    alert(Presentations.Item(1).PageSetup.FirstSlideNumber)
}
```
