# Presentation.PageSetup

返回一个 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PageSetup/obj)** 对象，该对象的属性控制指定演示文稿的幻灯片的页面设置属性。只读。



## 语法

express.**PageSetup**

express   一个代表 **Presentation** 对象的变量。

## 类型

PageSetup

## 示例


```JavaScript
/*本示例为名为“Pres1”的演示文稿设置幻灯片的大小和方向。*/
function test() {
    let pageSetup = Application.Presentations.Item("Pres1").PageSetup
    pageSetup.SlideSize = ppSlideSize35MM
    pageSetup.SlideOrientation = msoOrientationHorizontal
}
```


```JavaScript
/*本示例将第一篇演示文稿所有幻灯片都设为宽 11 英寸、高 8.5 英寸同时幻灯片编号设为从 17 开始。*/
function test() {
    let pageSetup = Presentations.Item(1).PageSetup
    pageSetup.SlideWidth = 11 * 72
    pageSetup.SlideHeight = 8.5 * 72
    pageSetup.FirstSlideNumber = 17
}
```
