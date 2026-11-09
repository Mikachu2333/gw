# HeaderFooter.Text

返回或设置一个 **Text** 对象，该对象代表指定页眉或页脚中包含的文本。可读/写。



## 语法

express.**Text**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动工作表页面左对齐的页眉内容为“Hello”。*/
function test() {
    ActiveSheet.PageSetup.Pages.Item(1).LeftHeader.Text = "Hello"
}
```


```JavaScript
/*本示例显示 Sheet1 页面居中对齐的页脚内容。*/
function test() {
    alert(Application.Worksheets.Item("Sheet1").PageSetup.Pages.Item(1).CenterFooter.Text)
}
```
