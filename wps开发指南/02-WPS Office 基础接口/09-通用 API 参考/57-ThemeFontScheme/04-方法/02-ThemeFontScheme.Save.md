# ThemeFontScheme.Save

将 Office 主题的字体方案保存到文件中。



## 语法

express.**Save(FileName)**

express   一个代表 **ThemeFontScheme** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 文件的名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例运行于表格组件，将第一个工作簿的主题字体方案保存到指定文件中。*/
function test() {
    let themeFontScheme = Workbooks.Item(1).Theme.ThemeFontScheme
    themeFontScheme.Save("D:\\TestFile\\example_1.xml")
}
```


```JavaScript
/*本示例运行于表格组件，打开名为“example.xlsx”的工作簿，然后将该工作簿的主题字体方案保存到指定文件中。*/
function test() {
    let workbook = Workbooks.Open("D:\\TestFile\\example.xlsx")
    workbook.Theme.ThemeFontScheme.Save("D:\\TestFile\\example_2.xml")
}
```
