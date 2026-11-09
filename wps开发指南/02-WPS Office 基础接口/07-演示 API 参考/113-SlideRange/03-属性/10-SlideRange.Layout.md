# SlideRange.Layout

返回或设置一个 **PpSlideLayout** 常量，该常量代表幻灯片版式。可读/写。



## 语法

express.**Layout**

express   一个代表 **SlideRange** 对象的变量。

## 类型

PpSlideLayout

## 说明


 **Layout** 属性的值可以是 **[PpSlideLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/PpSlideLayout)** 常量之一。



## 示例


```JavaScript
/*本示例将活动演示文稿第一个窗口中选定幻灯片的版式设置为文本版式。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    slideRange.Layout = ppLayoutText
}
```


```JavaScript
/*本示例显示第一篇演示文稿中第一张幻灯片的版式是否为自定义版式。*/
function test() {
    alert(Presentations.Item(1).Slides.Range(1).Layout == ppLayoutCustom)
}
```
