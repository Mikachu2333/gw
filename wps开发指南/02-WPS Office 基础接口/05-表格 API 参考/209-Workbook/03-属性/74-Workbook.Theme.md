# Workbook.Theme

返回应用于当前工作簿的主题。只读。



## 语法

express.**Theme**

express   一个代表 **Workbook** 对象的变量。

## 类型

OfficeTheme

## 示例


```JavaScript
/*本示例将活动工作簿的主题的字体方案保存到文件中。*/
function test() {
    ActiveWorkbook.Theme.ThemeFontScheme.Save("D:\\example1.xml")
}
```


```JavaScript
/*本示例将第一张工作簿的主题的msoThemeAccent1配色方案的颜色设置为红色。*/
function test() {
    Workbooks.Item(1).Theme.ThemeColorScheme.Colors(msoThemeAccent1).RGB = RGB(255, 0, 0)
}
```
