# ThemeFontScheme.Load

从文件加载 Office 主题的字体方案。



## 语法

express.**Load(FileName)**

express   一个代表 **ThemeFontScheme** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 字体方案文件的名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例运行于表格组件，从文件加载 Office 主题的字体方案到活动工作簿。*/
function test() {
    ActiveWorkbook.Theme.ThemeFontScheme.Load("D:\\TestFile\\Austin.xml")
}
```


```JavaScript
/*本示例运行于表格组件，打开名为“example.xlsx”的工作簿，然后从文件加载 Office 主题的字体方案到该工作簿。*/
function test() {
    let workbook = Workbooks.Open("D:\\TestFile\\example.xlsx")
    workbook.Theme.ThemeFontScheme.Load("D:\\TestFile\\Austin.xml")
}
```
