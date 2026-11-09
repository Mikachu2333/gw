# Master.ColorScheme

返回或设置 **[ColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/obj)** 对象，该对象代表指定幻灯片、幻灯片区域或幻灯片母版的配色方案。可读/写。



## 语法

express.**ColorScheme**

express   一个代表 **Master** 对象的变量。

## 类型

ColorScheme

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的幻灯片母版的标题颜色设为绿色。*/
function test() {
    let master = ActivePresentation.Slides.Item(1).Master
    master.ColorScheme.Colors(ppTitle).RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版配色方案中的背景色是否为黄色。*/
function test() {
    let colorScheme = ActivePresentation.SlideMaster.ColorScheme
    alert(colorScheme.Colors(ppBackground).RGB == RGB(255, 255, 0))
}
```
