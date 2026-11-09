# Page.RightHeader

指定要在页眉中右对齐的图片或文本。只读。



## 语法

express.**RightHeader**

express   一个代表 **Page** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例设置活动工作表页面页眉右对齐的文本内容为“第1页”。*/
function test() {
    let page = ActiveSheet.PageSetup.Pages.Item(1)
    page.RightHeader.Text = "第1页"
}
```


```JavaScript
/*本示例显示 Sheet1 页面页眉右对齐的文本内容。*/
function test() {
    let page = Application.Worksheets.Item("Sheet1").PageSetup.Pages.Item(1)
    alert(`右页眉的内容：${page.RightHeader.Text}`)
}
```
