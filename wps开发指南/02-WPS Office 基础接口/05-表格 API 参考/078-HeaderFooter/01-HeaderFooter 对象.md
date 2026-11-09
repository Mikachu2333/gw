# HeaderFooter 对象

代表单一页眉或页脚。 **HeaderFooter** 对象是 **HeadersFooters** 集合的一个成员。 **HeadersFooters** 集合包含指定工作簿节中的所有页眉和页脚。

## 说明


不能将 **HeaderFooter** 对象添加到 **HeadersFooters** 集合。

使用 **PageSetup** 对象的 **DifferentFirstPageHeaderFooter** 属性可指定不同的首页。


## 示例


```JavaScript
/*本示例设置活动工作表页面左对齐的页眉内容为“Test”。*/
function test() {
    ActiveSheet.PageSetup.Pages.Item(1).LeftHeader.Text = "Test"
}
```


```JavaScript
/*本示例设置工作表 Sheet1 页脚中居中对齐的图片对比度。*/
function test() {
    Worksheets.Item("Sheet1").PageSetup.Pages.Item(1).CenterFooter.Picture.Contrast = 0.8
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Picture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HeaderFooter/member/Picture) | 返回一个 **PictureFormat** 对象，该对象代表指定页眉或页脚中包含的图片字段。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HeaderFooter/member/Text) | 返回或设置一个 **Text** 对象，该对象代表指定页眉或页脚中包含的文本。可读/写。 |