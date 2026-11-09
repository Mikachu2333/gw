# ThemeFont 对象

代表 Office 主题的字体方案的容器。


## 示例


```JavaScript
/*本示例运行于表格组件，将第一个工作簿的 Office 主题的字体方案中正文的西文字体和标题的西文字体的名称分别赋值给 A1 单元格和 B1 单元格。*/
function test() {
    let themeFontScheme = Workbooks.Item(1).Theme.ThemeFontScheme
    Range("A1").Value2 = themeFontScheme.MinorFont.Item(msoThemeLatin).Name
    Range("B1").Value2 = themeFontScheme.MajorFont.Item(msoThemeLatin).Name
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的 Office 主题的字体方案中正文的西文字体的名称。*/
function test() {
    let themeFonts = ActiveWorkbook.Theme.ThemeFontScheme.MinorFont
    alert(themeFonts.Item(msoThemeLatin).Name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeFont/member/Name) | 获取或设置 Office 主题的字体方案中字体的名称。可读/写。 |