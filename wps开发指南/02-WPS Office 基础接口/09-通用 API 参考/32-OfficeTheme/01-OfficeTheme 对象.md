# OfficeTheme 对象

代表一个 Office 主题。


## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的 Office 主题的字体方案中正文的西文字体的名称。*/
function test() {
    let themeFonts = ActiveWorkbook.Theme.ThemeFontScheme.MinorFont
    alert(themeFonts.Item(msoThemeLatin).Name)
}
```


```JavaScript
/*本示例运行于表格组件，打开名为“example.xlsx”的工作簿，然后从文件加载 Office 主题的效果方案到该工作簿。*/
function test() {
    let workbook = Workbooks.Open("D:\\TestFile\\example.xlsx")
    workbook.Theme.ThemeEffectScheme.Load("D:\\TestFile\\WPS.eftx")
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ThemeColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/OfficeTheme/member/ThemeColorScheme) | 获取一个代表 Office 主题配色方案的 **ThemeColorScheme** 对象。只读。 |
| [ThemeEffectScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/OfficeTheme/member/ThemeEffectScheme) | 获取一个代表 Office 主题效果方案的 **ThemeEffectScheme** 对象。只读。 |
| [ThemeFontScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/OfficeTheme/member/ThemeFontScheme) | 获取一个代表 Office 主题字体方案 **ThemeFontScheme** 对象。只读。 |