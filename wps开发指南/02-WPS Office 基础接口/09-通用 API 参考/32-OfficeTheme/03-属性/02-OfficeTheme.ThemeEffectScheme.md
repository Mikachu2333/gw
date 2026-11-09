# OfficeTheme.ThemeEffectScheme

获取一个代表 Office 主题效果方案的 **ThemeEffectScheme** 对象。只读。



## 语法

express.**ThemeEffectScheme**

express   一个代表 **OfficeTheme** 对象的变量。

## 类型

ThemeEffectScheme

## 示例


```JavaScript
/*本示例运行于表格组件，从文件加载 Office 主题的效果方案到活动工作簿。*/
function test() {
    ActiveWorkbook.Theme.ThemeEffectScheme.Load("D:\\TestFile\\WPS.eftx")
}
```


```JavaScript
/*本示例运行于表格组件，打开名为“example.xlsx”的工作簿，然后从文件加载 Office 主题的效果方案到该工作簿。*/
function test() {
    let workbook = Workbooks.Open("D:\\TestFile\\example.xlsx")
    workbook.Theme.ThemeEffectScheme.Load("D:\\TestFile\\WPS.eftx")
}
```
