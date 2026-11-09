# OfficeTheme.ThemeColorScheme

获取一个代表 Office 主题配色方案的 **ThemeColorScheme** 对象。只读。



## 语法

express.**ThemeColorScheme**

express   一个代表 **OfficeTheme** 对象的变量。

## 类型

ThemeColorScheme

## 示例


```JavaScript
/*本示例运行于表格组件，从文件加载主题配色方案到第一个工作簿。*/
function test() {
    Workbooks.Item(1).Theme.ThemeColorScheme.Load("D:\\TestFile\\Green.xml")
}
```


```JavaScript
/*本示例运行于表格组件，显示第一个工作簿中指定配色方案的索引值是否为msoThemeAccent2。*/
function test() {
    let themeColorScheme = Workbooks.Item(1).Theme.ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent2).ThemeColorSchemeIndex == msoThemeAccent2)
}
```
