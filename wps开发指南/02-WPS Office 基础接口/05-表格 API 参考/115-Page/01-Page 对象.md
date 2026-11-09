# Page 对象

代表工作表的页面。使用 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/obj)** 对象及相关方法和属性可通过编程方式定义工作簿的页面布局。

## 说明


使用 **Item** 方法可访问工作簿的特定页面。


## 示例


```JavaScript
/*本示例设置活动工作表页面居中对齐的页眉内容为“Sheet1”。*/
function test() {
    let objPage = Application.ActiveSheet.PageSetup.Pages.Item(1)
    objPage.CenterHeader.Text = "Sheet1"
}
```


```JavaScript
/*本示例设置 Sheet1 页面右对齐的页眉内容为“Sheet1”，并且显示页眉右对齐的文本内容。*/
function test() {
    let page = Application.Worksheets.Item("Sheet1").PageSetup.Pages.Item(1)
    page.RightHeader.Text = "Sheet1"
    alert(`右页眉的内容：${page.RightHeader.Text}`)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [CenterFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Page/member/CenterFooter) | 指定要在页脚中居中对齐的图片或文本。只读。 |
| [CenterHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Page/member/CenterHeader) | 指定要在页眉中居中对齐的图片或文本。只读。 |
| [LeftFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Page/member/LeftFooter) | 指定要在页脚中左对齐的图片或文本。只读。 |
| [LeftHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Page/member/LeftHeader) | 指定要在页眉中左对齐的图片或文本。只读。 |
| [RightFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Page/member/RightFooter) | 指定要在页脚中右对齐的图片或文本。 |
| [RightHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Page/member/RightHeader) | 指定要在页眉中右对齐的图片或文本。只读。 |