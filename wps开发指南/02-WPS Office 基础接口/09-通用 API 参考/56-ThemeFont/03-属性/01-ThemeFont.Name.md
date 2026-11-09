# ThemeFont.Name

获取或设置 Office 主题的字体方案中字体的名称。可读/写。



## 语法

express.**Name**

express   一个代表 **ThemeFont** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的 Office 主题的字体方案中标题的西文字体的名称。*/
function test() {
    let themeFonts = ActiveWorkbook.Theme.ThemeFontScheme.MajorFont
    alert(themeFonts.Item(msoThemeLatin).Name)
}
```


```JavaScript
/*本示例运行于表格组件，将第一个工作簿的 Office 主题的字体方案中正文的西文字体的名称赋值给 A1 单元格。*/
function test() {
    let themeFonts = Workbooks.Item(1).Theme.ThemeFontScheme.MinorFont
    Range("A1").Value2 = themeFonts.Item(msoThemeLatin).Name
}
```
