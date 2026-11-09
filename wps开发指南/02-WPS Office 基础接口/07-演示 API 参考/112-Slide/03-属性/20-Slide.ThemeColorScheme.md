# Slide.ThemeColorScheme

返回一个 **ThemeColorScheme** 对象，该对象代表与指定幻灯片相关联的配色方案。只读。



## 语法

express.**ThemeColorScheme**

express   一个代表 **Slide** 对象的变量。

## 类型

ThemeColorScheme

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片 ThemeColorScheme 中的颜色数量。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).ThemeColorScheme.Count)
}
```


```JavaScript
/*本示例显示第一个演示文稿第一张幻灯片中配色方案“强调文字颜色 1”的颜色是否为红色。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    alert(slide.ThemeColorScheme.Colors(msoThemeAccent1).RGB == RGB(255, 0, 0))
}
```
