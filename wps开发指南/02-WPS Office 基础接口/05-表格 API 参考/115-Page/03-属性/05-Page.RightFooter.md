# Page.RightFooter

指定要在页脚中右对齐的图片或文本。



## 语法

express.**RightFooter**

express   一个代表 **Page** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例设置 Sheet1 页面页脚右对齐的文本内容为“1”。*/
function test() {
    let page = Application.Worksheets.Item("Sheet1").PageSetup.Pages.Item(1)
    page.RightFooter.Text = "1"
}
```


```JavaScript
/*本示例显示活动工作表页面页脚右对齐的文本内容。*/
function test() {
    alert(`右页脚的内容：${ActiveSheet.PageSetup.Pages.Item(1).RightFooter.Text}`)
}
```
