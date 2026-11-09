# Page.CenterFooter

指定要在页脚中居中对齐的图片或文本。只读。



## 语法

express.**CenterFooter**

express   一个代表 **Page** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例设置活动工作表页面居中对齐的页脚内容为“第2页”。*/
function test() {
    ActiveSheet.PageSetup.Pages.Item(1).CenterFooter.Text = "第2页"
}
```


```JavaScript
/*本示例显示 Sheet1 页面居中对齐的页脚内容。*/
function test() {
    alert(Application.Worksheets.Item("Sheet1").PageSetup.Pages.Item(1).CenterFooter.Text)
}
```
