# Page.LeftHeader

指定要在页眉中左对齐的图片或文本。只读。



## 语法

express.**LeftHeader**

express   一个代表 **Page** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例设置活动工作表页面左对齐的页眉内容为“sheet1”。*/
function test() {
    ActiveSheet.PageSetup.Pages.Item(1).LeftHeader.Text = "sheet1"
}
```


```JavaScript
/*本示例显示 Sheet1 页面页眉左对齐的文本内容。*/
function test() {
    let page = Application.Worksheets.Item("Sheet1").PageSetup.Pages.Item(1)
    alert(`左页眉的内容：${page.LeftHeader.Text}`)
}
```
