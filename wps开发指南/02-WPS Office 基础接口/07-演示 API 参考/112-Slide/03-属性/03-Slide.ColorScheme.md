# Slide.ColorScheme

返回或设置 **ColorScheme** 对象，该对象代表指定幻灯片、幻灯片区域或幻灯片母版的配色方案。可读/写。



## 语法

express.**ColorScheme**

express   一个代表 **Slide** 对象的变量。

## 类型

ColorScheme

## 示例


```JavaScript
/*本示例将活动演示文稿第一张和第三张幻灯片的标题颜色设为绿色。*/
function test() {
    let slideRange = ActivePresentation.Slides.Range([1, 3])
    slideRange.ColorScheme.Colors(ppTitle).RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片背景的颜色值。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).ColorScheme.Colors(ppBackground).RGB)
}
```
