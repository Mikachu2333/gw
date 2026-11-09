# ThemeEffectScheme 对象

代表 Office 主题的效果方案。


## 示例


```JavaScript
/*本示例运行于表格组件，从文件加载 Office 主题的效果方案到活动工作簿。*/
function test() {
    ActiveWorkbook.Theme.ThemeEffectScheme.Load("D:\\示例\\WPS.eftx")
}
```


```JavaScript
/*本示例运行于表格组件，打开名为“example.xlsx”的工作簿，然后从文件加载 Office 主题的效果方案到该工作簿。*/
function test() {
    let workbook = Workbooks.Open("D:\\示例\\example.xlsx")
    workbook.Theme.ThemeEffectScheme.Load("D:\\示例\\WPS.eftx")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Load](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeEffectScheme/member/Load) | 从文件加载 Office 主题的效果方案。 |