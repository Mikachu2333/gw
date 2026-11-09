# RGBColor.RGB

与 **PpColorSchemeIndex** 常量一同使用时，返回或设置指定配色方案颜色或其他颜色的红-绿-蓝（RGB）值。可读/写。



## 语法

express.**RGB**

express   一个代表 **RGBColor** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **Colors** 方法返回 **RGBColor** 对象。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中指定配色方案的颜色的红、绿、蓝分配值。*/
function test() {
    let colorScheme = ActivePresentation.Slides.Item(1).ColorScheme
    let rgb = colorScheme.Colors(ppBackground).RGB
    let redComponent = rgb % 256
    let greenComponent = Math.floor(rgb / 256) % 256
    let blueComponent = Math.floor(rgb / 65536) % 256
    alert(`RGB components: ${redComponent}, ${greenComponent}, ${blueComponent}`)
}
```


```JavaScript
/*本示例将活动窗口所选的第一张幻灯片中指定配色方案的颜色设置为红色。*/
function test() {
    let colorScheme = ActiveWindow.Selection.SlideRange.Item(1).ColorScheme
    colorScheme.Colors(ppFill).RGB = RGB(255, 0, 0)
}
```
