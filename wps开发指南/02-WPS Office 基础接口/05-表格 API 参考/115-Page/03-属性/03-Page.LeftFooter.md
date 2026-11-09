# Page.LeftFooter

指定要在页脚中左对齐的图片或文本。只读。



## 语法

express.**LeftFooter**

express   一个代表 **Page** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例设置活动工作表页面页脚左对齐的文本内容为“第2页”。*/
function test() {
    let page = ActiveSheet.PageSetup.Pages.Item(1)
    page.LeftFooter.Text = "第2页"
}
```


```JavaScript
/*本示例显示 Sheet2 页面页脚左对齐的文本内容。*/
function test() {
    let page = Application.Worksheets.Item("Sheet2").PageSetup.Pages.Item(1)
    alert(`左页脚的内容：${page.LeftFooter.Text}`)
}
```
