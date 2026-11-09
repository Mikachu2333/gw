# Graphic.ColorType

返回或设置应用于指定图片或 OLE 对象的颜色转换类型。 **[MsoPictureColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPictureColorType)** 类型，可读写。



## 语法

express.**ColorType**

express   一个代表 **Graphic** 对象的变量。

## 类型

MsoPictureColorType

## 示例


```JavaScript
/*本示例显示活动工作表中右页脚图片的颜色转换类型是否为默认颜色转换。*/
function test() {
    let graphic = ActiveSheet.PageSetup.RightFooterPicture
    alert(graphic.ColorType == msoPictureAutomatic)
}
```


```JavaScript
/*此示例将第一张工作表中左页脚图片的颜色转换类型设置为黑白转换。*/
function test() {
    let graphic = Worksheets.Item(1).PageSetup.LeftFooterPicture
    graphic.ColorType = msoPictureBlackAndWhite
}
```
