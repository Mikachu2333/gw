# ThemeFonts 对象

代表 Office 主题的字体方案中主要和次要字体（ **[ThemeFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeFont/obj)** ）的集合。


## 示例


```JavaScript
/*本示例运行于表格组件，将第一个工作簿的主题字体方案中标题的西文字体的名称赋值给 B1 单元格。*/
function test() {
    let themeFonts = Workbooks.Item(1).Theme.ThemeFontScheme.MajorFont
    Range("B1").Value2 = themeFonts.Item(msoThemeLatin).Name
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的主题字体方案中正文的西文字体的名称。*/
function test() {
    let themeFonts = ActiveWorkbook.Theme.ThemeFontScheme.MinorFont
    alert(themeFonts.Item(msoThemeLatin).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeFonts/member/Item) | 获取 **ThemeFonts** 集合中包含的三种语言字体之一。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeFonts/member/Count) | 获取一个 **Long** 类型的值，指示 **ThemeFonts** 集合中的项数。只读。 |