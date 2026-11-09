# ThemeColorScheme.Colors

获取一个代表 Office 主题的配色方案中颜色的对象。



## 语法

express.**Colors(Index)**

express   一个代表 **ThemeColorScheme** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | MsoThemeColorSchemeIndex | **ThemeColor** 对象的索引值。 |

## 返回值

ThemeColor

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片中指定配色方案的颜色是否为红色。*/
function test() {
    let themeColorScheme = ActivePresentation.Slides.Item(1).ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent1).RGB == RGB(255, 0, 0))
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选的第一张幻灯片中指定配色方案的索引值是否为msoThemeAccent2。*/
function test() {
    let themeColorScheme = ActiveWindow.Selection.SlideRange.Item(1).ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent2).ThemeColorSchemeIndex == msoThemeAccent2)
}
```
