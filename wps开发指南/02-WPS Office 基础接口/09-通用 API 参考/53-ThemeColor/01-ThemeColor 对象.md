# ThemeColor 对象

代表 Office 主题的配色方案中的一种颜色。


## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片中指定配色方案的颜色存储在变量 themeColor 中。*/
function test() {
    let themeColor = ActivePresentation.Slides.Item(1).ThemeColorScheme.Colors(msoThemeAccent1)
}
```


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片中指定配色方案的颜色是否为绿色。*/
function test() {
    let themeColorScheme = ActivePresentation.Slides.Item(1).ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent1).RGB == RGB(0, 255, 0))
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeColor/member/RGB) | 获取或设置 Office 主题的配色方案中颜色的值。可读/写。 |
| [ThemeColorSchemeIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeColor/member/ThemeColorSchemeIndex) | 获取 Office 主题的配色方案的索引值。只读。 |