# ThemeColorScheme 对象

代表 Office 主题的配色方案。


## 示例


```JavaScript
/*本示例运行于表格组件，从文件加载配色方案到活动工作簿。*/
function test() {
    ActiveWorkbook.Theme.ThemeColorScheme.Load("D:\\示例\\Green.xml")
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中指定配色方案的索引值是否为msoThemeAccent2。*/
function test() {
    let themeColorScheme = ActiveWorkbook.Theme.ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent2).ThemeColorSchemeIndex == msoThemeAccent2)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Colors](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeColorScheme/member/Colors) | 获取一个代表 Office 主题的配色方案中颜色的对象。 |
| [Load](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeColorScheme/member/Load) | 从文件加载 Office 主题的配色方案。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ThemeColorScheme/member/Count) | 获取一个 **Integer** 类型的值，指示 **ThemeColorScheme** 集合中的项数。只读。 |