# Tab.ThemeColor

返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **[XlThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlThemeColor)** 类型。



## 语法

express.**ThemeColor**

express   一个代表 **Tab** 对象的变量。

## 类型

XlThemeColor

## 说明


如果对象当前未应用主题颜色，试图访问其主题颜色则会引起无效请求运行时错误。



## 示例


```JavaScript
/*本示例设置工作表 Sheet1 选项卡的主题颜色。*/
function test() {
    Worksheets.Item("Sheet1").Tab.ThemeColor = xlThemeColorAccent4
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 选项卡的主题颜色是否为xlThemeColorAccent1。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    alert(chart.Tab.ThemeColor == xlThemeColorAccent1)
}
```
