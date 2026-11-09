# PageSetup.EvenPage

返回一个 **Page** 对象，该对象可用于设置工作簿或节的偶数页上的文本对齐方式。只读。



## 语法

express.**EvenPage**

express   一个代表 **PageSetup** 对象的变量。

## 类型

Page

## 示例


```JavaScript
/*本示例设置活动工作表偶数页右页眉文本内容为"第一页"。*/
function test() {
    ActiveSheet.PageSetup.OddAndEvenPagesHeaderFooter = true
    ActiveSheet.PageSetup.EvenPage.RightHeader.Text = "第一页"
}
```


```JavaScript
/*本示例设置 Sheet1 偶数页左页脚文本内容为"2"。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.OddAndEvenPagesHeaderFooter  = true
    Application.Worksheets.Item("Sheet1").PageSetup.EvenPage.LeftFooter.Text = "2"
}
```
