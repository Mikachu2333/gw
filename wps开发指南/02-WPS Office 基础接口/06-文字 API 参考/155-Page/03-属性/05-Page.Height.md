# Page.Height

返回一个 **Long** 类型的值，该值代表页面的高度（以像素为单位）。



## 语法

express.**Height**

express   一个代表 **Page** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **Page** 对象的 **Top** 和 **Left** 属性总是返回 0（零），以指示页面的左上角。 **Height** 和 **Width** 属性返回在“页面设置”对话框中指定的或通过 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/obj)** 对象指定的纸张大小的高度和宽度，以磅为单位（72 磅 = 1 英寸）。例如，对于纵向模式下的 8-1/2 × 11 英寸页面， **Height** 属性返回 792， **Width** 属性返回 612。所有这四个属性都是只读的。



## 示例


```JavaScript
/*本示例显示第一个窗口的活动窗格的第一页的高度。*/
function test() {
    let page = Windows.Item(1).ActivePane.Pages.Item(1)
    alert(page.Height)
}
```


```JavaScript
/*本示例显示活动文档上活动窗口的第一个窗格的第一页的高度。*/
function test() {
    let page = ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1)
    alert(`页面的高度：${page.Height} 磅`)
}
```
