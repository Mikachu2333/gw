# WebOptions.PixelsPerInch

返回或设置网页中图形图像及表格单元格的密度（每英寸的像素数）。可读写 **Long** 类型。



## 语法

express.**PixelsPerInch**

express   一个代表 **WebOptions** 对象的变量。

## 类型

number（int4 精度）

## 说明


密度设置范围通常为 19 到 480，对于常用屏幕大小来说，密度一般设置为 72、96 和 120。默认设置为 96。

无论何时在 Web 浏览器中查看所保存文档，本属性都可确定指定的网页中相对于文本尺寸的图像以及单元格的大小。图像或单元格的实际最终尺寸等于原始尺寸（以英寸为单位）乘以每英寸中的像素数。

使用 **[ScreenSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/ScreenSize)** 属性可为目标 Web 浏览器设置最佳屏幕大小。



## 示例


```JavaScript
/*此示例根据 Web 浏览器的目标屏幕大小设置像素密度。*/
function test() {
    let webOptions = ActiveDocument.WebOptions
    switch (webOptions.ScreenSize) {
        case msoScreenSize800x600:
            webOptions.PixelsPerInch = 72
            break
        case msoScreenSize1024x768:
            webOptions.PixelsPerInch = 96
            break
        default:
            webOptions.PixelsPerInch = 120
    }
}
```


```JavaScript
/*本示例显示当第一个文档另存为网页时图形图像及表格单元格的密度（每英寸的像素数）。*/
function test() {
    alert(Documents.Item(1).WebOptions.PixelsPerInch)
}
```
