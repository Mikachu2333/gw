# PageSetup.FirstPage

返回一个 **Page** 对象，该对象可用于设置工作簿或节的第一页上的文本对齐方式。只读。



## 语法

express.**FirstPage**

express   一个代表 **PageSetup** 对象的变量。

## 类型

Page

## 示例


```JavaScript
/*本示例设置活动工作表首页页脚居中文本内容为"第2页"。*/
function test() {
    ActiveSheet.PageSetup.DifferentFirstPageHeaderFooter = true
    ActiveSheet.PageSetup.FirstPage.CenterFooter.Text = "第2页"
}
```


```JavaScript
/*本示例设置 Sheet1 首页左页眉文本内容为"3"。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.DifferentFirstPageHeaderFooter = true
    Application.Worksheets.Item("Sheet1").PageSetup.FirstPage.LeftHeader.Text = "3"
}
```
