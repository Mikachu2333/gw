# ThemeFonts.Item

获取 **ThemeFonts** 集合中包含的三种语言字体之一。



## 语法

express.**Item(Index)**

express   一个代表 **ThemeFonts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | MsoFontLanguageIndex | **ThemeFont** 对象的索引值。 |

## 返回值

ThemeFont

## 示例


```JavaScript
/*本示例运行于表格组件，将第一个工作簿的主题字体方案中正文的西文字体的名称赋值给 A1 单元格。*/
function test() {
    let themeFonts = Workbooks.Item(1).Theme.ThemeFontScheme.MinorFont
    Range("A1").Value2 = themeFonts.Item(msoThemeLatin).Name
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的主题字体方案中标题的西文字体的名称。*/
function test() {
    let themeFonts = ActiveWorkbook.Theme.ThemeFontScheme.MajorFont
    alert(themeFonts.Item(msoThemeLatin).Name)
}
```
