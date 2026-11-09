# Borders.Value

等价于[Borders.LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/LineStyle)



## 语法

express.**Value**

express   一个代表 **Borders** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动工作簿的第一个样式对象的边框线设置成 xlContinuous 。*/
function test() {
    ActiveWorkbook.Styles.Item(1).Borders.Value = xlContinuous
}
```


```JavaScript
/*本示例显示活动工作簿的第一个样式对象的边框线条样式是否为 xlNone 。*/
function test() {
    alert(ActiveWorkbook.Styles.Item(1).Borders.Value == xlNone)
}
```
