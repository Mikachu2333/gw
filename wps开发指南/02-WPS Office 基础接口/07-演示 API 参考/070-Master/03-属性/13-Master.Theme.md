# Master.Theme

返回一个 **OfficeTheme** 对象，该对象代表指定的幻灯片母版、标题母版、讲义母版、备注母版或设计母版所使用的主题。



## 语法

express.**Theme**

express   一个代表 **Master** 对象的变量。

## 类型

OfficeTheme

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版中指定主题配色方案的颜色是否为红色。*/
function test() {
    let themeColorScheme = ActivePresentation.SlideMaster.Theme.ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent1).RGB == RGB(255, 0, 0))
}
```


```JavaScript
/*本示例从“WPS.eftx”中加载主题效果方案到活动演示文稿第一张幻灯片的幻灯片母版中。*/
function test() {
    let master = ActivePresentation.Slides.Item(1).Master
    master.Theme.ThemeEffectScheme.Load("D:\\TestFile\\WPS.eftx")
}
```
