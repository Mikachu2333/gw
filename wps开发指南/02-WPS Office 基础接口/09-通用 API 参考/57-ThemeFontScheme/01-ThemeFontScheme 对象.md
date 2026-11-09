# ThemeFontScheme 对象

代表 Office 主题的字体方案。


## 示例


```JavaScript
/*本示例运行于表格组件，将活动工作簿的主题字体方案保存到指定文件中。*/
function test() {
    let themeFontScheme = ActiveWorkbook.Theme.ThemeFontScheme
    themeFontScheme.Save("D:\\TestFile\\example_1.xml")
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的主题字体方案中标题的西文字体的名称。*/
function test() {
    let themeFonts = ActiveWorkbook.Theme.ThemeFontScheme.MajorFont
    alert(themeFonts.Item(msoThemeLatin).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Load](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeFontScheme/member/Load) | 从文件加载 Office 主题的字体方案。 |
| [Save](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeFontScheme/member/Save) | 将 Office 主题的字体方案保存到文件中。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [MajorFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeFontScheme/member/MajorFont) | 获取文档中“标题”的字体设置。只读。 |
| [MinorFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeFontScheme/member/MinorFont) | 获取文档的“正文”的字体设置。只读。 |