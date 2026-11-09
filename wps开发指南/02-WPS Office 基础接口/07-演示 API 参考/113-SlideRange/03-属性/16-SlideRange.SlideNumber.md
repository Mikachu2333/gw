# SlideRange.SlideNumber

返回幻灯片编号。只读。



## 语法

express.**SlideNumber**

express   一个代表 **SlideRange** 对象的变量。

## 类型

number（int 精度）

## 说明


 **SlideRange** 对象的 **SlideNumber** 属性是显示幻灯片编号时在幻灯片右下角出现的实际编号。此编号由幻灯片在演示文稿中的编号（ **[SlideIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/SlideIndex)** 属性值）以及演示文稿的起始幻灯片编号（ **[FirstSlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/member/FirstSlideNumber)** 属性值）决定。幻灯片编号始终等于起始幻灯片编号 + 幻灯片索引号 - 1。



## 示例


```JavaScript
/*本示例显示第一张幻灯片编号的变化对某特定幻灯片编号的影响。*/
function test() {
    let presentation = Application.ActivePresentation
    // starts slide numbering at 1
    presentation.PageSetup.FirstSlideNumber = 1
    // returns 2
    MsgBox(presentation.Slides.Range(2).SlideNumber)

    // starts slide numbering at 10
    presentation.PageSetup.FirstSlideNumber = 10
    // returns 11
    MsgBox(presentation.Slides.Range(2).SlideNumber)
}
```


```JavaScript
/*本示例显示活动演示文稿第一个窗口中所选的第一张幻灯片编号。*/
function test() {
    let slide = ActivePresentation.Windows.Item(1).Selection.SlideRange.Item(1)
    alert(slide.SlideNumber)
}
```
