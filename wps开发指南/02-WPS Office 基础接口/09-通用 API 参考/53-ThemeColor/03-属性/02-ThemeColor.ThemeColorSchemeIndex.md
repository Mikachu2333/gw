# ThemeColor.ThemeColorSchemeIndex

获取 Office 主题的配色方案的索引值。只读。



## 语法

express.**ThemeColorSchemeIndex**

express   一个代表 **ThemeColor** 对象的变量。

## 类型

MsoThemeColorSchemeIndex

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片中指定配色方案的索引值是否为msoThemeAccent1。*/
function test() {
    let themeColorScheme = ActivePresentation.Slides.Item(1).ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent1).ThemeColorSchemeIndex == msoThemeAccent1)
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选的第一张幻灯片中指定配色方案的索引值是否为msoThemeAccent2。*/
function test() {
    let themeColorScheme = ActiveWindow.Selection.SlideRange.Item(1).ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent2).ThemeColorSchemeIndex == msoThemeAccent2)
}
```
