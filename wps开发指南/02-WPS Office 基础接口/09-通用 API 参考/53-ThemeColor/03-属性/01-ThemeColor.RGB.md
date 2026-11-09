# ThemeColor.RGB

获取或设置 Office 主题的配色方案中颜色的值。可读/写。



## 语法

express.**RGB**

express   一个代表 **ThemeColor** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片中指定配色方案的颜色是否为红色。*/
function test() {
    let themeColorScheme = ActivePresentation.Slides.Item(1).ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent1).RGB == RGB(255, 0, 0))
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选的第一张幻灯片中指定配色方案的颜色是否为蓝色。*/
function test() {
    let themeColorScheme = ActiveWindow.Selection.SlideRange.Item(1).ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent2).RGB == RGB(0, 0, 255))
}
```
