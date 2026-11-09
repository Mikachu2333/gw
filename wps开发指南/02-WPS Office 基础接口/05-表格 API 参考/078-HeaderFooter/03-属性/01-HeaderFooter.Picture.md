# HeaderFooter.Picture

返回一个 **PictureFormat** 对象，该对象代表指定页眉或页脚中包含的图片字段。只读。



## 语法

express.**Picture**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

Graphic

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 页眉中左对齐的图片亮度。*/
function test() {
    alert(Worksheets.Item("Sheet1").PageSetup.Pages.Item(1).LeftHeader.Picture.Brightness)
}
```


```JavaScript
/*本示例将活动工作表页面页脚右对齐的图片颜色转换设置为灰度。*/
function test() {
    ActiveSheet.PageSetup.Pages.Item(1).RightFooter.Picture.ColorType = msoPictureGrayscale
}
```
